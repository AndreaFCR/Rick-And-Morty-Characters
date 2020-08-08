import React from "react";
import { Link } from "react-router-dom";

const CharacterCard = (props) => {
  return (
    <Link to={`/character/${props.id}`}>
      <article className="div3-1">
        <img
          className="image"
          src={props.image}
          alt={`Foto de ${props.name}`}
        ></img>
        <div>{props.name}</div>
        <div>{props.specie}</div>
      </article>
    </Link>
  );
};

export default CharacterCard;
