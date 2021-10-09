// import PropTypes from "prop-types";
import { useState } from "react";
import GifGrid from "./components/GifGrid";
import NuevaCategoria from "./components/NuevaCategoria";

const GifExpertApp = (props) => {
  const [categorias, setCategorias] = useState(["drangon ball"]);

  return (
    <>
      <h2>Desde Gif Expert App</h2>
      <NuevaCategoria setCategorias={setCategorias} />
      <hr />
      <ul>
        {categorias.map((categoria) => {
          return <GifGrid key={categoria} categoria={categoria} />;
        })}
      </ul>
    </>
  );
};

// GifExpertApp.propTypes = {};

export default GifExpertApp;
