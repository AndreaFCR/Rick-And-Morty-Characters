import React from "react";
import CharacterCard from "./CharacterCard";
import PropTypes from "prop-types";
import "../stylesheets/CharacterList.scss";

const CharacterList = (props) => {
  const renderCharacterCard = () => {
    // error message if characterStore is empty
    if (props.characterStore.length === 0) {
      return (
        <div className="error-message">
          <p>{`No hay ningún personaje que coincida con la palabra "${props.nameFilter}"`}</p>
        </div>
      );
    } else {
      return props.characterStore.map((character) => {
        return (
          <CharacterCard
            key={character.id}
            id={character.id}
            image={character.image}
            episodes={character.episodes}
            name={character.name}
            species={character.species}
            status={character.status}
            origin={character.origin}
          />
        );
      });
    }
  };
  return <section className="card-list">{renderCharacterCard()}</section>;
};

CharacterList.propTypes = {
  nameFilter: PropTypes.string,
  characterStore: PropTypes.array,
};

export default CharacterList;
