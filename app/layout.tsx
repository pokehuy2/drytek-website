import {ReactNode} from 'react';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Drytek",
  description: "Giải pháp hút ẩm hàng đầu",
};

const RootLayout = async ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {

  return (
    <html lang="en" data-theme="winter">
      <body className={inter.className}>
      {children}
      </body>
    </html>
  );
}

export default RootLayout;
