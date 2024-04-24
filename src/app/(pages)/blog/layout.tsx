import { config } from '@/config';
import { Metadata } from 'next';
import { baseUrl } from '@/seo/sitemap';

export const metadata: Metadata = {
  metadataBase: new URL(`${baseUrl}/blog`),
  title: config.blog.title,
  description: config.blog.description,
  openGraph: {
    title: config.blog.title,
    description: config.blog.description,
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

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
