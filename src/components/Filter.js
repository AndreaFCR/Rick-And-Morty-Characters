import React from "react";
import PropTypes from "prop-types";
import "../stylesheets/Filter.scss";

const Filter = (props) => {
  const handleChangeInputChild = (ev) => {
    ev.preventDefault();
    props.handleChangeInput({
      // input value go up through lifting to handler mother as props.value
      value: ev.target.value,
    });
  };
  return (
    <section className="filter">
      <form>
        <input
          type="text"
          placeholder="Busca tu personaje favorito..."
          className="filter__input"
          onChange={handleChangeInputChild}
          value={props.nameFilter}
        />
      </form>
    </section>
  );
};

Filter.propTypes = {
  nameFilter: PropTypes.string,
};

export default Filter;
