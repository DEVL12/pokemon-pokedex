import React from "react";
import { BodyPokedex } from "../BodyPokedex/BodyPokedex";
import { SearchPokemon } from "../SearchPokemon/SearchPokemon";
import { ResultPokemon } from "../ResultPokemon/ResultPokemon";
import { ButtonPokedex } from "../ButtonsPokedex/ButtonsPokedex";

const App = () => {
  return (
    <React.Fragment>
      <SearchPokemon />
      <BodyPokedex > 
        <ResultPokemon />
        <ButtonPokedex />
      </BodyPokedex>
    </React.Fragment>
  );
}

export default App;
