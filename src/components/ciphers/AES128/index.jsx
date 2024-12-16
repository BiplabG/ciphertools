import { useState } from "react";
import {
  FormGroup,
  InputGroup,
  Button,
  HTMLSelect,
  TextArea,
} from "@blueprintjs/core";
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
const INPUT_FORMATS = ["UTF-8 (plain text)", "hex (binary)"];
const OUTPUT_FORMATS = ["Base64", "hex (binary)"];

const AES128 = () => {
  const [plaintext, setPlaintext] = useState("");
  const [key, setKey] = useState("");
  const [ciphertext, setCiphertext] = useState("");
  const [iv, setIv] = useState("");
  const [mode, setMode] = useState("CBC");
  const [padding, setPadding] = useState("Pkcs7");
  const [inputFormat, setInputFormat] = useState("UTF-8 (plain text)");
  const [outputFormat, setOutputFormat] = useState("Base64");

  const formatToCryptoJS = {
    "UTF-8 (plain text)": CryptoJS.enc.Utf8,
    "hex (binary)": CryptoJS.enc.Hex,
    Base64: CryptoJS.enc.Base64,
  };

  const encrypt = () => {
    try {
      const options = {
        mode: CryptoJS.mode[mode],
        padding: CryptoJS.pad[padding],
      };

      if (mode !== "ECB") {
        options.iv = formatToCryptoJS["hex (binary)"].parse(iv);
      }

      const keyParsed = formatToCryptoJS["hex (binary)"].parse(key);
      const plaintextParsed = formatToCryptoJS[inputFormat].parse(plaintext);

      const encrypted = CryptoJS.AES.encrypt(
        plaintextParsed,
        keyParsed,
        options
      );

      setCiphertext(
        encrypted.ciphertext.toString(formatToCryptoJS[outputFormat])
      );
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
        options.iv = formatToCryptoJS["hex (binary)"].parse(iv);
      }

      const keyParsed = formatToCryptoJS["hex (binary)"].parse(key);
      const ciphertextParsed =
        formatToCryptoJS["hex (binary)"].parse(ciphertext);

      const decrypted = CryptoJS.AES.decrypt(
        { ciphertext: ciphertextParsed },
        keyParsed,
        options
      );

      setPlaintext(decrypted.toString(formatToCryptoJS[inputFormat]));
    } catch (error) {
      console.error("Decryption failed:", error);
    }
  };

  const isIvRequired = mode !== "ECB";

  return (
    <div className="cipher-form">
      <h2>AES-128</h2>

      <div className="two-column-group">
        <FormGroup
          label="Mode of Operation"
          labelFor="mode"
          className="width-hundred-percent"
        >
          <HTMLSelect
            id="mode"
            value={mode}
            onChange={(e) => setMode(e.target.value)}
            options={MODES}
            fill={true}
          />
        </FormGroup>

        <FormGroup
          label="Padding Scheme"
          labelFor="padding"
          className="width-hundred-percent"
        >
          <HTMLSelect
            id="padding"
            value={padding}
            onChange={(e) => setPadding(e.target.value)}
            options={PADDING_OPTIONS}
            fill={true}
          />
        </FormGroup>
      </div>

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

      <div className="two-column-group">
        <FormGroup
          label="Input Format"
          labelFor="input-format"
          className="width-hundred-percent"
        >
          <HTMLSelect
            id="input-format"
            value={inputFormat}
            onChange={(e) => setInputFormat(e.target.value)}
            options={INPUT_FORMATS}
            fill={true}
          />
        </FormGroup>

        <FormGroup
          label="Output Format"
          labelFor="output-format"
          className="width-hundred-percent"
        >
          <HTMLSelect
            id="output-format"
            value={outputFormat}
            onChange={(e) => setOutputFormat(e.target.value)}
            options={OUTPUT_FORMATS}
            fill={true}
          />
        </FormGroup>
      </div>

      <div className="two-column-group">
        <FormGroup
          label="Plain Text"
          labelFor="plaintext"
          className="width-hundred-percent"
        >
          <TextArea
            id="plaintext"
            value={plaintext}
            onChange={(e) => setPlaintext(e.target.value)}
            fill={true}
          />
        </FormGroup>

        <FormGroup
          label="Cipher Text"
          labelFor="ciphertext"
          className="width-hundred-percent"
        >
          <TextArea
            id="ciphertext"
            value={ciphertext}
            onChange={(e) => setCiphertext(e.target.value)}
            fill={true}
          />
        </FormGroup>
      </div>

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
