import { compareDesc } from 'date-fns';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { NextSeo } from 'next-seo';

import { Container } from '../components/Container';
import { PageTitle } from '../components/PageTitle';
import { Photos } from '../components/Photos';
import { Experience } from '../components/Experience';
import { Skills } from '../components/Skills';
import { SocialLink } from '../components/SocialLink';
import { PostPreview } from '../components/posts/PostPreview';
import { About, Name, SocialMedia } from '../data/lifeApi';
import { Post, postsApi } from '../lib/postsApi';
import Link from 'next/link';

const seoTitle = 'Henrique Fonseca';
const seoDescription =
  "While many might call me a Software Engineer, I consider myself a Problem Solver at heart. I thrive on learning about diverse topics and working across various industries. My journey includes: Software Development, Startup Founder, Association Founder, Project Management, Networking Engineering, and more. My passion lies in leveraging technology to drive innovation and create solutions that propel progress and add value to society. I'm always looking for new challenges and opportunities to learn and grow 😄!";

type Props = {
  latestPosts: Post[];
};

export default function Home({ latestPosts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <NextSeo
        title={seoTitle}
        description={seoDescription}
        canonical={`${process.env.NEXT_PUBLIC_URL}`}
        openGraph={{
          images: [
            {
              url: `${process.env.NEXT_PUBLIC_URL}/api/og?title=${seoTitle}&description=${seoDescription}`,
            },
          ],
        }}
      />
      <Container className="mt-9">
        <div className="max-w-2xl">
          <PageTitle>{Name}</PageTitle>
          <p className="text-zinc-500 text-balance">
            Driving Societal Value with Software Solutions
          </p>
          <p className="mt-6 max-w-2xl text-base text-balance">{About}</p>
          <div className="mt-6 flex gap-6">
            {SocialMedia.map((socialProfile) => (
              <SocialLink
                key={socialProfile.name}
                aria-label={`Follow on ${socialProfile.name}`}
                href={socialProfile.link}
                icon={socialProfile.icon}
              />
            ))}
          </div>
        </div>
      </Container>
      <Container className="mt-12">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col ">
            <Experience />
          </div>
          <div className="flex flex-col lg:ml-12">
            <Skills />
          </div>
        </div>

        <div className="w-full space-y-10 mt-20">
          <h1 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
            Latest Posts
          </h1>

          <Link href="/blog" className="text-primary hover:underline">
            Explore Blog
          </Link>

          {latestPosts.map((blogPost) => (
            <PostPreview key={blogPost.slug} post={blogPost} dense />
          ))}
        </div>
      </Container>
    </>
  );
}

const NEWEST_POSTS_TO_DISPLAY = 5;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const latestPosts = await postsApi.getPosts('desc', NEWEST_POSTS_TO_DISPLAY);

  return {
    props: { latestPosts },
    revalidate: 10,
  };
};
