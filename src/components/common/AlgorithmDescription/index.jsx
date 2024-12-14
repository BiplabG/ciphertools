import React from 'react';
import PropTypes from 'prop-types';
import { getAlgorithmByIdAndCategory } from '../../../utils/algorithmUtils';
import './styles.css';

const AlgorithmDescription = ({ algorithmId, category }) => {
  const algorithm = getAlgorithmByIdAndCategory(algorithmId, category);

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
          <pre><code>{algorithm.example}</code></pre>
        </>
      )}
    </div>
  );
};

AlgorithmDescription.propTypes = {
  algorithmId: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired
};

export default AlgorithmDescription;