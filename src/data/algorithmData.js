export default {
  "Encryption Algorithms": [
    {
      id: "aes128",
      name: "AES-128",
      description: "Advanced Encryption Standard with 128-bit key size. A symmetric block cipher that provides strong security for sensitive data.",
      features: [
        "128-bit key size",
        "Block size: 128 bits",
        "Multiple modes of operation (CBC, ECB, CFB, OFB, CTR)",
        "Widely used in TLS/SSL protocols"
      ],
      example: "AES.encrypt('Hello World', 'SecretKey123', { mode: CBC })"
    },
    // Add more encryption algorithms...
  ],
  "Hashing Functions": [
    {
      id: "sha256",
      name: "SHA-256",
      description: "Secure Hash Algorithm 2 with 256-bit output. A cryptographic hash function that generates a fixed-size output regardless of input size.",
      features: [
        "256-bit output size",
        "One-way function",
        "Collision resistant",
        "Widely used in digital signatures"
      ],
      example: "SHA256('Hello World')"
    },
    // Add more hash functions...
  ],
  "Classical Ciphers": [
    {
      id: "caesar",
      name: "Caesar Cipher",
      description: "A simple substitution cipher that shifts letters in the alphabet by a fixed number of positions.",
      features: [
        "Shift cipher",
        "Historical importance",
        "Educational value",
        "Simple implementation"
      ],
      example: "shift('Hello World', 3) // Outputs: 'Khoor Zruog'"
    },
    // Add more classical ciphers...
  ]
}