import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { ArticleJsonLd, NextSeo } from 'next-seo';
import Image from 'next/image';
import Prism from 'prismjs';
import { useEffect } from 'react';

import { XIcon } from '../../components/icons/XIcon';
import { PostLayout } from '../../components/posts/PostLayout';
import { NotionBlockRenderer } from '../../components/notion/NotionBlockRenderer';
import { Post as PostType, postsApi } from '../../lib/postsApi';
import { Badge } from 'src/components/Badge';

type Props = {
  post: PostType;
  postContent: any[];
  previousPathname?: any;
};

export default function Post({
  post: { title, description, createdAt, slug, coverImage, tags },
  postContent,
  previousPathname,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const url = `${process.env.NEXT_PUBLIC_URL}/blog/${slug}`;
  const openGraphImageUrl = `${process.env.NEXT_PUBLIC_URL}/api/og?title=${title}&description=${description}`;

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          images: [{ url: openGraphImageUrl }],
        }}
      />
      <ArticleJsonLd
        url={url}
        images={[openGraphImageUrl]}
        title={title}
        datePublished={createdAt}
        authorName="Henrique Fonseca"
        description={description}
      />

      <PostLayout
        meta={{ title, description, date: createdAt }}
        previousPathname={previousPathname}
      >
        <div className="mt-4 flex max-w-xl flex-wrap gap-1 font-mono">
          {tags.map((tag) => (
            <Badge key={tag} href={`/blog/tags/${tag}`}>
              #{tag}
            </Badge>
          ))}
        </div>
        {coverImage && (
          <Image
            width={500}
            height={500}
            src={coverImage}
            alt={`Cover image for ${title}`}
            className="w-full h-96 object-cover rounded-lg"
          />
        )}

        <div className="pb-32">
          {postContent.map((block) => (
            <NotionBlockRenderer key={block.id} block={block} />
          ))}

          <hr />

          <a
            className="group block text-xl font-semibold md:text-3xl no-underline"
            href={`http://x.com/share?text=${title}&url=${url}`}
          >
            <h4 className="max-w-lg flex cursor-pointer flex-col duration-200 ease-in-out group-hover:text-primary group-hover:fill-primary fill-white text-wrap">
              <XIcon className="my-6 h-10 w-10 transform transition-transform group-hover:-rotate-12 text-black dark:text-white group-hover:text-primary" />
              Click here to share this article with your friends on X if you liked it.
            </h4>
          </a>
        </div>
      </PostLayout>
    </>
  );
}

export const getStaticProps: GetStaticProps<Props, { slug: string }> = async (context) => {
  const slug = context.params?.slug;
  const allPosts = await postsApi.getPosts();
  const post = allPosts.find((post) => post.slug === slug);

  if (!post) {
    return {
      notFound: true,
    };
  }

  const postContent = await postsApi.getPost(post.id);

  return {
    props: {
      post,
      postContent,
    },
    revalidate: 10,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await postsApi.getPosts();

  return {
    paths: posts.map((post) => ({ params: { slug: post.slug } })),
    fallback: 'blocking',
  };
};
