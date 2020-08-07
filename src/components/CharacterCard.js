import React from "react";

const CharacterCard = (props) => {
  return (
    <article className="div3-1">
      <img className="image" src={props.image} alt="Foto del personaje"></img>
      <div>{props.name}</div>
      <div>{props.specie}</div>
    </article>
  );
};

export default CharacterCard;
