import { motion } from 'framer-motion';
import { NextSeo } from 'next-seo';
import Link from 'next/link';

import { PageLayout } from '../components/PageLayout';
import { ProjectCard } from '../components/ProjectCard';
import { MyProjects } from '../data/lifeApi';
import { ANIMATION_FROM_PROPS, ANIMATION_TO_PROPS } from '../lib/animation';

const seoTitle = 'Projects - Henrique Fonseca';
const seoDescription = 'Things I&apos;ve made trying to put my dent in the universe.';

export default function Projects() {
  return (
    <>
      <NextSeo
        title={seoTitle}
        description={seoDescription}
        canonical={`${process.env.NEXT_PUBLIC_URL}/projects`}
        openGraph={{
          images: [
            {
              url: `${process.env.NEXT_PUBLIC_URL}/api/og?title=${seoTitle}&description=${seoDescription}`,
            },
          ],
        }}
      />
      <PageLayout
        title="Projects"
        intro={
          <>
            A list of projects I&apos;ve worked on or I&apos;m working. If you want to know more
            about any of them, feel free to explore my blog where I write about them.
            <div>
              <Link href="/blog/tags/Projects" className="text-primary hover:underline">
                Explore Blog
              </Link>
            </div>
          </>
        }
      >
        <ul
          role="list"
          className="mt-12 grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {MyProjects.map((project) => (
            <motion.li
              key={project.title}
              initial={ANIMATION_FROM_PROPS}
              whileInView={ANIMATION_TO_PROPS}
              viewport={{ once: true }}
            >
              <ProjectCard project={project} />
            </motion.li>
          ))}
        </ul>
      </PageLayout>
    </>
  );
}
