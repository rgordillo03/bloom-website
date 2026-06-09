import LegalLayout from '@/components/LegalLayout';

export const metadata = {
  title: 'Privacy Policy — Bloom',
  description: 'How we handle your data. With care, transparency, and GDPR compliance.',
};

export default function Privacy() {
  return (
    <LegalLayout
      title="Privacy Policy"
      subtitle="How we handle your data. With care, transparency, and respect."
      lastUpdated="May 2026"
    >
      <blockquote>
        <strong>The short version:</strong> Your data is yours. We never sell it. We never show ads. We never train AI on your reflections. EU servers, GDPR-compliant. Delete or export anytime.
      </blockquote>

      <h2>1. Data Controller</h2>
      <p>
        Rafael Gordillo<br/>
        [STREET ADDRESS]<br/>
        [POSTAL CODE] Cologne, Germany<br/>
        Email: <a href="mailto:privacy@trybloom.co">privacy@trybloom.co</a>
      </p>

      <h2>2. What we collect</h2>

      <h3>Account information</h3>
      <ul>
        <li><strong>Email address</strong> — for magic link authentication</li>
        <li><strong>Display name</strong> — visible in your gardens</li>
        <li><strong>Account creation date</strong></li>
      </ul>
      <p><em>Legal basis:</em> Art. 6 (1) (b) GDPR — contract performance.</p>

      <h3>User-generated content</h3>
      <ul>
        <li>Daily reflections and check-ins</li>
        <li>Notes (love letters, thoughts)</li>
        <li>Moments (memories you save)</li>
        <li>Garden names and memberships</li>
      </ul>
      <p>Stored until you delete the content or your account.</p>

      <h3>Technical data</h3>
      <p>IP address (anonymized after 30 days), browser type, OS, time of request, URL accessed. Stored for 30 days for security purposes.</p>

      <h3>What we do NOT collect</h3>
      <ul>
        <li>❌ No location data</li>
        <li>❌ No contacts or address book</li>
        <li>❌ No tracking cookies or advertising pixels</li>
        <li>❌ No third-party advertising data</li>
        <li>❌ We never sell your data</li>
      </ul>

      <h2>3. Third-party processors</h2>
      <p>We have Data Processing Agreements (DPA) signed with all third parties that may touch your data.</p>

      <h3>Supabase (Database & Authentication)</h3>
      <p>
        Server region: <strong>Frankfurt, Germany (EU)</strong>. DPA signed.<br/>
        <a href="https://supabase.com/privacy" target="_blank">supabase.com/privacy</a>
      </p>

      <h3>Vercel (Web Hosting)</h3>
      <p>
        EU regions where possible; Standard Contractual Clauses (SCC) apply.<br/>
        <a href="https://vercel.com/legal/privacy-policy" target="_blank">vercel.com/legal/privacy-policy</a>
      </p>

      <h3>Stripe (Payments)</h3>
      <p>For purchases of Bloom NFC cards. GDPR-compliant payment processor.</p>

      <h2>4. NFC cards and data</h2>
      <p>
        When you tap a Bloom NFC card, only a URL is opened. <strong>No data is transmitted to or read from the card.</strong> It contains a static link to the Bloom application.
      </p>

      <h2>5. Cookies</h2>
      <p>We use only technically necessary cookies and localStorage:</p>
      <ul>
        <li>Supabase session cookie (keeps you logged in)</li>
        <li>localStorage for your last active garden</li>
      </ul>
      <p>
        <strong>No tracking, no marketing, no analytics cookies.</strong> A cookie banner is therefore not required.
      </p>

      <h2>6. Your rights (GDPR)</h2>
      <p>You have the right to:</p>
      <ul>
        <li><strong>Access</strong> (Art. 15) — what data do we have about you?</li>
        <li><strong>Rectification</strong> (Art. 16) — correct incorrect data</li>
        <li><strong>Erasure</strong> (Art. 17) — "right to be forgotten"</li>
        <li><strong>Data portability</strong> (Art. 20) — export your data</li>
        <li><strong>Object</strong> (Art. 21) — to certain processing</li>
        <li><strong>Withdraw consent</strong> (Art. 7 (3))</li>
      </ul>
      <p>
        To exercise your rights, email <a href="mailto:privacy@trybloom.co">privacy@trybloom.co</a>. We respond within 30 days.
      </p>

      <h3>Right to complain</h3>
      <p>
        You can file a complaint with the relevant supervisory authority:<br/>
        <strong>Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen</strong><br/>
        Kavalleriestr. 2-4, 40213 Düsseldorf<br/>
        <a href="https://www.ldi.nrw.de" target="_blank">ldi.nrw.de</a>
      </p>

      <h2>7. Account deletion</h2>
      <p>You can delete your account anytime via Settings or by emailing privacy@trybloom.co.</p>
      <p>After deletion:</p>
      <ul>
        <li>Personal data removed within <strong>30 days</strong></li>
        <li>Content in shared gardens is anonymized (remains visible to other members but without your identity)</li>
        <li>Backups overwritten within <strong>90 days</strong></li>
      </ul>

      <h2>8. Security</h2>
      <ul>
        <li>HTTPS encryption for all data transmissions</li>
        <li>Encrypted databases (at-rest encryption at Supabase)</li>
        <li>Row-Level Security — only you can access your gardens</li>
        <li>No passwords — magic-link authentication only</li>
        <li>Regular security audits</li>
      </ul>

      <h2>9. Minors</h2>
      <p>
        Bloom is intended for persons aged <strong>16 and older</strong>. We do not knowingly process data from children under 16 without parental consent.
      </p>

      <h2>10. Changes</h2>
      <p>
        We may update this policy when legal frameworks change or our service evolves. Material changes will be communicated by email.
      </p>
    </LegalLayout>
  );
}
