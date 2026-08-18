import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({ subsets: ["latin"], weight: ["600", "700", "800"], variable: "--font-poppins" });
export const viewport = { width: "device-width", initialScale: 1, maximumScale: 1 };
export const metadata: Metadata = { title: "The Manali New Year Carnival 2026 | Himachal Expedition", description: "A premium 11-night Himalayan adventure through Manali, Kasol, Dharamshala and Amritsar.", keywords: ["Himachal New Year trip", "Manali group tour", "The Manali New Year Carnival 2026"], openGraph: { title: "The Manali New Year Carnival 2026", description: "Not Just Trips. Lifetime Stories.", type: "website" } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body className={`${inter.variable} ${poppins.variable}`}>{children}</body></html>; }
