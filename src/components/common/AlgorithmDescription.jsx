import algorithmData from "../../data/algorithmData";
import "./AlgorithmDescription.css";

export default function AlgorithmDescription({ algorithmId }) {
  const algorithm = Object.values(algorithmData)
    .flat()
    .find((algo) => algo.id === algorithmId);

  if (!algorithm) return null;

  return (
    <div className="algorithm-description">
      <h2>{algorithm.name}</h2>
      <p>{algorithm.description}</p>
      <h3>Key Features</h3>
      <ul>
        {algorithm.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </div>
  );
}
