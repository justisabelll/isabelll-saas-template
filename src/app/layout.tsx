import { GeistSans } from 'geist/font/sans';
import { ClerkProvider } from '@clerk/nextjs';
import { ThemeProvider } from '@/components/ui/theme-provider';
import { Toaster } from '@/components/ui/sonner';
import { Metadata } from 'next';
import { baseUrl } from '@/seo/sitemap';
import Nav from '@/components/navbar';
import { Footer } from '@/components/footer';
import { config } from '@/config';

import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: config.appName,
  description: config.appDescription,
  openGraph: {
    title: config.appName,
    description: config.appDescription,
    type: 'website',
    url: baseUrl,
    locale: 'en_US',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <ClerkProvider>
        <body className="">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Nav />
            <main className="">
              {children}
              <Toaster />
            </main>
          </ThemeProvider>
          <Footer />
        </body>
      </ClerkProvider>
    </html>
  );
}
