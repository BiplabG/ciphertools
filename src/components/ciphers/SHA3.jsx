import { useState, useEffect } from "react";
import { FormGroup, TextArea, HTMLSelect } from "@blueprintjs/core";
import CryptoJS from "crypto-js";

const HASH_LENGTHS = ["224", "256", "384", "512"];

export default function SHA3() {
  const [input, setInput] = useState("");
  const [hash, setHash] = useState("");
  const [hashLength, setHashLength] = useState("512");

  useEffect(() => {
    if (input) {
      const hashValue = CryptoJS.SHA3(input, {
        outputLength: Number(hashLength),
      }).toString();
      setHash(hashValue);
    } else {
      setHash("");
    }
  }, [input, hashLength]);

  return (
    <div className="cipher-form">
      <h2>SHA3 (Keccak[c=2d])</h2>
      <FormGroup label="Output hash length" labelFor="hash-length">
        <HTMLSelect
          id="hash-length"
          value={hashLength}
          onChange={(e) => setHashLength(e.target.value)}
          options={HASH_LENGTHS}
          fill={true}
        />
      </FormGroup>
      <FormGroup label="Input Text" labelFor="input">
        <TextArea
          id="input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          fill={true}
        />
      </FormGroup>

      <FormGroup label="Hash" labelFor="hash">
        <TextArea id="hash" value={hash} readOnly fill={true} />
      </FormGroup>
    </div>
  );
}
