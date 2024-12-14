import AES128 from "../components/ciphers/AES128";
import SHA256 from "../components/ciphers/SHA256";

const CIPHER_COMPONENTS = {
  aes128: AES128,
  sha256: SHA256,
};

export const getCipherComponent = (cipherId) => {
  const Component = CIPHER_COMPONENTS[cipherId];

  if (!Component) {
    return <div className="coming-soon">Coming soon...</div>;
  }

  return <Component />;
};
