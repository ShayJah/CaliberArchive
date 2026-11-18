import { notFound } from "next/navigation";
import { getProduct } from "@/lib/db";
import styles from "./product.module.scss";

export const dynamic = "force-dynamic";

export default async function Product({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const p = getProduct((await params).slug);
  if (!p) notFound();
  return (
    <div className={styles.productLayout}>
      <div className={styles.imageGallery}>
        <img />
        <img />
        <img />
        <img />
      </div>
      <article className={styles.productDetails}>
        <div className={styles.productHeader}>
          <h1>{p.name}</h1>
          <p className={styles.price}>${(p.price_cents / 100).toFixed(2)}</p>
        </div>
        <div className={styles.styleSelector}>
          <label>Style</label>
          <ul>
            <button></button>
            <button></button>
            <button></button>
            <button></button>
          </ul>
        </div>
        <div className={styles.sizeSelector}>
          <label>Size</label>
          <ul>
            <button>SM</button>
            <button>MD</button>
            <button>LG</button>
            <button>XL</button>
          </ul>
        </div>
        <div className={styles.buttonGroup}>
          <button className={styles.addToCart}>Add to Cart</button>
          <button className={styles.wishList}>8</button>
        </div>
        <p>{p.description}</p>
      </article>
    </div>
  );
}
