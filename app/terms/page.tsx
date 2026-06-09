import LegalLayout from '@/components/LegalLayout';

export const metadata = {
  title: 'Terms of Service — Bloom',
  description: 'The agreement between you and Bloom.',
};

export default function Terms() {
  return (
    <LegalLayout
      title="Terms of Service"
      subtitle="The agreement between you and Bloom."
      lastUpdated="May 2026"
    >
      <h2>§ 1 Scope</h2>
      <p>
        These Terms apply to the use of the Bloom application and Bloom NFC cards (collectively "Bloom" or "Service"), provided by Rafael Gordillo, [STREET], [POSTAL CODE] Cologne, Germany.
      </p>

      <h2>§ 2 Service Description</h2>
      <p>
        Bloom is a Progressive Web App for personal reflection and mindful connection. Users can create solo, couple, or group gardens, answer daily questions, share notes, and use a physical NFC card for quick access.
      </p>
      <blockquote>
        <strong>Important:</strong> Bloom is <em>not</em> a substitute for professional psychological, medical, or therapeutic advice. In crisis, please contact emergency services or qualified professionals.
      </blockquote>

      <h2>§ 3 Registration</h2>
      <p>To use Bloom you need an account. Requirements:</p>
      <ul>
        <li>Minimum age: <strong>16 years</strong></li>
        <li>Valid email address</li>
        <li>Agreement to these Terms and the Privacy Policy</li>
        <li>Legal capacity under your country's laws</li>
      </ul>
      <p>Only one account per person.</p>

      <h2>§ 4 User Obligations</h2>
      <p>You agree to:</p>
      <ul>
        <li>Provide truthful information</li>
        <li>Keep your access credentials confidential</li>
        <li>Comply with our <a href="/community">Community Guidelines</a></li>
        <li>Not abuse, scrape, or impersonate</li>
        <li>Not create multiple or fake accounts</li>
      </ul>

      <h2>§ 5 Content Rules</h2>
      <p>You are solely responsible for content you create or share. The following is prohibited:</p>
      <ul>
        <li>Pornographic or sexually explicit content</li>
        <li>Hate speech, discrimination, harassment</li>
        <li>Content sexualizing or endangering minors</li>
        <li>Threats, stalking, doxxing</li>
        <li>Illegal content (drugs, weapons, fraud)</li>
        <li>Spam or unsolicited commercial content</li>
        <li>Sharing content from gardens without consent of other members</li>
      </ul>
      <p>
        See full <a href="/community">Community Guidelines</a> for examples and our response process.
      </p>

      <h2>§ 6 Your content (License)</h2>
      <p>
        You retain ownership of all content you create. You grant us a limited license to store, display (to garden members), and back up your content as needed to provide the service. This license ends when you delete the content or account.
      </p>

      <h2>§ 7 Bloom NFC Cards (Hardware)</h2>

      <h3>Shipping</h3>
      <p>Cards ship from Cologne, Germany. Free EU shipping. Worldwide shipping calculated at checkout. Estimated delivery: 2–3 weeks for founding members.</p>

      <h3>Right of Withdrawal (for consumers)</h3>
      <blockquote>
        You have the right to withdraw from this contract within fourteen days without giving any reason. The withdrawal period is fourteen days from the day on which you (or a third party other than the carrier) took possession of the goods.
        <br/><br/>
        To exercise your right of withdrawal, inform us at <a href="mailto:hello@trybloom.co">hello@trybloom.co</a> with an unambiguous statement.
        <br/><br/>
        We will reimburse all payments received, including delivery costs, within 14 days from receiving your withdrawal notice.
      </blockquote>

      <h3>Warranty</h3>
      <p>Statutory warranty rights apply (24 months from receipt).</p>

      <h2>§ 8 Availability</h2>
      <p>We strive for high availability but do not guarantee specific uptime. Maintenance or outages may cause interruptions.</p>

      <h2>§ 9 Liability</h2>
      <p>
        We are liable without limitation for intent and gross negligence, and for injury to life, body, or health. For simple negligence, liability is limited to breach of essential contractual obligations and foreseeable damages.
      </p>
      <p>We are not liable for content created by other users in shared gardens.</p>

      <h2>§ 10 Account Termination</h2>
      <p>You may delete your account anytime. We may suspend or terminate accounts for:</p>
      <ul>
        <li>Violation of these Terms or Community Guidelines</li>
        <li>Prolonged inactivity (24+ months)</li>
        <li>Court or regulatory order</li>
        <li>Serious or illegal violations (immediate suspension without warning)</li>
      </ul>

      <h2>§ 11 Changes</h2>
      <p>
        We may update these Terms when needed. Material changes will be communicated by email at least 30 days before they take effect. Failure to object within 30 days constitutes acceptance.
      </p>

      <h2>§ 12 Final Provisions</h2>
      <p>
        German law applies, excluding the UN Convention on Contracts for the International Sale of Goods. For consumers, mandatory consumer protection laws of your country of residence remain unaffected.
      </p>
      <p>
        Place of jurisdiction is Cologne, as far as legally permissible.
      </p>
      <p>
        <strong>Dispute Resolution:</strong> EU online dispute resolution platform at{' '}
        <a href="https://ec.europa.eu/consumers/odr/" target="_blank">ec.europa.eu/consumers/odr</a>.
        We are not obliged to participate in arbitration proceedings.
      </p>
    </LegalLayout>
  );
}
