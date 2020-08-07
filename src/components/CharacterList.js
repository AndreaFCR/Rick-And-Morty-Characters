import React from "react";
import CharacterCard from "./CharacterCard";

const CharacterList = (props) => {
  const renderCharacterCard = () => {
    console.log("hola");
  };
  return (
    <div className="div3">
      {renderCharacterCard()}
      <CharacterCard />
    </div>
  );
};

export default CharacterList;
