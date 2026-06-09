import Link from 'next/link';
import { getAllPosts } from '@/lib/journal';

export const metadata = {
  title: 'Journal — Bloom',
  description: 'Letters from the garden. Updates, reflections, and behind-the-scenes from Bloom.',
};

export default function JournalIndex() {
  const posts = getAllPosts();

  return (
    <article style={{ paddingTop: 120, paddingBottom: 100 }}>
      {/* Hero */}
      <section style={{ padding: '60px 24px', textAlign: 'center', position: 'relative' }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(181,199,169,0.2), transparent 60%)',
          pointerEvents: 'none',
        }}/>
        <div style={{ maxWidth: 720, margin: '0 auto', position: 'relative' }}>
          <p className="section-label">Journal</p>
          <h1 style={{ marginBottom: 24 }}>
            Notes <em>along the way.</em>
          </h1>
          <p style={{
            fontFamily: 'Fraunces, serif', fontStyle: 'italic',
            fontSize: 20, color: 'var(--brown-m)', lineHeight: 1.55,
          }}>
            Honest updates from someone still building.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section style={{ padding: '40px 24px' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          {posts.length === 0 ? (
            <div style={{
              textAlign: 'center',
              padding: '80px 24px',
              background: 'var(--cream)',
              borderRadius: 24,
            }}>
              <div style={{ fontSize: 48, marginBottom: 16, opacity: 0.6 }}>📔</div>
              <p style={{ fontFamily: 'Fraunces, serif', fontStyle: 'italic', fontSize: 20, color: 'var(--brown-m)' }}>
                The first letter is coming soon...
              </p>
            </div>
          ) : (
            posts.map((post) => (
              <Link key={post.slug} href={`/journal/${post.slug}`} style={{
                display: 'block',
                padding: '28px 0',
                borderBottom: '1px solid rgba(193,127,89,0.15)',
                textDecoration: 'none',
              }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 20 }}>
                  <div style={{
                    width: 48, height: 48,
                    borderRadius: 12,
                    background: 'var(--cream)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 22,
                    flexShrink: 0,
                  }}>{post.emoji}</div>
                  <div style={{ flex: 1 }}>
                    <p style={{
                      fontSize: 11,
                      color: 'var(--terra)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      marginBottom: 6,
                    }}>{formatDate(post.date)}</p>
                    <h3 style={{
                      fontFamily: 'Fraunces, serif',
                      fontSize: 22,
                      fontWeight: 500,
                      color: 'var(--ink)',
                      marginBottom: 8,
                      lineHeight: 1.3,
                    }}>{post.title}</h3>
                    <p style={{
                      fontSize: 15,
                      color: 'var(--brown-m)',
                      lineHeight: 1.6,
                    }}>{post.excerpt}</p>
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>
      </section>
    </article>
  );
}

function formatDate(date: string): string {
  if (!date) return '';
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
