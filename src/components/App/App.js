import React from "react";
import { BodyPokedex } from "../BodyPokedex/BodyPokedex";
import { SearchPokemon } from "../SearchPokemon/SearchPokemon";
import { ResultPokemon } from "../ResultPokemon/ResultPokemon";
import { ButtonPokedex } from "../ButtonsPokedex/ButtonsPokedex";
import { PokedexContext } from "../../context";
import { Loading } from "../Loading/Loading";
import { Alert } from "../Modals/Modals";
import { Buttons } from "../../helpers/ButtonsPokedex";


const App = () => {
  const {loading, error} = React.useContext(PokedexContext);
  const Button = Buttons();
  
  return (
    <React.Fragment>
      {loading && <Loading />}
      <SearchPokemon />
      <BodyPokedex>
        <ResultPokemon />
        {
          
          Button.map(({class_name_button, icon, Call_back_button}) => (
            <ButtonPokedex 
              key={class_name_button}
              NameClass={class_name_button} 
              Call_back={Call_back_button}
            >
              {icon}
            </ButtonPokedex>
          ))
        }
        {error.show && <Alert />}
      </BodyPokedex>
    </React.Fragment>
  );
};

export default App;
