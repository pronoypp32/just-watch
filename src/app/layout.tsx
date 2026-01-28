import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Font optimization
const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
});

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-poppins',
});

// SEO Metadata
export const metadata: Metadata = {
  metadataBase: new URL('https://stdigital.com'),
  title: {
    default: 'ST Digital - Expert SEO & Digital Marketing Services',
    template: '%s | ST Digital'
  },
  description: 'Leading digital marketing agency in Bangladesh offering professional SEO services, social media marketing, content marketing, PPC advertising, and complete digital solutions to grow your business online.',
  keywords: [
    'digital marketing',
    'SEO services',
    'search engine optimization',
    'social media marketing',
    'content marketing',
    'PPC advertising',
    'email marketing',
    'digital marketing agency Bangladesh',
    'SEO expert',
    'online marketing',
  ],
  authors: [{ name: 'ST Digital' }],
  creator: 'ST Digital',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://stdigital.com',
    title: 'ST Digital - Expert SEO & Digital Marketing Services',
    description: 'Professional digital marketing and SEO services to boost your online presence.',
    siteName: 'ST Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ST Digital - Expert SEO & Digital Marketing Services',
    description: 'Professional digital marketing and SEO services.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}