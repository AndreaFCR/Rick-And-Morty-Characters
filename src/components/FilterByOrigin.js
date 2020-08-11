import React from "react";

const FilterByOrigin = (props) => {
  const handleChangeChild = (ev) => {
    props.handleChangeInput({
      key: ev.target.name,
      value: ev.target.value,
    });
  };

  const originElements = props.getOriginPlace.map((place, index) => {
    return (
      <label key={index}>
        Origen:
        <input
          type="checkbox"
          value={place}
          onChange={handleChangeChild}
          name="location"
        />
        {place}
      </label>
    );
  });

  return <>{originElements}</>;
};

export default FilterByOrigin;
