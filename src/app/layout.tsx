import type { Metadata } from "next";
import type { Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

export const viewport: Viewport = {
  initialScale: 1.0,
  width: "device-width",
};
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zoom Tutoring Meetups",
  description: "Zoom Session Space for Tutors/Tutees",
  icons: {
    icon: "https://yt3.googleusercontent.com/ytc/AIdro_nEMrtUlE0NRxwOS8-a04eDhnovhal7ZfS8ywgwZ-6f2GQ=s900-c-k-c0x00ffffff-no-rj",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
