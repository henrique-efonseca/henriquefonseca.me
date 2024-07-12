import { NextApiHandler } from 'next';
import RSS from 'rss';

import { postsApi } from '../../lib/postsApi';

const rss: NextApiHandler = async (req, res) => {
  const feed = new RSS({
    title: 'Henrique Fonseca',
    site_url: 'https://henriquefonseca.me',
    feed_url: 'https://henriquefonseca/rss.xml',
  });

  const allPosts = await postsApi.getPosts();
  allPosts.map((post) => {
    feed.item({
      title: post.title,
      url: `https://henriquefonseca/blog/${post.slug}`,
      date: post.publishedAt,
      description: post.description,
    });
  });

  res.setHeader('Content-Type', 'text/xml');
  res.setHeader('Cache-Control', 'public, s-maxage=1200, stale-while-revalidate=600');
  res.write(feed.xml({ indent: true }));
  res.end();
};

export default rss;
