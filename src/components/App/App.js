import React, { useContext } from "react";
import { BodyPokedex } from "../BodyPokedex/BodyPokedex";
import { SearchPokemon } from "../SearchPokemon/SearchPokemon";
import { ResultPokemon } from "../ResultPokemon/ResultPokemon";
import { GroupOfButtons } from "../ButtonsPokedex/ButtonsPokedex";
import { PokedexContext } from "../../context";
import { Modals } from "../Modals/Modals";

const App = () => {
  const { Buttons } = useContext(PokedexContext);
  const Button = Buttons(useContext(PokedexContext));

  return (
    <React.Fragment>
      <Modals />
      <SearchPokemon />
      <BodyPokedex>
        <ResultPokemon />
        <GroupOfButtons buttons={Button} />
      </BodyPokedex>
    </React.Fragment>
  );
};

export default App;
