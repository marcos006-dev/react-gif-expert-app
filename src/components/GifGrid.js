// import PropTypes from 'prop-types'

import { useFetchGifs } from "../hooks/useFetchGifs";
import GifGridItem from "./GifGridItem";

const GifGrid = ({ categoria }) => {
  const { datos: imagenes, cargando } = useFetchGifs(categoria);

  return (
    <>
      <h3>{categoria}</h3>
      {cargando && "cargando"}

      <div className="card-grid">
        <ol>
          {imagenes.map((imagen) => (
            <GifGridItem key={imagen.id} {...imagen} />
          ))}
        </ol>
      </div>
    </>
  );
};

// GifGrid.propTypes = {

// }

export default GifGrid;
