import React, { useEffect, useState } from "react";
import Header from "./Header";
import Filter from "./Filter";
import CharacterList from "./CharacterList";
import getDataFromApi from "../services/Api";

import "../stylesheets/App.scss";

const App = () => {
  // set states
  const [characterStore, setCharacterStore] = useState([]);
  const [nameFilter, setNameFilter] = useState("");

  // change character storage when value of nameFilter is changed.
  useEffect(() => {
    getDataFromApi().then((data) => {
      setCharacterStore(data);
    });
  }, [nameFilter]);

  // set new value for nameFilter which comes from input value (props.value)
  const handleChangeInput = (props) => {
    setNameFilter(props.value);
  };

  // filter data by name character using nameFilter in capital or lower case letters
  const filteredCharacterStore = () => {
    return characterStore.filter((character) => {
      return character.name.toUpperCase().includes(nameFilter.toUpperCase());
    });
  };

  return (
    <div className="App">
      <Header />
      <Filter handleChangeInput={handleChangeInput} nameFilter={nameFilter} />
      <CharacterList characterStore={filteredCharacterStore()} />
    </div>
  );
};

export default App;
