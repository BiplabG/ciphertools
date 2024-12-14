import PageLayout from "../components/layout/PageLayout";

export default function Privacy() {
  return (
    <PageLayout>
      <div className="page-content">
        <h1 className="page-title">Privacy Policy</h1>
        <div className="content-section">
          <h2>Data Collection</h2>
          <p>
            CipherTools does not collect, store, or transmit any of your data.
            All cryptographic operations are performed entirely in your browser.
          </p>

          <h2>Local Storage</h2>
          <p>
            We use local storage only to save your preferences (like theme
            settings). No encryption keys or data are ever stored.
          </p>

          <h2>Third-Party Services</h2>
          <p>We use minimal third-party services:</p>
          <ul>
            <li>Google Fonts - For loading the IBM Plex Mono font</li>
            <li>GitHub - For hosting our open-source code</li>
          </ul>

          <h2>Updates</h2>
          <p>
            This privacy policy was last updated on{" "}
            {new Date().toLocaleDateString()}.
          </p>
        </div>
      </div>
    </PageLayout>
  );
}
