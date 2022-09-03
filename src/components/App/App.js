import React, { useContext } from "react";
import { BodyPokedex } from "../BodyPokedex/BodyPokedex";
import { SearchPokemon } from "../SearchPokemon/SearchPokemon";
import { ResultPokemon } from "../ResultPokemon/ResultPokemon";
import { ButtonPokedex } from "../ButtonsPokedex/ButtonsPokedex";
import { PokedexContext } from "../../context";
import { Modals } from "../Modals/Modals";
import {
  BsArrowRight,
  BsArrowLeft,
  BsArrowUp,
  BsArrowDown,
} from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";

const App = () => {
  const Context = useContext(PokedexContext);
  const {
    ChangePokemon,
    AddFavoritesPokemonLocalStorage,
    setShowFavorites,
    pokedexData,
  } = Context;

  return (
    <>
      <Modals />
      <SearchPokemon />
      <BodyPokedex>
        <ResultPokemon />
        <ButtonPokedex
          buttons={[
            {
              class_name_button: "btn-pokedex btn-lateral next-pokemon",
              icon: <BsArrowRight />,
              Call_back_button: () => ChangePokemon(1, Context),
            },
            {
              class_name_button: "btn-pokedex btn-lateral previous-pokemon",
              icon: <BsArrowLeft />,
              Call_back_button: () => ChangePokemon(-1, Context),
            },
            {
              class_name_button: "btn-pokedex btn-vertical next-evolution-pokemon",
              icon: <BsArrowUp />,
              Call_back_button: () => alert("Boton para arriba"),
            },
            {
              class_name_button: "btn-pokedex btn-vertical previous-evolution-pokemon",
              icon: <BsArrowDown />,
              Call_back_button: () => alert("Boton para abajo"),
            },
            {
              class_name_button: "btn-pokedex add-favorite",
              icon: <AiFillHeart />,
              Call_back_button: () => AddFavoritesPokemonLocalStorage(pokedexData),
            },
            {
              class_name_button: "see-favorites",
              Call_back_button: () => setShowFavorites(true),
            },
          ]}
        />
      </BodyPokedex>
    </>
  );
};

export default App;
