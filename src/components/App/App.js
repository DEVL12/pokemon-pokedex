import React, { useContext } from "react";
import { BodyPokedex } from "../BodyPokedex/BodyPokedex";
import { SearchPokemon } from "../SearchPokemon/SearchPokemon";
import { ResultPokemon } from "../ResultPokemon/ResultPokemon";
import { ButtonPokedex } from "../ButtonsPokedex/ButtonsPokedex";
import { PokedexContext } from "../../context";
import { Modals } from "../Modals/Modals";

const App = () => {
  const { Buttons } = useContext(PokedexContext);
  const Button = Buttons(useContext(PokedexContext), [0, 1, 2, 3, 4, 5]);

  return (
    <React.Fragment>
      <Modals />
      <SearchPokemon />
      <BodyPokedex>
        <ResultPokemon />
        <ButtonPokedex buttons={Button} />
      </BodyPokedex>
    </React.Fragment>
  );
};

export default App;
