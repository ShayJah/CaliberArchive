import Link from "next/link";
import "./globals.scss";

export const metadata = { title: "Caliber Archive" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="header">
          <Link href="/" className="logo">Caliber Archive</Link>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
