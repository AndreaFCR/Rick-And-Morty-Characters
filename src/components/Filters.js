import React from "react";
import FilterByOrigin from "./FilterByOrigin";
import PropTypes from "prop-types";
import "../stylesheets/Filter.scss";
import FilterByName from "./FilterByName";

const Filters = (props) => {
  return (
    <section className="filter">
      <form>
        <FilterByName
          handleChangeInput={props.handleChangeInput}
          nameFilter={props.nameFilter}
        />
        <label>
          Origen:
          <FilterByOrigin
            getOriginPlace={props.getOriginPlace}
            handleChangeInput={props.handleChangeInput}
          />
        </label>
      </form>
    </section>
  );
};

Filters.propTypes = {
  nameFilter: PropTypes.string,
};

export default Filters;
