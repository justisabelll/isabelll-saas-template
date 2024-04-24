import Link from 'next/link';
import { formatDate, getBlogPosts } from '@/app/(pages)/blog/utils';
import type { BlogPost } from '@/app/(pages)/blog/utils';
import { config } from '@/config';

export default function Page() {
  return (
    <div className="">
      <Header />
      <BlogPost />
    </div>
  );
}

const Header = () => {
  return (
    <div className="px-6 py-12 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-bold tracking-tight  sm:text-6xl">
          {config.blog.title.default}
        </h2>
        <p className="mt-6 text-lg leading-8 ">{config.blog.description}</p>
      </div>
    </div>
  );
};

const BlogPost = () => {
  let allPosts = getBlogPosts();

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-12">
      {allPosts
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <BlogPostCard key={post.slug} post={post} />
        ))}
    </div>
  );
};

const BlogPostCard = ({ post }: { post: BlogPost }) => {
  return (
    <article className="flex flex-col items-start justify-between hover:cursor-pointer hover:text-gray-600">
      <Link href={`/blog/${post.slug}`}>
        <div className="relative w-full">
          <img
            src={post.metadata.image}
            alt=""
            className="aspect-[16/9] w-full rounded-2xl object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
          />
          <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
        </div>
        <div className="max-w-xl">
          <div className="mt-8 flex items-center gap-x-4 text-xs">
            <time
              dateTime={post.metadata.publishedAt}
              className="text-gray-500"
            >
              {formatDate(post.metadata.publishedAt, false)}
            </time>
            {/* Assuming category is not available in the current data structure, hence not included */}
          </div>
          <div className="group relative">
            <h3 className="mt-3 text-lg font-semibold leading-6">
              <span className="absolute inset-0" />
              {post.metadata.title}
            </h3>
            <p className="mt-5 line-clamp-3 text-sm leading-6 ">
              {post.metadata.summary}
            </p>
          </div>
          {/* Assuming author information is not available in the current data structure, hence not included */}
        </div>
      </Link>
    </article>
  );
};
