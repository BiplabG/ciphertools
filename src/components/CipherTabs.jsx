import "./CipherTabs.css";

const categories = [
  {
    id: "encryption",
    label: "Encryption",
    algorithms: [
      { id: "aes128", label: "AES-128" },
      { id: "des", label: "DES" },
      { id: "tripledes", label: "3DES" },
    ],
  },
  {
    id: "hashing",
    label: "Hashing",
    algorithms: [
      { id: "sha256", label: "SHA-256" },
      { id: "md5", label: "MD5" },
      { id: "sha1", label: "SHA-1" },
    ],
  },
  {
    id: "classical",
    label: "Classical",
    algorithms: [
      { id: "caesar", label: "Caesar" },
      { id: "vigenere", label: "Vigenère" },
      { id: "playfair", label: "Playfair" },
    ],
  },
];

export default function CipherTabs({
  activeCategory,
  onCategoryChange,
  selectedAlgorithm,
  onAlgorithmSelect,
}) {
  return (
    <div className="cipher-tabs">
      <div className="tabs-header">
        {categories.map((category) => (
          <button
            key={category.id}
            className={
              "tab-button" + (activeCategory === category.id ? " active" : "")
            }
            onClick={() => onCategoryChange(category.id)}
          >
            {category.label}
          </button>
        ))}
      </div>
      <div className="algorithms-grid">
        {categories
          .find((c) => c.id === activeCategory)
          ?.algorithms.map((algo) => (
            <button
              key={algo.id}
              className={
                "algorithm-card" +
                (selectedAlgorithm?.id === algo.id ? " selected" : "")
              }
              onClick={() => onAlgorithmSelect(algo)}
            >
              {algo.label}
            </button>
          ))}
      </div>
    </div>
  );
}
