import { baseUrl } from './sitemap';

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/', '/blog/'],
        disallow: [],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
