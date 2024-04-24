import { getBlogPosts } from '@/app/(pages)/blog/utils';
import { config } from '@/config';

export const baseUrl = config.domainName;

export async function sitemap() {
  let blogs = getBlogPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date().toISOString().split('T')[0],
    },
    ...blogs,
  ];
}
