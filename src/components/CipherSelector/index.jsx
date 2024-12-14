import PropTypes from "prop-types";
import { Select } from "@blueprintjs/select";
import { Button, MenuItem } from "@blueprintjs/core";
import { getAlgorithmsByCategory } from "../../utils/algorithmUtils";
import "./styles.css";

const CipherSelect = Select.ofType();

const CipherSelector = ({ selectedCipher, onCipherSelect, category }) => {
  const algorithms = getAlgorithmsByCategory(category);

  const renderCipher = (cipher, { handleClick, modifiers }) => {
    return (
      <MenuItem
        active={modifiers.active}
        key={cipher.id}
        onClick={handleClick}
        text={cipher.label}
      />
    );
  };

  return (
    <div className="cipher-selector">
      <CipherSelect
        items={algorithms}
        itemRenderer={renderCipher}
        onItemSelect={onCipherSelect}
        filterable={false}
      >
        <Button
          text={selectedCipher ? selectedCipher.label : "Select algorithm..."}
          rightIcon="double-caret-vertical"
          fill={true}
        />
      </CipherSelect>
    </div>
  );
};

CipherSelector.propTypes = {
  selectedCipher: PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string,
  }),
  onCipherSelect: PropTypes.func.isRequired,
  category: PropTypes.string.isRequired,
};

export default CipherSelector;
