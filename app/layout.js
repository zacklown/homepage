import { Manrope, Newsreader } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans"
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-serif"
});

export const metadata = {
  title: "Homepage | Project Index",
  description: "A refined Next.js homepage for showcasing products, experiments, and case studies."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${manrope.variable} ${newsreader.variable}`}>
      <body>{children}</body>
    </html>
  );
}
