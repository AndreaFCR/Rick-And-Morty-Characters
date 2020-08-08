import React from "react";
import CharacterCard from "./CharacterCard";

const CharacterList = (props) => {
  const renderCharacterCard = () => {
    // console.log(props.characterStore);
    return props.characterStore.map((character) => {
      // console.log("soy un personaje", character);
      return (
        <CharacterCard
          key={character.id}
          id={character.id}
          image={character.image}
          episodes={character.episodes}
          name={character.name}
          specie={character.specie}
          status={character.status}
          origin={character.origin}
        />
      );
    });
  };
  return <section className="card-list">{renderCharacterCard()}</section>;
};

export default CharacterList;
