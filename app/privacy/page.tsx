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
      lastUpdated="June 2026"
    >
      <blockquote>
        <strong>The short version:</strong> Your data is yours. We never sell it. We never show ads. We never train AI on your reflections. EU servers, GDPR-compliant. Delete or export anytime.
      </blockquote>

      <h2>1. Data Controllers</h2>
      <p>
        Joint data controllers within the meaning of Art. 26 GDPR:
      </p>
      <p>
        <strong>Rafael Gordillo &amp; Eckard Schumann</strong> (Co-Founders, Bloom GbR i.G.)<br/>
        [STREET ADDRESS]<br/>
        [POSTAL CODE] Cologne, Germany<br/>
        Email: <a href="mailto:privacy@trybloom.co">privacy@trybloom.co</a>
      </p>
      <p>
        <em>(After registration of our UG/GmbH, the controller will be updated to Bloom UG/GmbH at the registered office.)</em>
      </p>

      <h2>2. What we collect</h2>

      <h3>Account information</h3>
      <ul>
        <li><strong>Email address</strong> &mdash; for magic link authentication</li>
        <li><strong>Display name</strong> &mdash; visible in your gardens</li>
        <li><strong>Account creation date</strong></li>
      </ul>
      <p><em>Legal basis:</em> Art. 6 (1) (b) GDPR &mdash; contract performance.</p>

      <h3>User-generated content</h3>
      <ul>
        <li>Daily reflections and check-ins</li>
        <li>Notes (love letters, thoughts)</li>
        <li>Moments (memories you save)</li>
        <li>Garden names and memberships</li>
      </ul>
      <p>Stored until you delete the content or your account.</p>

      <h3>Waitlist signups</h3>
      <p>
        If you join our launch waitlist, we store only your <strong>email address</strong> and the date you signed up. We use this exclusively to notify you when Bloom opens and to share occasional updates if you opt in.
      </p>
      <p><em>Legal basis:</em> Art. 6 (1) (a) GDPR &mdash; consent. You can unsubscribe anytime by emailing privacy@trybloom.co.</p>

      <h3>Technical data</h3>
      <p>On every visit, the following data is automatically collected:</p>
      <ul>
        <li>IP address (anonymized after 30 days)</li>
        <li>Browser type and version</li>
        <li>Operating system</li>
        <li>Time of request</li>
        <li>URL accessed</li>
      </ul>
      <p><em>Legal basis:</em> Art. 6 (1) (f) GDPR &mdash; legitimate interest (security, operations). Storage: 30 days.</p>

      <h3>What we do NOT collect</h3>
      <ul>
        <li>❌ No location data</li>
        <li>❌ No contacts or address book</li>
        <li>❌ No tracking cookies for advertising</li>
        <li>❌ No third-party advertising data</li>
        <li>❌ We never sell your data</li>
        <li>❌ We never train AI models on your content</li>
      </ul>

      <h2>3. Third-party processors</h2>
      <p>We have Data Processing Agreements (DPA) signed with all third parties that may touch your data.</p>

      <h3>Supabase (Database &amp; Authentication)</h3>
      <p>
        Server region: <strong>Frankfurt, Germany (EU)</strong>. DPA signed.<br/>
        <a href="https://supabase.com/privacy" target="_blank">supabase.com/privacy</a>
      </p>

      <h3>Vercel (Web Hosting)</h3>
      <p>
        EU regions where possible; Standard Contractual Clauses (SCC) apply.<br/>
        <a href="https://vercel.com/legal/privacy-policy" target="_blank">vercel.com/legal/privacy-policy</a>
      </p>

      <h3>Stripe (Payments &mdash; future)</h3>
      <p>For purchases of Bloom NFC cards (once available). GDPR-compliant payment processor. Not active during the waitlist phase.</p>

      <h2>4. Cookies &amp; Local Storage</h2>
      <p>We use only <strong>technically necessary cookies and localStorage</strong>:</p>
      <ul>
        <li>Supabase session cookie (keeps you logged in to the app)</li>
        <li>localStorage for your last active garden selection</li>
      </ul>
      <p>
        These are exempt from consent under § 25 (2) TTDSG because they are strictly necessary to provide the service you requested.
      </p>

      <h3>What we do NOT use</h3>
      <ul>
        <li>❌ No tracking cookies</li>
        <li>❌ No advertising cookies</li>
        <li>❌ No analytics cookies on the app (Bloom app) or marketing site (currently)</li>
        <li>❌ No third-party social media pixels</li>
      </ul>
      <p>
        Because we use only essential cookies, no cookie consent banner is required at this time.
      </p>

      <h3>If this ever changes</h3>
      <p>
        Should we add analytics (e.g. for a marketing campaign), we will <strong>first display a cookie consent banner</strong> and only load those tools <em>after</em> your explicit opt-in, as required by Art. 6 (1) (a) GDPR and § 25 (1) TTDSG. We will update this page and notify users beforehand.
      </p>

      <h2>5. NFC cards and data</h2>
      <p>
        When you tap a Bloom NFC card, only a URL is opened. <strong>No data is transmitted to or read from the card.</strong> The card contains a static link to the Bloom application.
      </p>

      <h2>6. Your rights (GDPR)</h2>
      <p>You have the right to:</p>
      <ul>
        <li><strong>Access</strong> (Art. 15) &mdash; what data do we have about you?</li>
        <li><strong>Rectification</strong> (Art. 16) &mdash; correct incorrect data</li>
        <li><strong>Erasure</strong> (Art. 17) &mdash; "right to be forgotten"</li>
        <li><strong>Data portability</strong> (Art. 20) &mdash; export your data</li>
        <li><strong>Object</strong> (Art. 21) &mdash; to certain processing</li>
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
        <li>Row-Level Security &mdash; only you can access your gardens</li>
        <li>No passwords &mdash; magic-link authentication only</li>
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
