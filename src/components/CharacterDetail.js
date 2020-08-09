import React from "react";
import { Link } from "react-router-dom";

const CharacterDetail = (props) => {
  const handleModalContentClick = (ev) => {
    ev.preventDefault();
  };
  return (
    <Link to="/">
      <section className="modal">
        <article className="modal__content" onClick={handleModalContentClick}>
          <div className="modal__content__title">
            <h2>{props.name}</h2>
          </div>
          <Link to="/">
            <span className="modal__content__icon">
              <i class="fa fa-times-circle" aria-hidden="true"></i>
            </span>
          </Link>

          <div className="modal__content__main">
            <div className="modal__content__main__image">
              <img src={props.image} alt={`Foto de ${props.name}`} />
            </div>
            <div className="modal__content__main__properties">
              <div>Estado: {props.status}</div>
              <div>Especie: {props.species}</div>
              <div>Origen: {props.origin}</div>
              <div>Episodios: {props.episodes}</div>
            </div>
          </div>
        </article>
      </section>
    </Link>
  );
};

export default CharacterDetail;
