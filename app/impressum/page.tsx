import LegalLayout from '@/components/LegalLayout';

export const metadata = {
  title: 'Impressum — Bloom',
  description: 'Legal notice and company information.',
};

export default function Impressum() {
  return (
    <LegalLayout
      title="Impressum"
      subtitle="Legal notice per § 5 TMG"
      lastUpdated="May 2026"
    >
      <h2>🇩🇪 Impressum (Deutsch)</h2>

      <h3>Angaben gemäß § 5 TMG</h3>
      <p>
        <strong>Bloom — A mindful garden</strong> (working title)<br/>
        Inhaber / Gründer: Rafael Gordillo
      </p>

      <h4>Anschrift</h4>
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
        Einzelunternehmen <em>(während der Gründungsphase der UG/GmbH)</em>
      </p>
      <blockquote>
        <strong>Hinweis:</strong> Eine UG/GmbH (haftungsbeschränkt) befindet sich in Gründung. Bis zum Abschluss der Eintragung im Handelsregister haftet der Inhaber persönlich.
      </blockquote>

      <h3>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h3>
      <p>
        Rafael Gordillo<br/>
        [ADRESSE WIE OBEN]
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
        Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen.
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
        Owner / Founder: Rafael Gordillo
      </p>

      <h4>Address</h4>
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

      <h3>Legal Form</h3>
      <p>
        Sole proprietorship <em>(during the formation phase of UG/GmbH)</em>
      </p>
      <blockquote>
        <strong>Notice:</strong> A UG/GmbH (haftungsbeschränkt) is currently being formed. Until registration in the German commercial register is complete, the owner is personally liable.
      </blockquote>

      <h3>Responsible for content per § 18 Para. 2 MStV</h3>
      <p>Rafael Gordillo, [address above]</p>

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
