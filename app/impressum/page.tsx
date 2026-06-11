import LegalLayout from '@/components/LegalLayout';

export const metadata = {
  title: 'Impressum — Bloom',
  description: 'Legal notice and company information.',
};

export default function Impressum() {
  return (
    <LegalLayout
      title="Impressum"
      subtitle="Legal notice per § 5 TMG (German Telemedia Act)"
      lastUpdated="June 2026"
    >
      <h2>🇩🇪 Impressum (Deutsch)</h2>

      <h3>Angaben gemäß § 5 TMG</h3>
      <p>
        <strong>Bloom — A mindful garden</strong> (working title)<br/>
        Gegründet von Rafael Gordillo &amp; Eckard Schumann
      </p>

      <h4>Postanschrift</h4>
      <p>
        [STRASSE UND HAUSNUMMER]<br/>
        [PLZ] Köln<br/>
        Deutschland
      </p>

      <h4>Kontakt</h4>
      <p>
        E-Mail: hello@trybloom.co<br/>
        Telefon: [OPTIONAL]
      </p>

      <h3>Rechtsform (aktuell)</h3>
      <p>
        Gesellschaft bürgerlichen Rechts (GbR) <em>(während der Gründungsphase der UG/GmbH)</em>
      </p>
      <blockquote>
        <strong>Hinweis:</strong> Eine UG (haftungsbeschränkt) befindet sich in Gründung. Bis zum Abschluss der Eintragung im Handelsregister haften beide Gesellschafter persönlich und gesamtschuldnerisch.
      </blockquote>

      <h3>Vertretungsberechtigte Gesellschafter</h3>
      <p>
        Rafael Gordillo &mdash; Co-Founder &amp; Geschäftsführer<br/>
        Eckard Schumann &mdash; Co-Founder &amp; Geschäftsführer
      </p>

      <h3>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h3>
      <p>
        Rafael Gordillo &amp; Eckard Schumann<br/>
        [Adresse wie oben]
      </p>

      <h3>Streitbeilegung</h3>
      <p>
        Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung bereit:{' '}
        <a href="https://ec.europa.eu/consumers/odr/" target="_blank">ec.europa.eu/consumers/odr</a>.
      </p>
      <p>
        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
      </p>

      <h3>Haftung für Inhalte</h3>
      <p>
        Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
      </p>

      <h3>Urheberrecht</h3>
      <p>
        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung.
      </p>

      <hr/>

      <h2>🇬🇧 Legal Notice (English)</h2>

      <h3>Information per § 5 TMG (German Telemedia Act)</h3>
      <p>
        <strong>Bloom — A mindful garden</strong> (working title)<br/>
        Founded by Rafael Gordillo &amp; Eckard Schumann
      </p>

      <h4>Postal address</h4>
      <p>
        [STREET ADDRESS]<br/>
        [POSTAL CODE] Cologne<br/>
        Germany
      </p>

      <h4>Contact</h4>
      <p>
        Email: hello@trybloom.co<br/>
        Phone: [OPTIONAL]
      </p>

      <h3>Legal form (current)</h3>
      <p>
        German civil law partnership (Gesellschaft bürgerlichen Rechts, GbR) <em>during the formation phase of the UG/GmbH</em>.
      </p>
      <blockquote>
        <strong>Notice:</strong> A UG (haftungsbeschränkt) is currently being formed. Until the registration in the German commercial register is complete, both partners are personally and jointly liable.
      </blockquote>

      <h3>Authorized representatives</h3>
      <p>
        Rafael Gordillo &mdash; Co-Founder &amp; Managing Director<br/>
        Eckard Schumann &mdash; Co-Founder &amp; Managing Director
      </p>

      <h3>Responsible for content per § 18 Para. 2 MStV</h3>
      <p>Rafael Gordillo &amp; Eckard Schumann, address as above.</p>

      <h3>Dispute Resolution</h3>
      <p>
        The European Commission provides a platform for online dispute resolution:{' '}
        <a href="https://ec.europa.eu/consumers/odr/" target="_blank">ec.europa.eu/consumers/odr</a>.
      </p>
      <p>
        We are not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board.
      </p>
    </LegalLayout>
  );
}
