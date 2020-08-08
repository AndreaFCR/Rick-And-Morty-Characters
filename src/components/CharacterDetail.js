import React from "react";
import { Link } from "react-router-dom";

const CharacterDetail = (props) => {
  //   const handleModalContentClick = (ev) => {
  //     ev.preventDefault();
  //   };
  //   onClick={handleModalContentClick}
  return (
    // <Link to="/">
    <section className="modal">
      <article className="modal__content">
        <div className="modal__content__title">
          <h2>{props.name}</h2>
          <Link to="/">
            <span>X</span>
          </Link>
        </div>
        <div className="modal__content__main">
          <img
            className="modal__content__main__image"
            src={props.image}
            alt={`Foto de ${props.name}`}
          />
          <div>Estado: {props.status}</div>
          <div>Especie: {props.specie}</div>
          <div>Origen: {props.origin}</div>
          <div>Episodios: {props.episodes}</div>
        </div>
      </article>
    </section>
    // </Link>
  );
};

export default CharacterDetail;
