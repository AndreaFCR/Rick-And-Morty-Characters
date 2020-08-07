import React from "react";

const Filter = (props) => {
  const handleChangeInputChild = (ev) => {
    props.handleChangeInput({
      // input value go up through lifting to handler mother as props.value
      value: ev.target.value,
    });
  };
  return (
    <form className="div2">
      <label htmlFor="nameSearch">Busca por personaje</label>
      <input
        type="text"
        name="nameSearch"
        placeholder="Ej: rick..."
        onChange={handleChangeInputChild}
        value={props.nameFilter}
      />
    </form>
  );
};

export default Filter;
