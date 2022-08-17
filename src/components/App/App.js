import React from "react";
import { BodyPokedex } from "../BodyPokedex/BodyPokedex";
import { SearchPokemon } from "../SearchPokemon/SearchPokemon";
import { ResultPokemon } from "../ResultPokemon/ResultPokemon";
import { ButtonPokedex } from "../ButtonsPokedex/ButtonsPokedex";
import { PokedexContext } from "../../context";


const App = () => {
  const {ChangePokemon} = React.useContext(PokedexContext);
  
  return (
    <React.Fragment>
      <SearchPokemon />
      <BodyPokedex>
        <ResultPokemon />
        <ButtonPokedex
          NameClass="btn-pokedex btn-lateral next-pokemon"
          call_back={() => ChangePokemon(1)}
        />
        <ButtonPokedex
          NameClass="btn-pokedex btn-lateral previous-pokemon"
          call_back={() => ChangePokemon(-1)}
        />
        <ButtonPokedex NameClass="btn-pokedex btn-vertical next-evolution-pokemon" />
        <ButtonPokedex NameClass="btn-pokedex btn-vertical previous-evolution-pokemon" />
        <ButtonPokedex NameClass="btn-pokedex add-favorite" />
        <ButtonPokedex NameClass="see-favorites" />
      </BodyPokedex>
    </React.Fragment>
  );
};

export default App;
