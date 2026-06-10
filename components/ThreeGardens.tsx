'use client';
export default function ThreeGardens() {
  const gardens = [
    {
      icon: '🌱',
      label: 'For yourself',
      title: 'A Personal safe space',
      quote: '"What part of yourself needs more care right now?"',
      desc: 'Reflect privately. No followers, no streaks to chase. Just you, a question, and a garden that remembers.',
      color: '#8B9E7E',
      bg: 'rgba(139,158,126,0.08)',
    },
    {
      icon: '🌸',
      label: 'For Couples',
      title: 'A Place to Grow Together',
      quote: '"How can you helped each other lately to keep growing?"',
      desc: 'Share reflections, Gratitude and Meaningful Moments for a Deeper connection.',
      color: '#C17F59',
      bg: 'rgba(193,127,89,0.08)',
    },
    {
      icon: '🌳',
      label: 'For Groups',
      title: 'A garden for your Close Circle',
      quote: 'What makes this group feel like home?',
      desc: 'Stay connected through shared memories and reflections.',
      color: '#C9A96E',
      bg: 'rgba(201,169,110,0.1)',
    },
  ];

  return (
    <section style={{
      padding: '120px 24px',
      background: 'var(--bg-deep)',
      borderRadius: '40px 40px 0 0',
      margin: '0 20px',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 72 }}>
          <p className="section-label">Three gardens</p>
          <h2 style={{ maxWidth: 720, margin: '0 auto 20px' }}>
            There's a garden<br/><em>for everyone.</em>
          </h2>
          <p style={{ fontSize: 17, color: 'var(--brown-m)', maxWidth: 560, margin: '0 auto', lineHeight: 1.6 }}>
            One simple ritual. Three ways to use it. Switch between gardens
            whenever you want.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 24,
        }}>
          {gardens.map((g, i) => (
            <div key={i} style={{
              background: 'var(--bg-card)',
              borderRadius: 24,
              padding: '40px 32px',
              position: 'relative',
              overflow: 'hidden',
              border: '1px solid rgba(193,127,89,0.08)',
              transition: 'all 0.4s cubic-bezier(0.22,1,0.36,1)',
              cursor: 'default',
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 24px 50px -15px rgba(46,36,28,0.15)';
                e.currentTarget.style.borderColor = g.color + '40';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = 'rgba(193,127,89,0.08)';
              }}
            >
              {/* Subtle background tint */}
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: 140,
                background: `radial-gradient(ellipse at 50% 0%, ${g.bg}, transparent 70%)`,
                pointerEvents: 'none',
              }}/>

              {/* Icon */}
              <div style={{
                width: 64, height: 64,
                borderRadius: 20,
                background: g.bg,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 32,
                marginBottom: 24,
                position: 'relative',
              }}>
                {g.icon}
              </div>

              {/* Label */}
              <p style={{
                fontSize: 11,
                textTransform: 'uppercase',
                letterSpacing: '0.18em',
                color: g.color,
                fontWeight: 600,
                marginBottom: 8,
              }}>{g.label}</p>

              {/* Title */}
              <h3 style={{
                fontFamily: 'Fraunces, serif',
                fontSize: 26,
                fontWeight: 500,
                color: 'var(--ink)',
                marginBottom: 16,
                lineHeight: 1.2,
              }}>{g.title}</h3>

              {/* Quote */}
              <div style={{
                padding: '14px 16px',
                background: g.bg,
                borderLeft: `2px solid ${g.color}`,
                borderRadius: '0 12px 12px 0',
                marginBottom: 20,
              }}>
                <p style={{
                  fontFamily: 'Fraunces, serif',
                  fontStyle: 'italic',
                  fontSize: 14,
                  color: 'var(--brown)',
                  lineHeight: 1.5,
                }}>{g.quote}</p>
              </div>

              {/* Description */}
              <p style={{
                fontSize: 14,
                color: 'var(--brown-m)',
                lineHeight: 1.65,
              }}>{g.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
