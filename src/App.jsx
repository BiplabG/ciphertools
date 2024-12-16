import { useState } from "react";
import { Tabs, Tab } from "@blueprintjs/core";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CipherSelector from "./components/CipherSelector";
import AlgorithmDescription from "./components/common/AlgorithmDescription";
import algorithmData, { ALGORITHM_CATEGORIES } from "./data/algorithmData";
import { getCipherComponent } from "./utils/cipherUtils";
import Privacy from "./pages/Privacy";
import Security from "./pages/Security";
import About from "./pages/About";
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
      <div className="algorithm-content">
        {selectedCipher && getCipherComponent(selectedCipher.id)}
      </div>
      {selectedCipher && (
        <AlgorithmDescription
          algorithmId={selectedCipher.id}
          category={category}
        />
      )}
    </>
  );

  return (
    <PageLayout>
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
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
