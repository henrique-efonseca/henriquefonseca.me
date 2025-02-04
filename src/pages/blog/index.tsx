import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { NextSeo } from 'next-seo';

import { Badge } from '../../components/Badge';
import { PageLayout } from '../../components/PageLayout';
import { PostPreview } from '../../components/posts/PostPreview';
import { Post, postsApi } from '../../lib/postsApi';

const seoTitle = 'Blog - Henrique Fonseca';
const seoDescription =
  'All of my thoughts on programming, building products, leadership, and more. Not structured.';

interface Props {
  posts: Post[];
  tags: Array<string>;
}

export default function Posts({ posts, tags }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <NextSeo
        title={seoTitle}
        description={seoDescription}
        canonical={`${process.env.NEXT_PUBLIC_URL}/blog`}
        openGraph={{
          images: [{ url: `${process.env.NEXT_PUBLIC_URL}/api/og?title=${seoTitle}` }],
        }}
      />
      <PageLayout
        title="Blog"
        intro="Here I share my projects, experiences and thoughts in areas like technology, business, society, economics, lifestyle and philosophy. I don't consider myself an expert in any of these fields, but I love learning about different topics and sharing my thoughts with the world."
      >
        <h3 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">Tags</h3>
        <div className="mt-4 flex max-w-xl flex-wrap gap-1 font-mono">
          {tags.map((tag) => (
            <Badge key={tag} href={`/blog/tags/${tag}`}>
              #{tag}
            </Badge>
          ))}
        </div>

        <div className="mt-24 md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
          <div className="flex max-w-3xl flex-col space-y-16">
            {posts.map((post) => (
              <PostPreview key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </PageLayout>
    </>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const posts = await postsApi.getPosts('desc');

  return {
    props: {
      posts,
      tags: Array.from(new Set(posts.map((post) => post.tags).flat())),
    },
    revalidate: 10,
  };
};
