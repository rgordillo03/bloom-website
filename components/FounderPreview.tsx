import Link from 'next/link';

export default function FounderPreview() {
  return (
    <section style={{
      padding: '120px 24px',
      background: 'var(--cream)',
    }}>
      <div style={{
        maxWidth: 1100,
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: 80,
        alignItems: 'center',
      }}>
        {/* Left: Story */}
        <div>
          <p className="section-label">A note from the founder</p>
          <h2 style={{ marginBottom: 24, lineHeight: 1.1 }}>
            I built this for <em>myself,</em> first.
          </h2>
          <p style={{
            fontFamily: 'Fraunces, serif',
            fontStyle: 'italic',
            fontSize: 21,
            lineHeight: 1.55,
            color: 'var(--brown)',
            marginBottom: 24,
          }}>
            I tried a lot of mindfulness apps. Most of them I ignored.
            The others overwhelmed me.
          </p>
          <p style={{ fontSize: 16, color: 'var(--brown-m)', lineHeight: 1.7, marginBottom: 28 }}>
            I struggle with building habits. I wanted a small, calm space to reflect — without
            notifications, streaks, or another screen begging for attention.
            So I started making one. Bloom is what came out of that.
          </p>
          <Link href="/about" className="btn btn-secondary" style={{ padding: '12px 22px', fontSize: 13 }}>
            More about the project
            <svg className="btn-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>

        {/* Right: Botanical illustration */}
        <div style={{
          aspectRatio: '4/5',
          borderRadius: 24,
          background: 'linear-gradient(135deg, #E8D4C4 0%, #D4B5A0 50%, #B5957D 100%)',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0 30px 60px -15px rgba(46,36,28,0.25)',
        }}>
          <svg viewBox="0 0 400 500" fill="none" preserveAspectRatio="xMidYMid slice"
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
            <defs>
              <radialGradient id="lightGrad" cx="0.3" cy="0.2" r="0.6">
                <stop offset="0" stopColor="#FDF9F3" stopOpacity="0.5"/>
                <stop offset="1" stopColor="#FDF9F3" stopOpacity="0"/>
              </radialGradient>
            </defs>
            <rect width="400" height="500" fill="url(#lightGrad)"/>
            <g opacity="0.9">
              <path d="M60 300 Q40 240 80 200 Q120 220 100 280 Z" fill="#8B9E7E" opacity="0.8"/>
              <path d="M80 250 Q100 220 130 235 Q110 265 90 260 Z" fill="#B5C7A9" opacity="0.7"/>
              <path d="M200 400 L200 200" stroke="#6B7E5E" strokeWidth="3" opacity="0.8"/>
              <g transform="translate(200 170)">
                <ellipse cx="-25" cy="-10" rx="22" ry="14" fill="#C17F59" opacity="0.85" transform="rotate(-30)"/>
                <ellipse cx="25" cy="-10" rx="22" ry="14" fill="#D4A574" opacity="0.85" transform="rotate(30)"/>
                <ellipse cx="-25" cy="10" rx="22" ry="14" fill="#E8C4B8" opacity="0.85" transform="rotate(-150)"/>
                <ellipse cx="25" cy="10" rx="22" ry="14" fill="#C17F59" opacity="0.85" transform="rotate(150)"/>
                <ellipse cx="0" cy="-22" rx="22" ry="14" fill="#D4A574" opacity="0.85" transform="rotate(90)"/>
                <ellipse cx="0" cy="22" rx="22" ry="14" fill="#E8C4B8" opacity="0.85" transform="rotate(-90)"/>
                <circle r="12" fill="#C9A96E"/>
                <circle r="6" fill="#A66B45"/>
              </g>
              <g transform="translate(140 340)">
                <ellipse cx="-8" cy="0" rx="7" ry="4" fill="#E8C4B8"/>
                <ellipse cx="8" cy="0" rx="7" ry="4" fill="#E8C4B8"/>
                <ellipse cx="0" cy="-7" rx="7" ry="4" fill="#E8C4B8"/>
                <ellipse cx="0" cy="7" rx="7" ry="4" fill="#E8C4B8"/>
                <circle r="4" fill="#C9A96E"/>
              </g>
              <line x1="140" y1="345" x2="140" y2="420" stroke="#6B7E5E" strokeWidth="1.5" opacity="0.6"/>
              <g transform="translate(280 360)">
                <ellipse cx="-7" cy="0" rx="6" ry="3.5" fill="#C17F59"/>
                <ellipse cx="7" cy="0" rx="6" ry="3.5" fill="#C17F59"/>
                <ellipse cx="0" cy="-6" rx="6" ry="3.5" fill="#C17F59"/>
                <ellipse cx="0" cy="6" rx="6" ry="3.5" fill="#C17F59"/>
                <circle r="3.5" fill="#C9A96E"/>
              </g>
              <line x1="280" y1="363" x2="280" y2="430" stroke="#6B7E5E" strokeWidth="1.5" opacity="0.6"/>
              <path d="M340 280 Q360 220 320 180 Q280 200 300 260 Z" fill="#8B9E7E" opacity="0.75"/>
              <path d="M0 440 Q200 430 400 440" stroke="#6B7E5E" strokeWidth="1.5" opacity="0.4"/>
            </g>
          </svg>

          {/* Polaroid signature */}
          <div style={{
            position: 'absolute',
            bottom: 24, right: 24,
            background: '#FDF9F3',
            padding: '14px 18px 16px',
            borderRadius: 4,
            boxShadow: '0 12px 24px rgba(46,36,28,0.15)',
            transform: 'rotate(-3deg)',
          }}>
            <p style={{ fontFamily: 'Fraunces, serif', fontStyle: 'italic', fontSize: 14, color: 'var(--ink)', marginBottom: 2 }}>
              — Rafael
            </p>
            <p style={{ fontSize: 9, color: 'var(--brown-l)', letterSpacing: '0.05em' }}>
              Founder · Cologne
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
