'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      padding: '18px 32px',
      background: scrolled ? 'rgba(250,247,242,0.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(193,127,89,0.08)' : '1px solid transparent',
      transition: 'all 0.3s ease',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link href="/" style={{
          fontFamily: 'Fraunces, serif', fontSize: 22, fontWeight: 500,
          color: 'var(--ink)', letterSpacing: '-0.02em', display: 'flex', alignItems: 'center', gap: 8,
        }}>
          <svg width="26" height="26" viewBox="0 0 48 48" fill="none">
            <path d="M24 8C24 8 18 16 18 24C18 30 20.7 34 24 36C27.3 34 30 30 30 24C30 16 24 8 24 8Z" fill="#8B9E7E"/>
            <circle cx="24" cy="20" r="3" fill="#C17F59"/>
          </svg>
          bloom
        </Link>

        {/* Desktop nav */}
        <div className="nav-desktop" style={{
          display: 'flex', gap: 36, alignItems: 'center',
        }}>
          <Link href="/about" style={navLinkStyle}>Story</Link>
          <Link href="/pricing" style={navLinkStyle}>Pricing</Link>
          <Link href="/journal" style={navLinkStyle}>Journal</Link>
          <Link href="/pricing" className="btn btn-primary" style={{
            padding: '10px 20px', fontSize: 13,
          }}>
            Notify me
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="nav-mobile-btn"
          onClick={() => setOpen(!open)}
          style={{
            background: 'transparent', border: 'none', cursor: 'pointer',
            display: 'none', padding: 8,
          }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--ink)" strokeWidth="1.5" strokeLinecap="round">
            {open ? (
              <><path d="M6 6l12 12M6 18L18 6"/></>
            ) : (
              <><line x1="3" y1="8" x2="21" y2="8"/><line x1="3" y1="16" x2="21" y2="16"/></>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{
          position: 'fixed', top: 60, left: 0, right: 0,
          background: 'rgba(250,247,242,0.98)', backdropFilter: 'blur(20px)',
          padding: '32px 24px', borderBottom: '1px solid rgba(193,127,89,0.08)',
          display: 'flex', flexDirection: 'column', gap: 20,
        }}>
          <Link href="/about" onClick={() => setOpen(false)} style={navLinkStyle}>Story</Link>
          <Link href="/pricing" onClick={() => setOpen(false)} style={navLinkStyle}>Pricing</Link>
          <Link href="/journal" onClick={() => setOpen(false)} style={navLinkStyle}>Journal</Link>
          <Link href="/pricing" onClick={() => setOpen(false)} className="btn btn-primary" style={{
            padding: '14px 20px', justifyContent: 'center',
          }}>
            Notify me →
          </Link>
        </div>
      )}

      <style jsx>{`
        @media (max-width: 768px) {
          :global(.nav-desktop) { display: none !important; }
          :global(.nav-mobile-btn) { display: block !important; }
        }
      `}</style>
    </nav>
  );
}

const navLinkStyle = {
  fontFamily: 'Inter, sans-serif',
  fontSize: 14,
  color: 'var(--brown)',
  fontWeight: 500,
  letterSpacing: '0.01em',
  transition: 'color 0.2s',
};
