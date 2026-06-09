import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const journalDir = path.join(process.cwd(), 'content/journal');

export type JournalPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  emoji?: string;
  contentHtml?: string;
};

export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(journalDir)) return [];
  return fs.readdirSync(journalDir)
    .filter(f => f.endsWith('.md'))
    .map(f => f.replace(/\.md$/, ''));
}

export function getAllPosts(): JournalPost[] {
  const slugs = getAllPostSlugs();
  const posts = slugs.map((slug) => {
    const fullPath = path.join(journalDir, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    return {
      slug,
      title: data.title || slug,
      date: data.date || '',
      excerpt: data.excerpt || content.slice(0, 200) + '...',
      emoji: data.emoji || '🌿',
    } as JournalPost;
  });

  return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export async function getPostBySlug(slug: string): Promise<JournalPost | null> {
  const fullPath = path.join(journalDir, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const processed = await remark().use(html).process(content);
  const contentHtml = processed.toString();

  return {
    slug,
    title: data.title || slug,
    date: data.date || '',
    excerpt: data.excerpt || '',
    emoji: data.emoji || '🌿',
    contentHtml,
  };
}
