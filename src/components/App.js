import React, { useEffect, useState } from "react";
import Header from "./Header";
import Filter from "./Filter";
import CharacterList from "./CharacterList";
import getDataFromApi from "../services/Api";

import "../stylesheets/App.scss";

const App = () => {
  // states
  const [characterStore, setCharacterStore] = useState([]);
  const [nameFilter, setNameFilter] = useState("");

  useEffect(() => {
    // change character storage when value of nameFilter is changed.
    getDataFromApi(nameFilter).then((data) => {
      setCharacterStore(data);
    });
  }, [nameFilter]);

  const handleChangeInput = (props) => {
    // new value for nameFilter comes from input value (props.value)
    setNameFilter(props.value);
  };

  return (
    <div className="App">
      <Header />
      <Filter handleChangeInput={handleChangeInput} nameFilter={nameFilter} />
      <CharacterList characterStore={characterStore} />
    </div>
  );
};

export default App;
