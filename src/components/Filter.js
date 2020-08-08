import React from "react";

const Filter = (props) => {
  const handleChangeInputChild = (ev) => {
    props.handleChangeInput({
      // input value go up through lifting to handler mother as props.value
      value: ev.target.value,
    });
  };
  return (
    <form className="filter">
      <label htmlFor="nameSearch"></label>
      <input
        type="search"
        name="nameSearch"
        placeholder="Busca tu personaje favorito..."
        className="input"
        onChange={handleChangeInputChild}
        value={props.nameFilter}
      />
    </form>
  );
};

export default Filter;
