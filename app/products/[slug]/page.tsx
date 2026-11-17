import { notFound } from "next/navigation";
import { getProduct } from "@/lib/db";

export const dynamic = "force-dynamic";

export default async function Product({ params }: { params: Promise<{ slug: string }> }) {
  const p = getProduct((await params).slug);
  if (!p) notFound();
  return (
    <article>
      <h1>{p.name}</h1>
      <p className="price">${(p.price_cents / 100).toFixed(2)}</p>
      <p>{p.description}</p>
    </article>
  );
}
