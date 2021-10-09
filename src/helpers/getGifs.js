export const getGifs = async (categoria) => {
  const URL = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    categoria
  )}&limit=10&api_key=Og1AtYbhkLhjYkIY95TfyjmlvMj077hy`;

  const respuesta = await fetch(URL);
  const { data } = await respuesta.json();

  const gifs = data.map((gif) => {
    return {
      id: gif.id,
      title: gif.title,
      imagenurl: gif.images?.downsized_medium.url,
    };
  });
  return gifs;
};
