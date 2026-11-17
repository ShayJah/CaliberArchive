import Link from "next/link";
import { getProducts } from "@/lib/db";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <div className="grid">
      {getProducts().map((p) => (
        <Link key={p.id} href={`/products/${p.slug}`} className="card">
          <div className="img" style={p.image ? { background: `url(${p.image}) center/cover` } : undefined} />
          <div>{p.name}</div>
          <div className="price">${(p.price_cents / 100).toFixed(2)}</div>
        </Link>
      ))}
    </div>
  );
}
