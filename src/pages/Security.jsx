import PageLayout from "../components/layout/PageLayout";

export default function Security() {
  return (
    <PageLayout>
      <div className="page-content">
        <h1 className="page-title">Security Information</h1>
        <div className="content-section">
          <h2>Client-Side Operations</h2>
          <p>
            All cryptographic operations are performed entirely in your browser
            using the Web Crypto API and trusted cryptographic libraries.
          </p>

          <h2>No Server Communication</h2>
          <p>
            Your data never leaves your browser. There are no API calls or
            server communications when performing cryptographic operations.
          </p>

          <h2>Libraries Used</h2>
          <ul>
            <li>CryptoJS - For implementing cryptographic functions</li>
            <li>Web Crypto API - For secure random number generation</li>
          </ul>

          <h2>Best Practices</h2>
          <p>We recommend:</p>
          <ul>
            <li>Using strong, random keys for encryption</li>
            <li>Never sharing encryption keys via unsecured channels</li>
            <li>Keeping your browser updated to ensure security</li>
          </ul>
        </div>
      </div>
    </PageLayout>
  );
}
