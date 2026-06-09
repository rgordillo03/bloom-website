import Link from 'next/link';

export const metadata = {
  title: 'About — Bloom',
  description: 'I built Bloom for myself, first. Here\'s the honest story.',
};

export default function About() {
  return (
    <article style={{ paddingTop: 120, paddingBottom: 100 }}>
      {/* Hero */}
      <section style={{ padding: '60px 24px', textAlign: 'center', position: 'relative' }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(232,196,184,0.25), transparent 60%)',
          pointerEvents: 'none',
        }}/>
        <div style={{ maxWidth: 720, margin: '0 auto', position: 'relative' }}>
          <p className="section-label">A note from me</p>
          <h1 style={{ marginBottom: 28, fontSize: 'clamp(40px, 8vw, 72px)' }}>
            I built this <em>for myself,</em><br/>first.
          </h1>
          <p style={{
            fontFamily: 'Fraunces, serif',
            fontStyle: 'italic',
            fontSize: 22,
            color: 'var(--brown-m)',
            lineHeight: 1.55,
          }}>
            The honest story behind Bloom.
          </p>
        </div>
      </section>

      {/* Story body */}
      <section style={{ padding: '60px 24px' }}>
        <div style={{ maxWidth: 680, margin: '0 auto', fontSize: 17, lineHeight: 1.8, color: 'var(--brown)' }}>

          <p style={{ marginBottom: 28 }}>
            I'm Rafael. I live in Cologne. I struggle with building habits, like most people do.
          </p>

          <p style={{ marginBottom: 28 }}>
            Over the years I've downloaded a lot of mindfulness and journaling apps.
            Most of them I ignored after a week. The ones I didn't ignore overwhelmed me &mdash;
            too many features, too many notifications, too much asking me to <em>do</em> things
            in a space that was supposed to feel calm.
          </p>

          <p style={{
            fontFamily: 'Fraunces, serif',
            fontStyle: 'italic',
            fontSize: 22,
            color: 'var(--ink)',
            lineHeight: 1.5,
            margin: '40px 0',
            paddingLeft: 24,
            borderLeft: '3px solid var(--terra)',
          }}>
            What I actually wanted was something small.
            One question a day. A quiet place to put my answer. Nothing else.
          </p>

          <p style={{ marginBottom: 28 }}>
            So I started building it. The first version was just for me &mdash;
            a digital garden hidden behind an NFC card on my fridge. Tap it,
            see a question, write a few sentences, close it.
          </p>

          <p style={{ marginBottom: 28 }}>
            What surprised me was that I kept coming back. Not because the app reminded me,
            or because I'd built a streak I didn't want to lose &mdash; but because the ritual
            was small enough to feel possible, even on bad days.
          </p>

          <h3 style={{ marginTop: 56, marginBottom: 20 }}>What Bloom is</h3>

          <p style={{ marginBottom: 28 }}>
            A tiny bamboo card that lives on your fridge. One question a day in a quiet web app.
            A small visual garden that grows as you keep showing up. That&apos;s it.
          </p>

          <p style={{ marginBottom: 28 }}>
            You can use it alone, share a garden with a partner or a friend,
            or have one for a group of people you love. The app is the same &mdash;
            the modes just change who else can see what you write.
          </p>

          <h3 style={{ marginTop: 56, marginBottom: 20 }}>What Bloom isn&apos;t</h3>

          <p style={{ marginBottom: 28 }}>
            It&apos;s not therapy. It&apos;s not a coach. It&apos;s not a productivity app.
            It doesn&apos;t gamify anything. There are no streaks, no badges, no leaderboards.
          </p>

          <p style={{ marginBottom: 28 }}>
            And it&apos;s not finished. I&apos;m still building it. Founding 100 members
            will help me figure out what it should become.
          </p>

          <h3 style={{ marginTop: 56, marginBottom: 20 }}>About the cards</h3>

          <p style={{ marginBottom: 28 }}>
            They&apos;re made of bamboo, designed and produced in Germany, and shipped from here too.
            That means a small carbon footprint and a product I can vouch for personally
            because I&apos;ve held every one of them.
          </p>

          <p style={{ marginBottom: 28 }}>
            If you&apos;d rather skip the card, you can just use the digital garden on its own.
            Both options give you the same app.
          </p>

          <div style={{ marginTop: 48, display: 'flex', alignItems: 'center', gap: 16 }}>
            <div style={{
              width: 60, height: 60,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, var(--peach), var(--blush))',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'Fraunces, serif',
              fontSize: 26,
              color: 'var(--terra-d)',
              fontWeight: 600,
              boxShadow: '0 6px 16px rgba(193,127,89,0.2)',
            }}>R</div>
            <div>
              <p style={{ fontFamily: 'Fraunces, serif', fontStyle: 'italic', fontSize: 18, color: 'var(--ink)' }}>
                &mdash; Rafael
              </p>
              <p style={{ fontSize: 12, color: 'var(--brown-l)', letterSpacing: '0.03em' }}>
                Building Bloom &middot; Cologne
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 24px', textAlign: 'center' }}>
        <Link href="/pricing" className="btn btn-primary">
          Notify me when ready
          <svg className="btn-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </Link>
      </section>
    </article>
  );
}
