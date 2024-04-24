import { notFound } from 'next/navigation';
import { CustomMDX } from '@/app/(pages)/blog/_components/mdx';
import { formatDate, getBlogPosts } from '@/app/(pages)/blog/utils';

import { baseUrl } from '@/seo/sitemap';

export async function generateStaticParams() {
  let posts = getBlogPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
export function generateMetadata({ params }: any) {
  const post = getBlogPosts().find((post) => post.slug === params.slug);
  if (!post) {
    return {
      title: 'Not Found',
      description: 'The page you are looking for does not exist',
    };
  }
  const metadata = post.metadata;
  const ogImage = metadata.image
    ? metadata.image
    : `${baseUrl}/og?title=${encodeURIComponent(metadata.title)}`;

  return {
    title: metadata.title,
    description: metadata.summary,
    authors: [{ name: metadata.author }],
    openGraph: {
      title: metadata.title,
      description: metadata.summary,
      type: 'article',
      publishedTime: metadata.publishedAt,
      url: `${baseUrl}/blog/${post.slug}`,
      images: [{ url: ogImage }],
    },
    twitter: {
      card: 'summary_large_image',
      title: metadata.title,
      description: metadata.summary,
      images: [ogImage],
    },
  };
}

export default function Blog({ params }: { params: any }) {
  let post = getBlogPosts().find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="">
      <section className="max-w-4xl mx-auto px-4 py-8">
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BlogPosting',
              headline: post.metadata.title,
              datePublished: post.metadata.publishedAt,
              dateModified: post.metadata.publishedAt,
              description: post.metadata.summary,
              image: post.metadata.image
                ? `${baseUrl}${post.metadata.image}`
                : `/og?title=${encodeURIComponent(post.metadata.title)}`,
              url: `${baseUrl}/blog/${post.slug}`,
              author: {
                '@type': 'Person',
                name: post.metadata.author,
              },
            }),
          }}
        />
        <h1 className="title font-semibold text-4xl tracking-tighter mb-4">
          {post.metadata.title}
        </h1>
        <div className="flex items-center space-x-4 mb-8">
          <span>By {post.metadata.author}</span>
        </div>
        <div>
          <div className="max-w-[1000px] max-h-[1000px] mx-auto">
            <img
              src={post.metadata.image}
              alt=""
              className="object-cover w-full h-full relative rounded-lg border"
            />
          </div>
        </div>
        <div className="text-left text-lg mb-8">
          <p>{formatDate(post.metadata.publishedAt)}</p>
        </div>
        <article className="prose lg:prose-xl prose-primary">
          <CustomMDX source={post.content} />
        </article>
      </section>
    </div>
  );
}
