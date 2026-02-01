import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";


const inter = Inter({
  variable: "--font-family",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: 'TravelTrucks',
  icons: {
    icon: '/favicon.svg',
  },

  description: 'TravelTrucks is a camper rental web app where you can explore available campers, view detailed listings with reviews, and easily book your next road trip adventure.',
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable}`}>
        <Header />
        {children}
      </body>
 
    </html>
  );
}
