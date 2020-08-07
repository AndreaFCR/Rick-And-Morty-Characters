const getDataFromApi = (nameFilter) => {
  const ENDPOINT = `https://rickandmortyapi.com/api/character/?name=${nameFilter}`;
  return fetch(ENDPOINT)
    .then((response) => response.json())
    .then((data) => {
      // console.log(
      //   "datos del api que guardaremos, es un array, recorrer!",
      //   data.results,
      //   "--> datos de cada personajes disponibles",
      //   data.results[0]
      // );

      return data.results.map((character) => {
        // console.log("datos que quiero guardar y cómo los quiero guardar", character.name);
        return {
          episodes: character.episode.length,
          id: character.id,
          image: character.image,
          name: character.name,
          origin: character.origin.name,
          specie: character.species,
          status: character.status,
        };
      });
    });
};

export default getDataFromApi;
