import { useState } from "react";
import { FormGroup, InputGroup, Button, HTMLSelect } from "@blueprintjs/core";
import CryptoJS from "crypto-js";
import "./styles.css";

const MODES = ["CBC", "CFB", "CTR", "OFB", "ECB"];
const PADDING_OPTIONS = [
  "Pkcs7",
  "AnsiX923",
  "Iso10126",
  "NoPadding",
  "ZeroPadding",
];

const AES128 = () => {
  const [plaintext, setPlaintext] = useState("");
  const [key, setKey] = useState("");
  const [ciphertext, setCiphertext] = useState("");
  const [iv, setIv] = useState("");
  const [mode, setMode] = useState("CBC");
  const [padding, setPadding] = useState("Pkcs7");

  const encrypt = () => {
    try {
      const options = {
        mode: CryptoJS.mode[mode],
        padding: CryptoJS.pad[padding],
      };

      if (mode !== "ECB") {
        options.iv = CryptoJS.enc.Hex.parse(iv);
      }

      const encrypted = CryptoJS.AES.encrypt(
        plaintext,
        CryptoJS.enc.Hex.parse(key),
        options
      );
      setCiphertext(encrypted.toString());
    } catch (error) {
      console.error("Encryption failed:", error);
    }
  };

  const decrypt = () => {
    try {
      const options = {
        mode: CryptoJS.mode[mode],
        padding: CryptoJS.pad[padding],
      };

      if (mode !== "ECB") {
        options.iv = CryptoJS.enc.Hex.parse(iv);
      }

      const decrypted = CryptoJS.AES.decrypt(
        ciphertext,
        CryptoJS.enc.Hex.parse(key),
        options
      );
      setPlaintext(decrypted.toString(CryptoJS.enc.Utf8));
    } catch (error) {
      console.error("Decryption failed:", error);
    }
  };

  const isIvRequired = mode !== "ECB";

  return (
    <div className="cipher-form">
      <FormGroup label="Plain Text" labelFor="plaintext">
        <InputGroup
          id="plaintext"
          value={plaintext}
          onChange={(e) => setPlaintext(e.target.value)}
          fill={true}
        />
      </FormGroup>

      <FormGroup label="Key (Hex)" labelFor="key">
        <InputGroup
          id="key"
          value={key}
          onChange={(e) => setKey(e.target.value)}
          placeholder="16 bytes (32 hex characters)"
          fill={true}
        />
      </FormGroup>

      <FormGroup
        label="Initialization Vector (IV) - Hex"
        labelFor="iv"
        disabled={!isIvRequired}
      >
        <InputGroup
          id="iv"
          value={iv}
          onChange={(e) => setIv(e.target.value)}
          placeholder="16 bytes (32 hex characters)"
          fill={true}
          disabled={!isIvRequired}
        />
      </FormGroup>

      <FormGroup label="Mode of Operation" labelFor="mode">
        <HTMLSelect
          id="mode"
          value={mode}
          onChange={(e) => setMode(e.target.value)}
          options={MODES}
          fill={true}
        />
      </FormGroup>

      <FormGroup label="Padding Scheme" labelFor="padding">
        <HTMLSelect
          id="padding"
          value={padding}
          onChange={(e) => setPadding(e.target.value)}
          options={PADDING_OPTIONS}
          fill={true}
        />
      </FormGroup>

      <FormGroup label="Cipher Text" labelFor="ciphertext">
        <InputGroup
          id="ciphertext"
          value={ciphertext}
          onChange={(e) => setCiphertext(e.target.value)}
          fill={true}
        />
      </FormGroup>

      <div className="button-group">
        <Button intent="primary" onClick={encrypt} icon="lock">
          Encrypt
        </Button>
        <Button intent="success" onClick={decrypt} icon="unlock">
          Decrypt
        </Button>
      </div>
    </div>
  );
};

export default AES128;
