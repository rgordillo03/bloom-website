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
        Your <em>hybrid</em><br/>mindfulness garden.
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

      {/* Hero visual: Fridge scene */}
      <div style={{
        marginTop: 72,
        width: 'min(680px, 100%)',
        position: 'relative',
        animation: 'fadeUp 1.2s ease 0.75s both',
      }}>
        <FridgeScene />
      </div>
    </section>
  );
}

function FridgeScene() {
  return (
    <div style={{
      width: '100%',
      aspectRatio: '16/10',
      background: 'linear-gradient(135deg, #EDE4D3 0%, #E0D3BD 50%, #D4C4A8 100%)',
      borderRadius: 24,
      position: 'relative',
      overflow: 'hidden',
      boxShadow: '0 40px 80px -20px rgba(46,36,28,0.28), 0 20px 40px -10px rgba(46,36,28,0.15), inset 0 1px 0 rgba(255,255,255,0.5)',
    }}>
      {/* Fridge inner border */}
      <div style={{
        position: 'absolute', top: 30, left: 30, right: 30, bottom: 30,
        border: '1.5px solid rgba(46,36,28,0.07)',
        borderRadius: 16,
        pointerEvents: 'none',
      }}/>

      {/* Fridge handle */}
      <div style={{
        position: 'absolute', top: '50%', right: 40,
        transform: 'translateY(-50%)',
        width: 5, height: 60,
        background: 'rgba(46,36,28,0.15)',
        borderRadius: 5,
      }}/>

      {/* Decorative leaves */}
      <svg style={{
        position: 'absolute', top: 50, left: 50, opacity: 0.5,
        animation: 'leafSway 6s ease-in-out infinite',
      }} width="60" height="60" viewBox="0 0 60 60" fill="none">
        <path d="M30 10C30 10 15 25 20 45C20 45 40 35 30 10Z" fill="#8B9E7E"/>
        <path d="M30 10V45" stroke="#6B7E5E" strokeWidth="1" opacity="0.5"/>
      </svg>
      <svg style={{
        position: 'absolute', bottom: 80, right: 120, opacity: 0.4,
        animation: 'leafSway 6s ease-in-out infinite 2s',
      }} width="50" height="50" viewBox="0 0 60 60" fill="none">
        <path d="M30 10C30 10 45 25 40 45C40 45 20 35 30 10Z" fill="#B5C7A9"/>
      </svg>

      {/* Photo magnet */}
      <div style={{
        position: 'absolute',
        top: 60, right: 100,
        width: 80, height: 100,
        background: 'linear-gradient(145deg, #fff 0%, #F5EBD9 100%)',
        boxShadow: '0 8px 22px rgba(46,36,28,0.18)',
        transform: 'rotate(8deg)',
        borderRadius: 4,
        padding: 8,
      }}>
        <div style={{
          position: 'absolute', top: -6, left: '50%', transform: 'translateX(-50%)',
          width: 32, height: 8,
          background: 'rgba(201,169,110,0.55)',
          borderRadius: 2,
        }}/>
        <div style={{
          width: '100%', height: '100%',
          background: 'linear-gradient(135deg, var(--peach), var(--blush))',
          borderRadius: 2,
        }}/>
      </div>

      {/* THE BLOOM CARD — the star of the scene */}
      <div style={{
        position: 'absolute',
        top: '50%', left: '50%',
        transform: 'translate(-50%, -50%) rotate(-4deg)',
        width: 'min(280px, 38%)',
        aspectRatio: '1.6/1',
        background: 'linear-gradient(145deg, #FDF9F3 0%, #F5EBD9 100%)',
        borderRadius: 18,
        boxShadow: '0 24px 50px -10px rgba(46,36,28,0.35), 0 14px 24px -5px rgba(46,36,28,0.22), inset 0 1px 0 rgba(255,255,255,0.9)',
        padding: '22px 24px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        animation: 'floatGentle 4s ease-in-out infinite',
      }}>
        {/* NFC icon */}
        <svg style={{ position: 'absolute', top: 18, right: 18, opacity: 0.4 }}
          width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M3 12c0-5 4-9 9-9m-9 9c0 5 4 9 9 9M7 12c0-3 2-5 5-5m-5 5c0 3 2 5 5 5m-1-5a1 1 0 112 0 1 1 0 01-2 0z"/>
        </svg>

        {/* Logo + name */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <svg width="20" height="20" viewBox="0 0 48 48" fill="none">
            <path d="M24 8C24 8 18 16 18 24C18 30 20.7 34 24 36C27.3 34 30 30 30 24C30 16 24 8 24 8Z" fill="#8B9E7E"/>
            <circle cx="24" cy="20" r="3" fill="#C17F59"/>
          </svg>
          <span style={{
            fontFamily: 'Fraunces, serif',
            fontSize: 22,
            fontWeight: 500,
            color: 'var(--ink)',
            letterSpacing: '-0.02em',
          }}>bloom</span>
        </div>

        {/* Tagline */}
        <div style={{
          fontFamily: 'Fraunces, serif',
          fontStyle: 'italic',
          fontSize: 12,
          color: 'var(--brown-m)',
          lineHeight: 1.4,
        }}>
          tap. reflect.<br/>grow.
        </div>
      </div>

      {/* Glow under card */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 'min(360px, 50%)', height: 'min(220px, 36%)',
        background: 'radial-gradient(ellipse, rgba(255,233,196,0.6), transparent 70%)',
        pointerEvents: 'none',
      }}/>
    </div>
  );
}
