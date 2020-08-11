import React from "react";

const FilterByOrigin = (props) => {
  const handleChangeChild = (ev) => {
    props.handleChangeInput({
      key: ev.target.name,
      value: ev.target.value,
      isChecked: ev.target.checked,
    });
  };

  const originElements = props.getOriginPlace.map((place, index) => {
    return (
      <label key={index}>
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
