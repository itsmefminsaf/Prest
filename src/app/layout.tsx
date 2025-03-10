import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prest | Tourist hotel in the heart of the city",
  description: "Prest is a tourist hotel in the heart of the city.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`to-bg from-bg-secondary bg-radial antialiased`}>
        {children}
      </body>
    </html>
  );
}
