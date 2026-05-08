import Script from "next/script";
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
  title: "Zack Lown | Homepage",
  description: "A refined Next.js homepage for showcasing products, experiments, and case studies."
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${newsreader.variable}`}
      data-scroll-behavior="smooth"
    >
      <body>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-K77XTR7NHV"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-K77XTR7NHV');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
