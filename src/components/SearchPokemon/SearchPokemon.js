import React, { useContext } from "react";
import "./SearchPokemon.css";
import { PokedexContext } from "./../../context/index.js";
import {
  ListAutoComplete,
  ItemAutoComplete,
} from "../ListAutoComplete/ListAutoComplete";
import { ButtonPokedex } from "../ButtonsPokedex/ButtonsPokedex";
import { AiOutlineSearch } from "react-icons/ai";

const SearchPokemon = () => {
  const {
    searchValue,
    searchPokemon,
    showMatches,
    Matches,
    formOnSubmitPokemon,
    error,
  } = useContext(PokedexContext);

  return (
    <form
      className="form-pokemon"
      autoComplete="off"
      onSubmit={formOnSubmitPokemon}
    >
      <input
        className={`search-pokemon ${error.show && "search-error"}`}
        type="text"
        placeholder="Nombre o numero del pokemon"
        onChange={Matches}
        value={searchPokemon}
      />
      <ButtonPokedex
        buttons={[
          {
            class_name_button: "search-button",
            icon: <AiOutlineSearch />,
            Call_back_button: () => onsubmit,
          },
        ]}
      />
      {showMatches && (
        <ListAutoComplete>
          <ItemAutoComplete pokemons={searchValue} />
        </ListAutoComplete>
      )}
    </form>
  );
};

export { SearchPokemon };
