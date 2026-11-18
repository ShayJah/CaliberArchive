import { DatabaseSync } from "node:sqlite";

// shortcut: single-file SQLite, fine for a catalog; move to Postgres if you need multi-server writes or orders at scale.
const db = new DatabaseSync("caliber.db");

db.exec(`CREATE TABLE IF NOT EXISTS products (
  id INTEGER PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  price_cents INTEGER NOT NULL,
  image TEXT,
  description TEXT
)`);

if (db.prepare("SELECT COUNT(*) AS n FROM products").get()!.n === 0) {
  const ins = db.prepare("INSERT INTO products (slug,name,price_cents,image,description) VALUES (?,?,?,?,?)");
  ins.run("archive-tee", "Archive Tee", 4500, "", "Heavyweight cotton tee.");
  ins.run("field-jacket", "Field Jacket", 14500, "", "Washed canvas field jacket.");
  ins.run("cargo-pant", "Cargo Pant", 9500, "", "Relaxed cargo pant.");
  ins.run("power-beanie", "Power Beanie", 8000, "", "Printed Beanie.");
}

export type Product = { id: number; slug: string; name: string; price_cents: number; image: string; description: string };

export const getProducts = () => db.prepare("SELECT * FROM products ORDER BY id").all() as Product[];
export const getProduct = (slug: string) =>
  db.prepare("SELECT * FROM products WHERE slug = ?").get(slug) as Product | undefined;
