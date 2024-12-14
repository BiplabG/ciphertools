import { useState } from "react";
import { FormGroup, InputGroup, Button, HTMLSelect } from "@blueprintjs/core";
import CryptoJS from "crypto-js";

const modes = ["CBC", "ECB", "CFB", "OFB", "CTR"];

export default function AES128() {
  const [plaintext, setPlaintext] = useState("");
  const [key, setKey] = useState("");
  const [ciphertext, setCiphertext] = useState("");
  const [mode, setMode] = useState("CBC");

  const encrypt = () => {
    try {
      const encrypted = CryptoJS.AES.encrypt(plaintext, key, {
        mode: CryptoJS.mode[mode],
      });
      setCiphertext(encrypted.toString());
    } catch (error) {
      console.error("Encryption failed:", error);
    }
  };

  const decrypt = () => {
    try {
      const decrypted = CryptoJS.AES.decrypt(ciphertext, key, {
        mode: CryptoJS.mode[mode],
      });
      setPlaintext(decrypted.toString(CryptoJS.enc.Utf8));
    } catch (error) {
      console.error("Decryption failed:", error);
    }
  };

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

      <FormGroup label="Key" labelFor="key">
        <InputGroup
          id="key"
          value={key}
          onChange={(e) => setKey(e.target.value)}
          fill={true}
        />
      </FormGroup>

      <FormGroup label="Mode of Operation" labelFor="mode">
        <HTMLSelect
          id="mode"
          value={mode}
          onChange={(e) => setMode(e.target.value)}
          options={modes}
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
}
