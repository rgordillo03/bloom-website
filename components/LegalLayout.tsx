import { ReactNode } from 'react';
import Link from 'next/link';

export default function LegalLayout({
  title,
  subtitle,
  lastUpdated,
  children,
}: {
  title: string;
  subtitle?: string;
  lastUpdated?: string;
  children: ReactNode;
}) {
  return (
    <article style={{ paddingTop: 120, paddingBottom: 100 }}>
      <section style={{ padding: '40px 24px 24px' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <Link href="/" style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            fontSize: 13, color: 'var(--brown-m)', marginBottom: 32,
          }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Back home
          </Link>

          <h1 style={{ marginBottom: 16, fontSize: 'clamp(40px, 7vw, 64px)', lineHeight: 1.1 }}>
            {title}
          </h1>

          {subtitle && (
            <p style={{
              fontFamily: 'Fraunces, serif', fontStyle: 'italic',
              fontSize: 20, color: 'var(--brown-m)', lineHeight: 1.55, marginBottom: 24,
            }}>{subtitle}</p>
          )}

          {lastUpdated && (
            <p style={{
              fontSize: 12, color: 'var(--brown-l)',
              textTransform: 'uppercase', letterSpacing: '0.1em',
            }}>Last updated: {lastUpdated}</p>
          )}
        </div>
      </section>

      <section style={{ padding: '32px 24px 60px' }}>
        <div className="legal-content" style={{ maxWidth: 720, margin: '0 auto' }}>
          {children}
        </div>
      </section>

      <style>{`
        .legal-content {
          font-family: 'Inter', sans-serif;
          font-size: 15px;
          line-height: 1.75;
          color: var(--brown);
        }
        .legal-content h2 {
          font-family: 'Fraunces', serif;
          font-size: 26px;
          margin: 48px 0 16px;
          color: var(--ink);
          font-weight: 500;
        }
        .legal-content h3 {
          font-family: 'Fraunces', serif;
          font-size: 19px;
          margin: 32px 0 12px;
          color: var(--terra-d);
          font-weight: 500;
        }
        .legal-content h4 {
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          margin: 24px 0 8px;
          color: var(--sage-d);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          font-weight: 600;
        }
        .legal-content p { margin-bottom: 16px; color: var(--brown-m); }
        .legal-content strong { color: var(--ink); font-weight: 600; }
        .legal-content em { font-style: italic; color: var(--terra); font-weight: 500; }
        .legal-content ul, .legal-content ol {
          margin: 12px 0 20px 24px;
        }
        .legal-content li {
          margin-bottom: 8px;
          color: var(--brown-m);
        }
        .legal-content a {
          color: var(--terra-d);
          text-decoration: underline;
          text-underline-offset: 3px;
        }
        .legal-content blockquote {
          border-left: 3px solid var(--terra);
          padding: 8px 0 8px 20px;
          margin: 24px 0;
          background: var(--cream);
          border-radius: 0 8px 8px 0;
          padding: 16px 20px;
        }
        .legal-content hr {
          border: none;
          height: 1px;
          background: rgba(193,127,89,0.15);
          margin: 48px 0;
        }
        .legal-content .lang-toggle {
          display: inline-flex;
          gap: 8px;
          padding: 6px;
          background: var(--cream);
          border-radius: 100px;
          margin-bottom: 32px;
        }
        .legal-content .lang-toggle a {
          padding: 6px 14px;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.05em;
          border-radius: 100px;
          color: var(--brown-m);
          text-decoration: none;
        }
        .legal-content .lang-toggle a.active {
          background: var(--ink);
          color: var(--bg);
        }
      `}</style>
    </article>
  );
}
