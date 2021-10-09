import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (categoria) => {
  const [state, setState] = useState({
    datos: [],
    cargando: true,
  });

  useEffect(() => {
    getGifs(categoria).then((gifs) => {
      setState({
        datos: gifs,
        cargando: false,
      });
    });
  }, [categoria]);

  return state;
};
