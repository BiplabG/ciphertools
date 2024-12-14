import { Select } from "@blueprintjs/select";
import { Button, MenuItem } from "@blueprintjs/core";

const cipherOptions = [
  { id: "aes128", label: "AES-128", category: "Cipher" },
  { id: "sha256", label: "SHA-256", category: "Hash" },
  { id: "md5", label: "MD5", category: "Hash" },
  { id: "caesar", label: "Caesar Cipher", category: "Classical" },
];

const CipherSelect = Select.ofType();

export default function CipherSelector({ selectedCipher, onCipherSelect }) {
  const renderCipher = (cipher, { handleClick, modifiers }) => {
    return (
      <MenuItem
        active={modifiers.active}
        key={cipher.id}
        label={cipher.category}
        onClick={handleClick}
        text={cipher.label}
      />
    );
  };

  return (
    <CipherSelect
      items={cipherOptions}
      itemRenderer={renderCipher}
      onItemSelect={onCipherSelect}
      filterable={false}
    >
      <Button
        text={selectedCipher ? selectedCipher.label : "Select cipher..."}
        rightIcon="double-caret-vertical"
        fill={true}
      />
    </CipherSelect>
  );
}
