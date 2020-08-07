const getDataFromApi = (nameFilter) => {
  const ENDPOINT = `https://rickandmortyapi.com/api/character/?name=${nameFilter}`;
  return fetch(ENDPOINT)
    .then((response) => response.json())
    .then((data) => {
      // console.log(
      //   "datos del api que guardaremos, es un array, recorrer!",
      //   data.results,
      //   "--> lo que queremos usar",
      //   data.results[0]
      // );

      return data.results.map((character) => {
        // console.log("recojo datos de cada personaje", character.name);
        return {
          id: character.id,
          name: character.name,
          image: character.image,
          specie: character.species,
          status: character.status,
          origin: character.origin.name,
          episdodes: character.episode.length,
        };
      });
    });
};

export default getDataFromApi;
