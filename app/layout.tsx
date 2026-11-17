import Link from "next/link";
import "./styles/globals.scss";
import Footer from "@/components/Footer"; 
import Header from "@/components/Header";

export const metadata = { title: "Caliber Archive" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header/>
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
