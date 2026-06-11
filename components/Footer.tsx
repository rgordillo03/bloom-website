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
      {/* Subtle gradient overlay */}
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
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
            <svg width="24" height="24" viewBox="0 0 48 48" fill="none">
              <path d="M24 8C24 8 18 16 18 24C18 30 20.7 34 24 36C27.3 34 30 30 30 24C30 16 24 8 24 8Z" fill="#8B9E7E"/>
              <circle cx="24" cy="20" r="3" fill="#C17F59"/>
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
        <span style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          <Link href="/privacy#cookies" style={{
            color: 'rgba(250,247,242,0.5)',
            fontSize: 11,
          }}>
            🍪 Only essential cookies — no tracking
          </Link>
          <span style={{ fontStyle: 'italic' }}>tap. reflect. grow.</span>
        </span>
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
