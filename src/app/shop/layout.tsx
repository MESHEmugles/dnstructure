import Header from "@/components/shop/Header";
import Aboutanime from "@/components/utils/Animate";
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
        <Aboutanime delay={0.5}>
          <Header/>
          {children}
        </Aboutanime>
      </body>
    </html>
  );
}
