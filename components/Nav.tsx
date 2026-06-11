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
    <Link href="/" style={{
          fontFamily: 'Fraunces, serif', fontSize: 22, fontWeight: 500,
          color: 'var(--ink)', letterSpacing: '-0.02em', display: 'flex', alignItems: 'center', gap: 10,
        }}>
          <svg width="28" height="28" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g stroke="#2F4032" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none">
              {/* 8 petals around center */}
              <g transform="rotate(0 30 26)"><path d="M30 23 C27 21 25 17 27 14 C28 13 29 13 30 14 C31 13 32 13 33 14 C35 17 33 21 30 23 Z"/></g>
              <g transform="rotate(45 30 26)"><path d="M30 23 C27 21 25 17 27 14 C28 13 29 13 30 14 C31 13 32 13 33 14 C35 17 33 21 30 23 Z"/></g>
              <g transform="rotate(90 30 26)"><path d="M30 23 C27 21 25 17 27 14 C28 13 29 13 30 14 C31 13 32 13 33 14 C35 17 33 21 30 23 Z"/></g>
              <g transform="rotate(135 30 26)"><path d="M30 23 C27 21 25 17 27 14 C28 13 29 13 30 14 C31 13 32 13 33 14 C35 17 33 21 30 23 Z"/></g>
              <g transform="rotate(180 30 26)"><path d="M30 23 C27 21 25 17 27 14 C28 13 29 13 30 14 C31 13 32 13 33 14 C35 17 33 21 30 23 Z"/></g>
              <g transform="rotate(225 30 26)"><path d="M30 23 C27 21 25 17 27 14 C28 13 29 13 30 14 C31 13 32 13 33 14 C35 17 33 21 30 23 Z"/></g>
              <g transform="rotate(270 30 26)"><path d="M30 23 C27 21 25 17 27 14 C28 13 29 13 30 14 C31 13 32 13 33 14 C35 17 33 21 30 23 Z"/></g>
              <g transform="rotate(315 30 26)"><path d="M30 23 C27 21 25 17 27 14 C28 13 29 13 30 14 C31 13 32 13 33 14 C35 17 33 21 30 23 Z"/></g>
              {/* stem */}
              <path d="M30 36 C29 44 30 52 30 56"/>
              {/* leaves */}
              <path d="M29 44 C24 43 19 41 17 38 C20 38 26 40 29 44 Z"/>
              <path d="M30 42 C35 41 40 39 42 36 C39 36 33 38 30 42 Z"/>
              <path d="M30 51 C26 51 22 50 20 48 C23 47 27 48 30 51 Z"/>
              {/* center circle */}
              <circle cx="30" cy="26" r="3" stroke="#2F4032" strokeWidth="1.6"/>
            </g>
            {/* 5 terracotta dots in the center */}
            <g fill="#C4633F">
              <circle cx="30" cy="24.8" r="0.7"/>
              <circle cx="28.8" cy="25.6" r="0.7"/>
              <circle cx="31.2" cy="25.6" r="0.7"/>
              <circle cx="29.3" cy="27" r="0.7"/>
              <circle cx="30.7" cy="27" r="0.7"/>
            </g>
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
