import PropTypes from "prop-types";
import algorithmData from "../../data/algorithmData";
import "./AlgorithmDescription.css";

const AlgorithmDescription = ({ algorithmId, category }) => {
  const algorithm = algorithmData[category]?.algorithms.find(
    (algo) => algo.id === algorithmId
  );

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
      {algorithm.example && (
        <>
          <h3>Example Usage</h3>
          <pre>
            <code>{algorithm.example}</code>
          </pre>
        </>
      )}
    </div>
  );
};

AlgorithmDescription.propTypes = {
  algorithmId: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default AlgorithmDescription;
