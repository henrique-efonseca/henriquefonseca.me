import clsx from 'clsx';
import { motion } from 'framer-motion';
import React from 'react';
import Image from 'next/image';

import { formatDate } from '../../lib/date';
import { Post } from '../../lib/postsApi';
import { Card } from '../Card';
import { ANIMATION_FROM_PROPS, ANIMATION_TO_PROPS } from '../../lib/animation';

const StaticBadge = ({ className, children }: React.PropsWithChildren<{ className?: string }>) => (
  <span
    className={clsx(
      className,
      'inline-flex items-center rounded-md bg-primary px-2 py-0 text-xs font-medium text-white',
    )}
  >
    {children}
  </span>
);

interface Props {
  post: Post;
  dense?: boolean;
}

export const PostPreview = ({ post, dense }: Props) => {
  console.log(post);
  return (
    <motion.div
      initial={ANIMATION_FROM_PROPS}
      whileInView={ANIMATION_TO_PROPS}
      viewport={{ once: true }}
    >
      <article className="md:grid md:grid-cols-4 md:items-baseline">
        <Card className="md:col-span-3">
          {post.coverImage && (
            <div className="relative z-10 flex h-48 w-full items-center justify-center overflow-hidden rounded-t-lg mb-4">
              <Image
                src={post.coverImage}
                alt={`Cover image for ${post.title}`}
                layout="fill"
                objectFit="cover"
                className="h-full w-full object-cover"
              />
            </div>
          )}
          <Card.Title href={`/blog/${post.slug}`}>{post.title}</Card.Title>
          <Card.Eyebrow
            as="time"
            dateTime={post.publishedAt}
            className={clsx(!dense && 'md:hidden')}
            decorate
          >
            {formatDate(post.publishedAt)}
            {post.inProgress && <StaticBadge className="ml-4">Work in progress</StaticBadge>}
          </Card.Eyebrow>
          <Card.Description>{post.description}</Card.Description>
          <Card.Cta>Read post</Card.Cta>
        </Card>
        {!dense && (
          <Card.Eyebrow as="time" dateTime={post.publishedAt} className="mt-1 hidden md:block">
            {formatDate(post.publishedAt)}
            {post.inProgress && <StaticBadge className="mt-2">Work in progress</StaticBadge>}
          </Card.Eyebrow>
        )}
      </article>
    </motion.div>
  );
};
