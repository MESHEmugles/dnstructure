import Header from "@/components/shop/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Architectural Shop",
  description: "Shop for all architectural designs",
};

interface ShopProps {
    children: React.ReactNode;
}

export default function Layout({children,}: ShopProps) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
      </body>
    </html>
  );
}
