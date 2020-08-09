import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/CharacterDetail.scss";

const CharacterDetail = (props) => {
  const renderStatus = () => {
    if (props.status !== "unknown") {
      const isAlive = props.status === "Alive" ? "👍" : "👎";
      return <span aria-label="Dead or Alive">{isAlive}</span>;
    } else {
      return <span>{props.status}</span>;
    }
  };

  const renderSpecies = () => {
    const isHuman = props.species === "Human" ? "👤" : "👽";
    return <span aria-label="Human or Alien">{isHuman}</span>;
  };

  return (
    <section className="modal">
      <article className="modal__content">
        <div className="modal__content__title">
          <h2>{props.name}</h2>
        </div>
        <Link to="/">
          <span className="modal__content__icon">
            <i className="fa fa-times-circle" aria-hidden="true"></i>
          </span>
        </Link>

        <div className="modal__content__main">
          <div className="modal__content__main__image">
            <img src={props.image} alt={`Foto de ${props.name}`} />
          </div>
          <div className="modal__content__main__properties">
            <ul>
              <li>
                <span>Estado: </span>
                {renderStatus()}
              </li>
              <li>
                <span>Especie: </span>
                {renderSpecies()}
              </li>
              <li>
                <span>Origen: </span>
                {props.origin}
              </li>
              <li>
                <span>Nº de episodios: </span>
                {props.episodes}
              </li>
            </ul>
          </div>
        </div>
      </article>
    </section>
  );
};

export default CharacterDetail;
