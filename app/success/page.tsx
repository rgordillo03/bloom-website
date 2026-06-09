import Link from 'next/link';

export const metadata = { title: 'Welcome to Bloom 🌿' };

export default function Success() {
  return (
    <article style={{
      paddingTop: 160,
      paddingBottom: 100,
      textAlign: 'center',
      minHeight: '80vh',
      display: 'flex', flexDirection: 'column', justifyContent: 'center',
    }}>
      <div style={{ maxWidth: 560, margin: '0 auto', padding: '0 24px' }}>
        <div style={{
          fontSize: 64, marginBottom: 24,
          animation: 'floatGentle 3s ease-in-out infinite',
        }}>🌸</div>

        <h1 style={{ marginBottom: 24 }}>
          You're <em>in.</em>
        </h1>

        <p style={{
          fontSize: 18, color: 'var(--brown-m)',
          lineHeight: 1.7, marginBottom: 32,
        }}>
          Thank you for being one of our founding members.
          Your Bloom card is being prepared with care.
        </p>

        <div style={{
          background: 'var(--cream)',
          borderRadius: 20,
          padding: '28px 32px',
          textAlign: 'left',
          marginBottom: 32,
          border: '1px solid rgba(193,127,89,0.15)',
        }}>
          <p style={{ fontFamily: 'Fraunces, serif', fontSize: 18, color: 'var(--ink)', marginBottom: 16, fontStyle: 'italic' }}>
            What happens next:
          </p>
          <ol style={{ paddingLeft: 20, color: 'var(--brown-m)', lineHeight: 1.8 }}>
            <li>You'll get a confirmation email within minutes</li>
            <li>Your card ships within 2-3 weeks from Cologne 🇩🇪</li>
            <li>In the meantime, we'll send you a personal note from Rafael</li>
            <li>When the card arrives, you'll find a setup guide inside</li>
          </ol>
        </div>

        <p style={{ fontSize: 14, color: 'var(--brown-l)', fontStyle: 'italic', marginBottom: 32 }}>
          Questions? Just reply to your confirmation email or write to hello@trybloom.co.<br/>
          We're a tiny team and we love hearing from you.
        </p>

        <Link href="/" className="btn btn-secondary">
          ← Back home
        </Link>
      </div>
    </article>
  );
}
