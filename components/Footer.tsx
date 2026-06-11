import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{
      padding: '80px 32px 40px',
      background: 'var(--ink)',
      color: 'rgba(250,247,242,0.7)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 60% 40% at 20% 0%, rgba(193,127,89,0.12), transparent 60%), radial-gradient(ellipse 40% 30% at 90% 100%, rgba(139,158,126,0.1), transparent 60%)',
        pointerEvents: 'none',
      }} />

      <div style={{
        maxWidth: 1200, margin: '0 auto', position: 'relative',
        display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 48,
      }}>
        {/* Brand column */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
            <svg width="26" height="26" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g stroke="#D4A574" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none">
                <g transform="rotate(0 30 26)"><path d="M30 23 C27 21 25 17 27 14 C28 13 29 13 30 14 C31 13 32 13 33 14 C35 17 33 21 30 23 Z"/></g>
                <g transform="rotate(45 30 26)"><path d="M30 23 C27 21 25 17 27 14 C28 13 29 13 30 14 C31 13 32 13 33 14 C35 17 33 21 30 23 Z"/></g>
                <g transform="rotate(90 30 26)"><path d="M30 23 C27 21 25 17 27 14 C28 13 29 13 30 14 C31 13 32 13 33 14 C35 17 33 21 30 23 Z"/></g>
                <g transform="rotate(135 30 26)"><path d="M30 23 C27 21 25 17 27 14 C28 13 29 13 30 14 C31 13 32 13 33 14 C35 17 33 21 30 23 Z"/></g>
                <g transform="rotate(180 30 26)"><path d="M30 23 C27 21 25 17 27 14 C28 13 29 13 30 14 C31 13 32 13 33 14 C35 17 33 21 30 23 Z"/></g>
                <g transform="rotate(225 30 26)"><path d="M30 23 C27 21 25 17 27 14 C28 13 29 13 30 14 C31 13 32 13 33 14 C35 17 33 21 30 23 Z"/></g>
                <g transform="rotate(270 30 26)"><path d="M30 23 C27 21 25 17 27 14 C28 13 29 13 30 14 C31 13 32 13 33 14 C35 17 33 21 30 23 Z"/></g>
                <g transform="rotate(315 30 26)"><path d="M30 23 C27 21 25 17 27 14 C28 13 29 13 30 14 C31 13 32 13 33 14 C35 17 33 21 30 23 Z"/></g>
                <path d="M30 36 C29 44 30 52 30 56"/>
                <path d="M29 44 C24 43 19 41 17 38 C20 38 26 40 29 44 Z"/>
                <path d="M30 42 C35 41 40 39 42 36 C39 36 33 38 30 42 Z"/>
                <path d="M30 51 C26 51 22 50 20 48 C23 47 27 48 30 51 Z"/>
                <circle cx="30" cy="26" r="3" stroke="#D4A574" strokeWidth="1.6"/>
              </g>
              <g fill="#E8C19F">
                <circle cx="30" cy="24.8" r="0.7"/>
                <circle cx="28.8" cy="25.6" r="0.7"/>
                <circle cx="31.2" cy="25.6" r="0.7"/>
                <circle cx="29.3" cy="27" r="0.7"/>
                <circle cx="30.7" cy="27" r="0.7"/>
              </g>
            </svg>
            <span style={{
              fontFamily: 'Fraunces, serif', fontSize: 22, fontWeight: 500,
              color: 'var(--bg)', letterSpacing: '-0.02em',
            }}>bloom</span>
          </div>
          <p style={{
            fontFamily: 'Fraunces, serif', fontStyle: 'italic',
            fontSize: 15, lineHeight: 1.6, color: 'rgba(250,247,242,0.55)',
            maxWidth: 240, marginBottom: 24,
          }}>
            Your hybrid mindfulness garden.<br/>Tap. Reflect. Grow.
          </p>
          <p style={{ fontSize: 12, color: 'rgba(250,247,242,0.4)' }}>
            Made in Cologne 🇩🇪
          </p>
        </div>

        {/* Explore */}
        <div>
          <p style={footerHeading}>Explore</p>
          <FooterLink href="/">Home</FooterLink>
          <FooterLink href="/about">Story</FooterLink>
          <FooterLink href="/pricing">Pricing</FooterLink>
          <FooterLink href="/journal">Journal</FooterLink>
        </div>

        {/* Legal */}
        <div>
          <p style={footerHeading}>Legal</p>
          <FooterLink href="/impressum">Impressum</FooterLink>
          <FooterLink href="/privacy">Privacy</FooterLink>
          <FooterLink href="/terms">Terms</FooterLink>
          <FooterLink href="/community">Community</FooterLink>
        </div>

        {/* Connect */}
        <div>
          <p style={footerHeading}>Connect</p>
          <FooterLink href="mailto:hello@trybloom.co">hello@trybloom.co</FooterLink>
          <FooterLink href="https://instagram.com/trybloom" target="_blank">Instagram</FooterLink>
          <FooterLink href="https://tiktok.com/@trybloom" target="_blank">TikTok</FooterLink>
        </div>
      </div>

      <div style={{
        maxWidth: 1200, margin: '60px auto 0', position: 'relative',
        paddingTop: 24, borderTop: '1px solid rgba(250,247,242,0.1)',
        display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12,
        fontSize: 11, color: 'rgba(250,247,242,0.35)',
      }}>
        <span>© 2026 Bloom. All rights reserved.</span>
        <span style={{ fontStyle: 'italic' }}>tap. reflect. grow.</span>
      </div>
    </footer>
  );
}

const footerHeading = {
  fontFamily: 'Inter, sans-serif',
  fontSize: 11,
  textTransform: 'uppercase' as const,
  letterSpacing: '0.12em',
  color: 'var(--terra-l)',
  fontWeight: 600,
  marginBottom: 16,
};

function FooterLink({ href, children, target }: { href: string; children: React.ReactNode; target?: string }) {
  return (
    <Link href={href} target={target} style={{
      display: 'block',
      fontSize: 13,
      color: 'rgba(250,247,242,0.6)',
      padding: '5px 0',
      transition: 'color 0.2s',
    }}>
      {children}
    </Link>
  );
}
