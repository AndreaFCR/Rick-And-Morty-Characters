import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/CharacterCard.scss";

const CharacterCard = (props) => {
  const renderSpecies = () => {
    const isHuman = props.species === "Human" ? "👤" : "👽";
    return isHuman;
  };

  return (
    <Link to={`/character/${props.id}`}>
      <article className="card">
        <div>
          <img
            className="card__image"
            src={props.image}
            alt={`Foto de ${props.name}`}
          ></img>
        </div>
        <div className="card__name">
          <h3>{props.name}</h3>
        </div>
        <div className="card__species">{renderSpecies()}</div>
      </article>
    </Link>
  );
};

export default CharacterCard;
