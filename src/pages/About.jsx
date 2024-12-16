import PageLayout from "../components/layout/PageLayout";
import { Card } from "@blueprintjs/core";
import algorithmData from "../data/algorithmData";

export default function About() {
  return (
    <PageLayout>
      <div className="page-content">
        <h1 className="page-title">About</h1>

        {Object.entries(algorithmData).map(([category, algorithms]) => (
          <div key={category} className="content-section">
            <h2>{category}</h2>
            <div className="algorithm-grid">
              {algorithms["algorithms"].map((algo) => (
                <Card key={algo.id} className="algorithm-doc-card">
                  <h3>{algo.name}</h3>
                  <p>{algo.description}</p>
                  <h4>Key Features</h4>
                  <ul>
                    {algo.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                  {algo.example && (
                    <>
                      <h4>Example Usage</h4>
                      <pre>
                        <code>{algo.example}</code>
                      </pre>
                    </>
                  )}
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}
