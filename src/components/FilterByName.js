import React from "react";

const FilterByName = (props) => {
  const handleChangeInputChild = (ev) => {
    ev.preventDefault();
    props.handleChangeInput({
      // input value go up through lifting to handler mother as props.value
      key: ev.target.name,
      value: ev.target.value,
    });
  };
  return (
    <input
      type="text"
      placeholder="Busca tu personaje favorito..."
      className="filter__input"
      onChange={handleChangeInputChild}
      value={props.nameFilter}
      name="name"
    />
  );
};

export default FilterByName;
