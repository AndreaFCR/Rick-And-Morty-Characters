import React from "react";

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
        <label htmlFor="nameSearch"></label>
        <input
          type="search"
          name="nameSearch"
          placeholder="Busca tu personaje favorito..."
          className="filter__input"
          onChange={handleChangeInputChild}
          value={props.nameFilter}
        />
      </form>
    </section>
  );
};

export default Filter;
