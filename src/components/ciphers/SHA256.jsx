import { useState, useEffect } from "react";
import { FormGroup, TextArea } from "@blueprintjs/core";
import CryptoJS from "crypto-js";

export default function SHA256() {
  const [input, setInput] = useState("");
  const [hash, setHash] = useState("");

  useEffect(() => {
    if (input) {
      const hashValue = CryptoJS.SHA256(input).toString();
      setHash(hashValue);
    } else {
      setHash("");
    }
  }, [input]);

  return (
    <div className="cipher-form">
      <h2>SHA-256</h2>
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
