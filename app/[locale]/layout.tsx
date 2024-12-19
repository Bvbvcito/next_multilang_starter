import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/ui/navbar/Navbar";
import Footer from "@/components/ui/footer/Footer";
import DebugBreakpoint from "@/components/development/DebugBreakPoints";

// Next Intl Imports
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { Locale, routing } from "@/i18n/routing";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Kerozene - Swiss Made Digital Solutions",
  description:
    "Kerozene - Digital solutions provider for web and mobile solutions",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = await params;
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang="en">
      <body className={`${inter.className} layout-container antialiased`}>
        <div className="navbar-background">
          <NavBar />
        </div>
        <div className="content-layout">
          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
        </div>
        <div className="footer-background">
          <footer className="footer-layout">
            <Footer />
          </footer>
        </div>
        <DebugBreakpoint display={true} />
      </body>
    </html>
  );
}
