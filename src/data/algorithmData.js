// Constants
export const ALGORITHM_CATEGORIES = {
  ENCRYPTION: "encryption",
  HASHING: "hashing",
  CLASSICAL: "classical",
};

// Algorithm data
const algorithmData = {
  [ALGORITHM_CATEGORIES.ENCRYPTION]: {
    title: "Encryption Algorithms",
    algorithms: [
      {
        id: "aes128",
        label: "AES-128",
        name: "AES-128",
        description:
          "Advanced Encryption Standard with 128-bit key size. A symmetric block cipher that provides strong security for sensitive data.",
        features: [
          "128-bit key size",
          "Block size: 128 bits",
          "Multiple modes of operation (CBC, ECB, CFB, OFB, CTR)",
          "Widely used in TLS/SSL protocols",
        ],
        example: "AES.encrypt('Hello World', 'SecretKey123', { mode: CBC })",
      },
      {
        id: "des",
        label: "DES",
        name: "DES",
        description: "Data Encryption Standard (Legacy)",
        features: [
          "56-bit key size",
          "Block size: 64 bits",
          "Multiple modes of operation",
          "Historical importance",
        ],
      },
    ],
  },
  [ALGORITHM_CATEGORIES.HASHING]: {
    title: "Hashing Functions",
    algorithms: [
      {
        id: "sha256",
        label: "SHA-256",
        name: "SHA-256",
        description:
          "Secure Hash Algorithm 2 with 256-bit output. A cryptographic hash function that generates a fixed-size output regardless of input size.",
        features: [
          "256-bit output size",
          "One-way function",
          "Collision resistant",
          "Widely used in digital signatures",
        ],
        example: "SHA256('Hello World')",
      },
      {
        id: "md5",
        label: "MD5",
        name: "MD5",
        description:
          "Message Digest Algorithm 5 (Not recommended for security)",
        features: [
          "128-bit output size",
          "Fast computation",
          "Not cryptographically secure",
          "Used for checksums",
        ],
      },
    ],
  },
  [ALGORITHM_CATEGORIES.CLASSICAL]: {
    title: "Classical Ciphers",
    algorithms: [
      {
        id: "caesar",
        label: "Caesar Cipher",
        name: "Caesar Cipher",
        description:
          "A simple substitution cipher that shifts letters in the alphabet by a fixed number of positions.",
        features: [
          "Shift cipher",
          "Historical importance",
          "Educational value",
          "Simple implementation",
        ],
        example: "shift('Hello World', 3) // Outputs: 'Khoor Zruog'",
      },
    ],
  },
};

export default algorithmData;
