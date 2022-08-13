import React from "react";
import { BodyPokedex } from "../BodyPokedex/BodyPokedex";
import { SearchPokemon } from "../SearchPokemon/SearchPokemon";
import { ResultPokemon } from "../ResultPokemon/ResultPokemon";
import { ButtonPokedex } from "../ButtonsPokedex/ButtonsPokedex";
import PokedexButtons from "./../../helpers/ButtonsPokedex.json";

const App = () => {
  return (
    <React.Fragment>
      <SearchPokemon />
      <BodyPokedex>
        <ResultPokemon />
        {PokedexButtons.map((button_data) => (
          <ButtonPokedex
            key={button_data["class-name-button"]}
            NameClass={button_data["class-name-button"]}
          />
        ))}
      </BodyPokedex>
    </React.Fragment>
  );
};

export default App;
