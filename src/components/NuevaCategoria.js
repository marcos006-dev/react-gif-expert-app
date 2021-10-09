import PropTypes from "prop-types";

import { useState } from "react";

const NuevaCategoria = ({ setCategorias }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length <= 2) {
      return;
    }

    setCategorias((categorias) => [inputValue, ...categorias]);

    setInputValue("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        autoFocus
        value={inputValue}
        onChange={handleInputChange}
      />
    </form>
  );
};

NuevaCategoria.propTypes = {
  setCategorias: PropTypes.func.isRequired,
};

export default NuevaCategoria;
