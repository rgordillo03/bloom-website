import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllPostSlugs, getPostBySlug } from '@/lib/journal';

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);
  if (!post) return { title: 'Not found — Bloom' };
  return {
    title: `${post.title} — Bloom Journal`,
    description: post.excerpt,
  };
}

export default async function JournalPost({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <article style={{ paddingTop: 120, paddingBottom: 100 }}>
      <section style={{ padding: '40px 24px' }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>

          <Link href="/journal" style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            fontSize: 13, color: 'var(--brown-m)', marginBottom: 32,
          }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Back to journal
          </Link>

          <div style={{ marginBottom: 40 }}>
            <div style={{ fontSize: 40, marginBottom: 16 }}>{post.emoji}</div>
            <p style={{
              fontSize: 11, color: 'var(--terra)',
              textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12,
            }}>
              {post.date && new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric', month: 'long', day: 'numeric',
              })}
            </p>
            <h1 style={{ marginBottom: 16, fontSize: 'clamp(36px, 6vw, 56px)', lineHeight: 1.1 }}>
              {post.title}
            </h1>
          </div>

          <div className="journal-content" dangerouslySetInnerHTML={{ __html: post.contentHtml || '' }} />

          <div style={{
            marginTop: 80, paddingTop: 32,
            borderTop: '1px solid rgba(193,127,89,0.15)',
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            flexWrap: 'wrap', gap: 16,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{
                width: 40, height: 40, borderRadius: '50%',
                background: 'linear-gradient(135deg, var(--peach), var(--blush))',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'Fraunces, serif', fontSize: 18, color: 'var(--terra-d)', fontWeight: 600,
              }}>R</div>
              <div>
                <p style={{ fontFamily: 'Fraunces, serif', fontStyle: 'italic', fontSize: 14, color: 'var(--ink)' }}>
                  — Rafael
                </p>
                <p style={{ fontSize: 11, color: 'var(--brown-l)' }}>Founder · Cologne</p>
              </div>
            </div>
            <Link href="/pricing" className="btn btn-secondary" style={{ padding: '10px 18px', fontSize: 13 }}>
              See the founding offer →
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        .journal-content {
          font-family: 'Inter', sans-serif;
          font-size: 17px;
          line-height: 1.8;
          color: var(--brown);
        }
        .journal-content p { margin-bottom: 24px; color: var(--brown); }
        .journal-content h2 {
          font-family: 'Fraunces', serif;
          font-size: 28px;
          margin: 48px 0 16px;
          color: var(--ink);
        }
        .journal-content h3 {
          font-family: 'Fraunces', serif;
          font-size: 22px;
          margin: 36px 0 12px;
          color: var(--ink);
        }
        .journal-content blockquote {
          border-left: 3px solid var(--terra);
          padding: 4px 0 4px 24px;
          margin: 32px 0;
          font-family: 'Fraunces', serif;
          font-style: italic;
          font-size: 20px;
          color: var(--brown);
        }
        .journal-content em {
          font-style: italic;
          color: var(--terra);
          font-weight: 500;
        }
        .journal-content strong { color: var(--ink); font-weight: 600; }
        .journal-content ul, .journal-content ol {
          margin: 16px 0 24px 24px;
        }
        .journal-content li {
          margin-bottom: 8px;
          color: var(--brown-m);
        }
        .journal-content a {
          color: var(--terra-d);
          text-decoration: underline;
          text-underline-offset: 3px;
        }
        .journal-content code {
          background: var(--cream);
          padding: 2px 6px;
          border-radius: 4px;
          font-size: 0.9em;
        }
        .journal-content img {
          width: 100%;
          border-radius: 12px;
          margin: 24px 0;
        }
        .journal-content hr {
          border: none;
          height: 1px;
          background: rgba(193,127,89,0.15);
          margin: 40px 0;
        }
      `}</style>
    </article>
  );
}
