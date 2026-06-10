'use client';
import { useState, useEffect } from 'react';
import { joinWaitlist, getWaitlistCount } from '@/lib/supabase';

export default function Pricing() {
  const [busy, setBusy] = useState<string | null>(null);
  const [done, setDone] = useState<string | null>(null);
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [count, setCount] = useState<number | null>(null);

  // Load the waitlist count on mount (and after a successful signup)
  useEffect(() => {
    getWaitlistCount().then(setCount);
  }, [done]);

  const handleWaitlist = async (productId: string) => {
    if (!email.trim() || !email.includes('@')) {
      setError('Please enter a valid email.');
      return;
    }
    setBusy(productId);
    setError('');

    const result = await joinWaitlist(email);

    if (result.success) {
      setDone(productId);
    } else {
      setError(result.error || 'Something went wrong. Please try again.');
    }
    setBusy(null);
  };

  return (
    <article style={{ paddingTop: 120, paddingBottom: 100 }}>
      {/* Hero */}
      <section style={{ padding: '60px 24px', textAlign: 'center', position: 'relative' }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(193,127,89,0.18), transparent 60%)',
          pointerEvents: 'none',
        }}/>
        <div style={{ maxWidth: 720, margin: '0 auto', position: 'relative' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '10px 18px',
            background: 'var(--ink)', color: 'var(--bg)',
            borderRadius: 100, fontSize: 12, fontWeight: 500,
            letterSpacing: '0.05em', marginBottom: 28,
          }}>
            <span style={{ color: 'var(--gold)' }}>&#10022;</span>
            Founding 100 &middot; 50% off forever
          </div>
          <h1 style={{ marginBottom: 24, fontSize: 'clamp(40px, 7vw, 64px)' }}>
            Two ways to <em>bloom.</em>
          </h1>
          <p style={{ fontSize: 17, color: 'var(--brown-m)', lineHeight: 1.6, maxWidth: 540, margin: '0 auto' }}>
            Bloom isn&apos;t out yet. Leave your email below and I&apos;ll let you know
            the moment your option is ready &mdash; founding price guaranteed.
          </p>

          {/* Smart counter — only shows when 50+ people are waiting */}
          {count !== null && count >= 50 && (
            <div style={{
              marginTop: 32,
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              padding: '10px 18px',
              background: 'rgba(255,255,255,0.7)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(139,158,126,0.25)',
              borderRadius: 100,
              fontSize: 13,
              color: 'var(--brown-m)',
              animation: 'fadeUp 0.8s ease 0.5s both',
            }}>
              <span style={{
                width: 8, height: 8, borderRadius: '50%',
                background: 'var(--sage)',
                animation: 'pulse 2s ease-in-out infinite',
              }}/>
              <span>
                <strong style={{ color: 'var(--ink)' }}>{count.toLocaleString()}</strong>
                {' '}people are already waiting
              </span>
            </div>
          )}
        </div>
      </section>

      {/* Products */}
      <section style={{ padding: '40px 24px' }}>
        <div style={{
          maxWidth: 960, margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 28,
        }}>

          {/* DIGITAL ONLY */}
          <ProductCard
            id="digital"
            name="Bloom Digital"
            tag="Garden app, no card"
            description="The full Bloom app on its own. A small daily ritual, a visual garden, no shipping required."
            price="$4.99"
            original="$9.99"
            saving="-50%"
            features={[
              'Full Bloom garden app (lifetime access)',
              'Solo, Couple, or Group modes',
              'One daily question, your own garden',
              'Not App. No Ads. No notifications.',
              'Available instantly when we open',
            ]}
            ribbon={null}
            email={email}
            setEmail={setEmail}
            onClick={() => handleWaitlist('digital')}
            busy={busy === 'digital'}
            done={done === 'digital'}
            primary={false}
          />

          {/* BAMBOO CARD + APP */}
          <ProductCard
            id="card"
            name="Bloom Card"
            tag="Bamboo NFC + lifetime app"
            description="The hybrid version. A bamboo card that opens your garden with one tap. Choose Solo or Couple."
            price="$14.99 / $24.99"
            original="$29.99 / $49.99"
            saving="-50%"
            tiers={['Solo: $14.99', 'Couple: $24.99']}
            features={[
              'Bamboo NFC card (or pair of cards)',
              'Everything in Bloom Digital',
              'Made &amp; shipped from Germany, low CO\u2082',
              'Biodegradable, plastic-free packaging',
              'Founding-edition serial number',
            ]}
            ribbon="Most loved"
            email={email}
            setEmail={setEmail}
            onClick={() => handleWaitlist('card')}
            busy={busy === 'card'}
            done={done === 'card'}
            primary={true}
          />
        </div>

        {error && (
          <p style={{
            maxWidth: 540, margin: '24px auto 0',
            padding: '14px 18px',
            background: 'rgba(199,80,80,0.08)',
            color: 'var(--error)',
            borderRadius: 12,
            fontSize: 14,
            textAlign: 'center',
          }}>{error}</p>
        )}

        {/* Honest note */}
        <div style={{
          maxWidth: 720, margin: '32px auto 0',
          padding: '24px 28px',
          background: 'var(--cream)',
          border: '1px solid rgba(193,127,89,0.12)',
          borderRadius: 16,
          textAlign: 'center',
          fontSize: 14, color: 'var(--brown-m)', lineHeight: 1.65,
        }}>
          <p style={{ fontFamily: 'Fraunces, serif', fontStyle: 'italic', fontSize: 16, color: 'var(--ink)', marginBottom: 8 }}>
            A note on timing.
          </p>
          I&apos;m still building Bloom. I don&apos;t want to take your money before I&apos;ve earned
          it &mdash; so we&apos;re running a waitlist instead. Founding 100 members will get
          50% off the day we open, with no surprises.
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '100px 24px' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <p className="section-label" style={{ textAlign: 'center', display: 'block' }}>Questions</p>
          <h2 style={{ textAlign: 'center', marginBottom: 48 }}>
            Honest <em>answers.</em>
          </h2>

          {[
            {
              q: 'When is Bloom actually launching?',
              a: 'I\'m aiming for the next few months, but I\'d rather launch when it\'s right than rush it. Founding 100 members get notified first the moment it opens.'
            },
            {
              q: 'What\'s the difference between Digital and Card?',
              a: 'Same app, same gardens. The card just gives you a physical, tactile way to open it &mdash; tap your phone on the bamboo card on your fridge and the garden opens instantly. No login, no friction. If you don\'t want a physical object, Digital is plenty.'
            },
            {
              q: 'Do I need a special phone for the card?',
              a: 'Any iPhone 7 or newer, or any Android made in the last 8 years. If you can use Apple Pay or Google Pay, the card will work.'
            },
            {
              q: 'Is there a subscription?',
              a: 'No subscription. One payment, lifetime access. Future optional premium features may exist later, but everything you see at launch is yours to keep.'
            },
            {
              q: 'How sustainable are the cards really?',
              a: 'Bamboo is fast-growing and biodegradable. We manufacture and ship from within Germany, so the CO\u2082 footprint per card is minimal. Packaging is paper, no plastic.'
            },
            {
              q: 'What about my privacy?',
              a: 'GDPR-compliant. EU servers. No ads, no data selling, ever. Your garden belongs to you. Export or delete anytime.'
            },
          ].map((item, i) => (
            <details key={i} style={{
              padding: '24px 0',
              borderBottom: '1px solid rgba(193,127,89,0.15)',
            }}>
              <summary style={{
                cursor: 'pointer',
                listStyle: 'none',
                fontFamily: 'Fraunces, serif',
                fontSize: 20,
                color: 'var(--ink)',
                fontWeight: 500,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: 20,
              }}>
                {item.q}
                <span style={{
                  fontSize: 26,
                  color: 'var(--terra)',
                  fontWeight: 300,
                  lineHeight: 1,
                }}>+</span>
              </summary>
              <p style={{
                marginTop: 16,
                fontSize: 15,
                color: 'var(--brown-m)',
                lineHeight: 1.7,
              }}>{item.a}</p>
            </details>
          ))}
        </div>
      </section>
    </article>
  );
}

function ProductCard({ id, name, tag, description, price, original, saving, tiers, features, ribbon, email, setEmail, onClick, busy, done, primary }: any) {
  return (
    <div style={{
      background: primary
        ? 'linear-gradient(135deg, #FDF9F3 0%, #F5E8D4 100%)'
        : 'var(--bg-card)',
      borderRadius: 28,
      padding: '44px 36px',
      position: 'relative',
      border: primary
        ? '1.5px solid var(--terra)'
        : '1px solid rgba(193,127,89,0.1)',
      boxShadow: primary
        ? '0 20px 50px -10px rgba(193,127,89,0.15)'
        : 'none',
      transition: 'all 0.3s',
    }}>
      {ribbon && (
        <div style={{
          position: 'absolute', top: 20, right: 20,
          padding: '6px 12px',
          background: 'var(--ink)', color: 'var(--bg)',
          fontSize: 10, fontWeight: 500,
          letterSpacing: '0.08em', textTransform: 'uppercase',
          borderRadius: 100,
        }}>{ribbon}</div>
      )}

      {/* Visual */}
      <div style={{
        width: '100%',
        aspectRatio: '16/10',
        background: 'linear-gradient(135deg, #EDE4D3 0%, #D4C4A8 100%)',
        borderRadius: 16,
        marginBottom: 28,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          width: '60%', aspectRatio: '1.6/1',
          background: 'linear-gradient(145deg, #FDF9F3, #F5EBD9)',
          borderRadius: 10,
          boxShadow: '0 12px 24px rgba(46,36,28,0.2)',
          padding: 14,
          display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
          transform: 'rotate(-3deg)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <svg width="14" height="14" viewBox="0 0 48 48" fill="none">
              <path d="M24 8C24 8 18 16 18 24C18 30 20.7 34 24 36C27.3 34 30 30 30 24C30 16 24 8 24 8Z" fill="#8B9E7E"/>
              <circle cx="24" cy="20" r="3" fill="#C17F59"/>
            </svg>
            <span style={{ fontFamily: 'Fraunces, serif', fontSize: 13, fontWeight: 500, color: 'var(--ink)' }}>
              bloom
            </span>
          </div>
          <span style={{ fontFamily: 'Fraunces, serif', fontStyle: 'italic', fontSize: 9, color: 'var(--brown-m)', lineHeight: 1.3 }}>
            tap. reflect. grow.
          </span>
        </div>
      </div>

      <h3 style={{ fontFamily: 'Fraunces, serif', fontSize: 28, fontWeight: 500, color: 'var(--ink)', marginBottom: 6 }}>
        {name}
      </h3>
      <p style={{ fontSize: 12, color: 'var(--terra)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 16, fontWeight: 500 }}>
        {tag}
      </p>
      <p style={{ fontSize: 14, color: 'var(--brown-m)', lineHeight: 1.55, marginBottom: 24 }}>
        {description}
      </p>

      {tiers ? (
  <div style={{ marginBottom: 24 }}>
    {tiers.map((t: string, i: number) => {
      const [label, price] = t.split(':').map(s => s.trim());
      const originalPrices = ['$29.99', '$49.99'];
      return (
        <div key={i} style={{
          marginBottom: i === 0 ? 20 : 0,
          paddingBottom: i === 0 ? 20 : 0,
          borderBottom: i === 0 ? '1px solid rgba(193,127,89,0.15)' : 'none',
        }}>
          <p style={{
            fontSize: 11,
            color: 'var(--terra)',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            fontWeight: 500,
            marginBottom: 8,
          }}>
            {label}
          </p>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, flexWrap: 'wrap' }}>
            <span style={{
              fontFamily: 'Fraunces, serif',
              fontSize: 44,
              fontWeight: 500,
              color: 'var(--ink)',
              letterSpacing: '-0.02em',
              lineHeight: 1,
            }}>
              {price}
            </span>
            <span style={{ fontSize: 18, color: 'var(--brown-l)', textDecoration: 'line-through' }}>
              {originalPrices[i]}
            </span>
            <span style={{
              padding: '4px 10px',
              background: 'var(--terra)',
              color: '#fff',
              fontSize: 11,
              fontWeight: 600,
              borderRadius: 4,
              letterSpacing: '0.04em',
            }}>
              -50%
            </span>
          </div>
        </div>
      );
    })}
  </div>
) : (
  <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 24 }}>
    <span style={{ fontFamily: 'Fraunces, serif', fontSize: 44, fontWeight: 500, color: 'var(--ink)', letterSpacing: '-0.02em', lineHeight: 1 }}>
      {price}
    </span>
    <span style={{ fontSize: 18, color: 'var(--brown-l)', textDecoration: 'line-through' }}>
      {original}
    </span>
    <span style={{
      padding: '4px 10px', background: 'var(--terra)',
      color: '#fff', fontSize: 11, fontWeight: 600,
      borderRadius: 4, letterSpacing: '0.04em',
    }}>
      {saving}
    </span>
  </div>
)}
      <ul style={{ listStyle: 'none', marginBottom: 28 }}>
        {features.map((f: any, i: number) => (
          <li key={i} style={{
            display: 'flex', alignItems: 'flex-start',
            gap: 10, padding: '8px 0',
            fontSize: 14, color: 'var(--brown-m)', lineHeight: 1.5,
          }}
            dangerouslySetInnerHTML={{
              __html: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8B9E7E" stroke-width="2.5" stroke-linecap="round" style="flex-shrink:0;margin-top:3px"><path d="M5 12l5 5L20 7"/></svg><span>${f}</span>`
            }}
          />
        ))}
      </ul>

      {/* Email + notify form */}
      {done ? (
        <div style={{
          padding: '16px 18px',
          background: 'rgba(139,158,126,0.12)',
          borderRadius: 14,
          textAlign: 'center',
          color: 'var(--sage-d)',
          fontSize: 14,
          lineHeight: 1.6,
        }}>
          <span style={{ fontFamily: 'Fraunces, serif', fontStyle: 'italic', fontSize: 18, display: 'block', marginBottom: 4 }}>
            You&apos;re on the list. &#127807;
          </span>
          I&apos;ll write to you the moment it&apos;s ready.
        </div>
      ) : (
        <div>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="you@email.com"
            style={{
              width: '100%',
              padding: '14px 16px',
              fontSize: 14,
              border: '1.5px solid rgba(193,127,89,0.25)',
              borderRadius: 12,
              background: 'rgba(255,255,255,0.7)',
              color: 'var(--brown)',
              marginBottom: 10,
              outline: 'none',
              fontFamily: 'Inter, sans-serif',
            }}
            disabled={busy}
          />
          <button onClick={onClick} disabled={busy} className={primary ? 'btn btn-primary' : 'btn btn-secondary'} style={{
            width: '100%',
            padding: '14px',
            borderRadius: 12,
            justifyContent: 'center',
            opacity: busy ? 0.6 : 1,
          }}>
            {busy ? 'Adding you...' : `Notify me when ${name === 'Bloom Digital' ? 'available' : 'shipping'}`}
          </button>
        </div>
      )}
    </div>
  );
}
