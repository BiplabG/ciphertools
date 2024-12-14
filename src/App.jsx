import { useState } from "react";
import { Tabs, Tab } from "@blueprintjs/core";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CipherSelector from "./components/CipherSelector";
import AlgorithmDescription from "./components/common/AlgorithmDescription";
import AES128 from "./components/ciphers/AES128";
import SHA256 from "./components/ciphers/SHA256";
import Privacy from "./pages/Privacy";
import Security from "./pages/Security";
import Documentation from "./pages/Documentation";
import PageLayout from "./components/layout/PageLayout";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/select/lib/css/blueprint-select.css";
import "./styles/theme.css";
import "./App.css";

function CipherTools() {
  const [activeTab, setActiveTab] = useState("encryption");
  const [selectedCipher, setSelectedCipher] = useState(null);

  const renderCipherComponent = () => {
    if (!selectedCipher) return null;

    switch (selectedCipher.id) {
      case "aes128":
        return <AES128 />;
      case "sha256":
        return <SHA256 />;
      default:
        return <div className="coming-soon">Coming soon...</div>;
    }
  };

  return (
    <PageLayout>
      <div className="hero-section">
        <img
          src="/src/assets/logo.svg"
          alt="CipherTools Logo"
          className="logo"
        />
        <h1 className="page-title"> Cryptographic Tools_</h1>
        <p className="page-description">
          $ secure-cipher --mode client-side --operation encrypt
        </p>
      </div>

      <Tabs
        id="cipher-tabs"
        selectedTabId={activeTab}
        onChange={setActiveTab}
        animate={false}
      >
        <Tab
          id="encryption"
          title="Encryption"
          panel={
            <>
              <div className="cipher-selector">
                <CipherSelector
                  selectedCipher={selectedCipher}
                  onCipherSelect={setSelectedCipher}
                />
              </div>
              {selectedCipher && (
                <AlgorithmDescription algorithmId={selectedCipher.id} />
              )}
              <div className="algorithm-content">{renderCipherComponent()}</div>
            </>
          }
        />
        {/* Similar structure for other tabs */}
      </Tabs>
    </PageLayout>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CipherTools />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/security" element={<Security />} />
        <Route path="/docs" element={<Documentation />} />
      </Routes>
    </Router>
  );
}
