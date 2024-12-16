import AES128 from "../components/ciphers/AES128";
import SHA256 from "../components/ciphers/SHA256";
import SHA3 from "../components/ciphers/SHA3";
import MD5 from "../components/ciphers/MD5";

const CIPHER_COMPONENTS = {
  aes128: AES128,
  sha256: SHA256,
  sha3: SHA3,
  md5: MD5,
};

export const getCipherComponent = (cipherId) => {
  const Component = CIPHER_COMPONENTS[cipherId];

  if (!Component) {
    return <div className="coming-soon">Coming soon...</div>;
  }

  return <Component />;
};
