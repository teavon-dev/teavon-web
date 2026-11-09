import type { Metadata, Viewport } from "next";
import { Heebo } from "next/font/google";
import "./globals.css";

const heebo = Heebo({ subsets: ["hebrew", "latin"], weight: ["300", "400", "500", "700", "800"], variable: "--font-heebo", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.teavon.app"),
  title: { default: "Teavon · מתכונים מרילס של אינסטגרם וטיקטוק, בעברית", template: "%s · Teavon" },
  description: "משתפים רילס מאינסטגרם או מטיקטוק ל־Teavon ומקבלים מתכון מסודר בעברית: מצרכים, כמויות, שלבים וסימון כשרות. 3 ייבואים בשבוע בחינם.",
  icons: { icon: "/favicon-32.png", apple: "/apple-touch-icon.png" },
  openGraph: { type: "website", locale: "he_IL", siteName: "Teavon", images: ["/icon-512.png"] },
  other: { "apple-itunes-app": "app-id=6764895483" },
};

export const viewport: Viewport = { themeColor: "#fafaf8", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" dir="rtl" className={`${heebo.variable} scroll-smooth`}>
      <body className="min-h-screen bg-bg text-ink">{children}</body>
    </html>
  );
}
