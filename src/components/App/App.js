import React from "react";
import { BodyPokedex } from "../BodyPokedex/BodyPokedex";
import { SearchPokemon } from "../SearchPokemon/SearchPokemon";
import { ResultPokemon } from "../ResultPokemon/ResultPokemon";

const App = () => {
  return (
    <React.Fragment>
      <SearchPokemon />
      <BodyPokedex > 
        <ResultPokemon />
      </BodyPokedex>
    </React.Fragment>
  );
}

export default App;
