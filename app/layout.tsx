import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const  JoseinSans= localFont({
  src: "./fonts/JosefinSans-Italic-VariableFont_wght.ttf",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "ROT HACKERS CONTENT GENERATOR",
  description: "Ai powered platform for seamless content generation, enhancing productivity and creativity",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={JoseinSans.className}>
        {children}
      </body>
    </html>
    </ClerkProvider>  
  );
}
