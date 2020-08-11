import React from "react";

const FilterByOrigin = (props) => {
  const handleChangeChild = (ev) => {
    console.log(ev.currentTarget.value);
  };

  const originElements = props.getOriginPlace.map((place, index) => {
    return (
      <label key={index}>
        Origen:
        <input type="checkbox" value={place} onChange={handleChangeChild} />
        {place}
      </label>
    );
  });

  return <>{originElements}</>;
};

export default FilterByOrigin;
