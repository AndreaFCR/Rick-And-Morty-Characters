import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import getDataFromApi from "../services/Api";
import Header from "./Header";
import Footer from "./Footer";
import Filter from "./Filter";
import CharacterList from "./CharacterList";
import CharacterDetail from "./CharacterDetail";

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

  const renderCharacterDetail = (props) => {
    const routeCharacterId = props.match.params.characterId;
    const character = characterStore.find(
      (character) => character.id === routeCharacterId
    );
    if (character) {
      return (
        <CharacterDetail
          name={character.name}
          status={character.status}
          species={character.species}
          origin={character.origin}
          episodes={character.episodes}
          image={character.image}
          id={character.id}
        />
      );
    } else {
      return <p>Personaje no encontrado</p>;
    }
  };

  return (
    <div className="App">
      <Header />
      <main className="main">
        <Route exact path="/">
          <Filter
            handleChangeInput={handleChangeInput}
            nameFilter={nameFilter}
          />
          <CharacterList
            characterStore={filteredCharacterStore()}
            nameFilter={nameFilter}
          />
        </Route>
        <Switch>
          <Route
            path="/character/:characterId"
            render={renderCharacterDetail}
          />
        </Switch>
      </main>
      <Footer />
    </div>
  );
};

export default App;
