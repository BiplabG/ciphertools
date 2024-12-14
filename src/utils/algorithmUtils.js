import algorithmData from '../data/algorithmData';

export const getAlgorithmByIdAndCategory = (algorithmId, category) => {
  return algorithmData[category]?.algorithms.find(algo => algo.id === algorithmId);
};

export const getAlgorithmsByCategory = (category) => {
  return algorithmData[category]?.algorithms || [];
};