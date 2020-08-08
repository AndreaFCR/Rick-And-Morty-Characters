import React from "react";
import { Link } from "react-router-dom";

const CharacterCard = (props) => {
  return (
    <Link to={`/character/${props.id}`}>
      <article className="card">
        <img
          className="card__image"
          src={props.image}
          alt={`Foto de ${props.name}`}
        ></img>
        <div>
          <h3>{props.name}</h3>
        </div>
        <div>{props.specie}</div>
      </article>
    </Link>
  );
};

export default CharacterCard;
