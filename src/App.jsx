import { useState } from "react";
import { Tabs, Tab } from "@blueprintjs/core";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CipherSelector from "./components/CipherSelector";
import AlgorithmDescription from "./components/common/AlgorithmDescription";
import algorithmData, { ALGORITHM_CATEGORIES } from "./data/algorithmData";
import { getCipherComponent } from "./utils/cipherUtils";
import Privacy from "./pages/Privacy";
import Security from "./pages/Security";
import Documentation from "./pages/Documentation";
import PageLayout from "./components/layout/PageLayout";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/select/lib/css/blueprint-select.css";
import "./styles/theme.css";
import "./App.css";

function CipherTools() {
  const [activeTab, setActiveTab] = useState(ALGORITHM_CATEGORIES.ENCRYPTION);
  const [selectedCipher, setSelectedCipher] = useState(null);

  const renderTabContent = (category) => (
    <>
      <div className="cipher-selector">
        <CipherSelector
          selectedCipher={selectedCipher}
          onCipherSelect={setSelectedCipher}
          category={category}
        />
      </div>
      {selectedCipher && (
        <AlgorithmDescription
          algorithmId={selectedCipher.id}
          category={category}
        />
      )}
      <div className="algorithm-content">
        {selectedCipher && getCipherComponent(selectedCipher.id)}
      </div>
    </>
  );

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
        {Object.entries(algorithmData).map(([category, { title }]) => (
          <Tab
            key={category}
            id={category}
            title={title}
            panel={renderTabContent(category)}
          />
        ))}
      </Tabs>
    </PageLayout>
  );
}

function App() {
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

export default App;
