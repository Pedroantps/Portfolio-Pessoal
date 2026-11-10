import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import { siteConfig } from "@/config/site";
import { CustomCursor } from "@/components/ui/CustomCursor";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--body-font",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} - ${siteConfig.role}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/portfolio.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${archivo.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
