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
          <h3>{props.name}</h3>
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
          {/* <div>{props.status}</div>
          <div>{props.specie}</div>
          <div>{props.origin}</div>
          <div>{props.episodes}</div> */}
        </div>
      </article>
    </section>
    // </Link>
  );
};

export default CharacterDetail;
