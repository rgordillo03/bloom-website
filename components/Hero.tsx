'use client';
import Link from 'next/link';

export default function Hero() {
  return (
    <section style={{
      minHeight: '100vh',
      padding: '140px 24px 80px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background atmospheric gradients */}
      <div style={{
        position: 'absolute', inset: 0,
        background: `
          radial-gradient(ellipse 80% 50% at 30% 10%, rgba(181,199,169,0.28) 0%, transparent 55%),
          radial-gradient(ellipse 60% 40% at 80% 80%, rgba(232,196,184,0.3) 0%, transparent 60%),
          radial-gradient(ellipse 100% 60% at 50% 120%, rgba(201,169,110,0.18) 0%, transparent 60%)
        `,
        pointerEvents: 'none',
      }}/>

      {/* Badge */}
      <div style={{
        display: 'inline-flex', alignItems: 'center', gap: 10,
        padding: '8px 18px 8px 12px',
        background: 'rgba(255,255,255,0.65)',
        backdropFilter: 'blur(12px)',
        border: '1px solid rgba(193,127,89,0.2)',
        borderRadius: 100,
        fontSize: 12, fontWeight: 500,
        color: 'var(--terra-d)',
        letterSpacing: '0.05em',
        marginBottom: 36,
        animation: 'fadeUp 0.8s ease both',
      }}>
        <span style={{
          width: 8, height: 8, borderRadius: '50%',
          background: 'var(--terra)',
          animation: 'pulse 2s ease-in-out infinite',
        }}/>
        Coming soon · founding 100
      </div>

      {/* Hero headline */}
      <h1 style={{
        maxWidth: 1000,
        marginBottom: 32,
        animation: 'fadeUp 1s ease 0.15s both',
      }}>
        Your hybrid<br/><em>Mindfulness Garden.</em>
      </h1>

      <p style={{
        fontSize: 'clamp(17px, 2vw, 21px)',
        color: 'var(--brown-m)',
        maxWidth: 560,
        lineHeight: 1.55,
        marginBottom: 48,
        animation: 'fadeUp 1s ease 0.3s both',
      }}>
        A safe space to reflect. One tap a day.
      </p>

      <div style={{
        display: 'flex', gap: 14, flexWrap: 'wrap',
        justifyContent: 'center', marginBottom: 28,
        animation: 'fadeUp 1s ease 0.45s both',
      }}>
        <Link href="/pricing" className="btn btn-primary">
          Notify me when ready
          <svg className="btn-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </Link>
        <a href="#experience" className="btn btn-secondary">
          See how it works
        </a>
      </div>

      <p style={{
        fontSize: 12, color: 'var(--brown-l)', letterSpacing: '0.03em',
        animation: 'fadeUp 1s ease 0.6s both',
      }}>
        Made and shipped in Germany · Low-CO₂ local production · Works with any phone
      </p>
    </section>
  );
}
