import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SideNav from "./ui/sidenav";
import { Header } from "./ui/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Phone Link",
  description: "Windowsp Phone Link for desktop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex h-screen flex-col md:flex-row md:overflow-hidden bg-[#202021]">
        <div className="w-full flex-none md:w-80">
          <SideNav />
        </div>
        <div className="flex-grow md:overflow-y-auto">
          <Header />
          <div className="h-auto md:mt-24 w-full bg-[#2B2D30] rounded-ss-xl border-2 border-stone-900">
            {children}
          </div>
        </div>
        </body>
    </html>
  );
}
