import "../global.css";
import { Inter } from "next/font/google";
import LocalFont from "next/font/local";
import { Metadata } from "next";
import { Analytics } from "./components/analytics";
import { ClientBody } from "./components/client-body";

export const metadata: Metadata = {
  metadataBase: new URL("https://ahmetkadayifci.com"),
  title: {
    default: "Ahmet Kadayıfçı",
    template: "%s | Ahmet Kadayıfçı",
  },
  openGraph: {
    title: "Ahmet Kadayıfçı",
    url: "https://ahmetkadayifci.com",
    siteName: "ahmetkadayifci.com",
    locale: "tr-TR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    shortcut: "/favicon.png",
  },
};
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <head>
        <Analytics />
      </head>
      <ClientBody>
        {children}
      </ClientBody>
    </html>
  );
}
