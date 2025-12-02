import type { Metadata } from "next";
import "../styles/globals.scss";
import { Montserrat } from "next/font/google";
import Script from 'next/script';
import WebInitializer from '@/utils/WebInitializer';

const montserrat = Montserrat({
  subsets: ["cyrillic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Loka WebApp",
  description: "Telegram WebApp Example",
  appleWebApp: {
    capable: true,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="uk">
      <head><Script
        src="https://telegram.org/js/telegram-web-app.js"
        strategy="beforeInteractive"
        async={true}
      /></head>

      <body className={`${montserrat.variable}`}>
        
        <WebInitializer />
        {children}
      </body>
    </html>
  );
}
