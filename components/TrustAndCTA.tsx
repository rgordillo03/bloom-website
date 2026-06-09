'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { getWaitlistCount } from '@/lib/supabase';

export default function TrustAndCTA() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    getWaitlistCount().then(setCount);
  }, []);

  return (
    <>
      {/* Trust signals */}
      <section style={{
        padding: '80px 24px',
        background: 'var(--bg)',
      }}>
        <div style={{
          maxWidth: 1100, margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: 40,
        }}>
          {[
            { icon: '🇩🇪', title: 'Made in Germany', desc: 'Designed, packed, and shipped locally with minimal CO₂.' },
            { icon: '🌱', title: 'Bamboo, not plastic', desc: 'Cards are biodegradable and built to last on your fridge.' },
            { icon: '🔒', title: 'Private by design', desc: 'GDPR. EU servers. No ads. Your reflections stay yours.' },
            { icon: '📱', title: 'No app to install', desc: 'NFC opens it. Works with any phone made in the last 8 years.' },
          ].map((item, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 32, marginBottom: 12 }}>{item.icon}</div>
              <h4 style={{
                fontFamily: 'Fraunces, serif',
                fontSize: 16,
                fontWeight: 500,
                color: 'var(--ink)',
                marginBottom: 6,
              }}>{item.title}</h4>
              <p style={{ fontSize: 13, color: 'var(--brown-m)', lineHeight: 1.5 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Final dark CTA */}
      <section style={{
        background: 'var(--ink)',
        color: 'var(--bg)',
        borderRadius: 40,
        margin: '0 20px 20px',
        padding: '100px 32px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: `
            radial-gradient(ellipse 50% 50% at 50% 0%, rgba(193,127,89,0.22), transparent 60%),
            radial-gradient(ellipse 40% 40% at 80% 80%, rgba(139,158,126,0.15), transparent 60%)
          `,
          pointerEvents: 'none',
        }}/>
        <div style={{ position: 'relative', maxWidth: 680, margin: '0 auto' }}>
          <h2 style={{ color: 'var(--bg)', marginBottom: 20 }}>
            Be there <em style={{ color: 'var(--terra-l)' }}>when it opens.</em>
          </h2>
          <p style={{
            fontSize: 17, color: 'rgba(250,247,242,0.65)',
            lineHeight: 1.6, marginBottom: 40,
          }}>
            Bloom isn't out yet. Founding 100 members get 50% off forever
            and the first cards we ship. Leave your email — I'll let you know when we're ready.
          </p>
          <Link href="/pricing" className="btn btn-primary" style={{
            background: 'var(--bg)', color: 'var(--ink)',
          }}>
            Notify me when ready
            <svg className="btn-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>

          {/* Subtle counter — only when 50+ signups */}
          {count !== null && count >= 50 && (
            <p style={{
              marginTop: 24,
              fontSize: 13,
              color: 'rgba(250,247,242,0.5)',
              fontStyle: 'italic',
            }}>
              {count.toLocaleString()} people are already on the list.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
