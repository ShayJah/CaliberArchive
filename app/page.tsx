import Link from "next/link";
import { getProducts } from "@/lib/db";
import styles from './home.module.scss';
import Filters from "@/components/Filters";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <>
    <section className={styles.pageSection}>
      <h1>CALIBER ARCHIVES FW 2026</h1>
      <p>Explore caliber archives for the upcoming season.</p>
    </section>
    <Filters />
    <div className="grid">
      {getProducts().map((p) => (
        <Link key={p.id} href={`/products/${p.slug}`} className="card">
          <div className="img" style={p.image ? { background: `url(${p.image}) center/cover` } : undefined} />
          <div>{p.name}</div>
          <div className={styles.price}>${(p.price_cents / 100).toFixed(2)}</div>
        </Link>
      ))}
    </div>
    </>
  );
}
