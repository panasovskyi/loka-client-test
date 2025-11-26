import type { Metadata } from "next";
import "../styles/globals.scss";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["cyrillic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Loka WebApp",
  description: "Telegram WebApp Example",
  viewport: "width=device-width, initial-scale=1.0",
  appleWebApp: {
    capable: true,
  },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="uk">
      <body className={`${montserrat.variable}`}>
        {children}
      </body>
    </html>
  );
}
