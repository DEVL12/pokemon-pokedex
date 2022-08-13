import React from "react";
import "./SearchPokemon.css";
import { PokedexContext } from'./../../context/index.js';
import { ListAutoComplete, ItemAutoComplete } from "../ListAutoComplete/ListAutoComplete";


const SearchPokemon = () => { 
  const { FindPokemonMatches, setSearchValue } = React.useContext(PokedexContext);

  const Matches = (e) => {
    const Matchs = FindPokemonMatches(e);
    setSearchValue(Matchs);
  }

  return (
    <form className="form-pokemon" autoComplete="off">
      <input
        className="search-pokemon search-success"
        type="text"
        placeholder="Nombre o numero del pokemon"
        onChange={Matches}
      />
      <button className="search-button" type="button">Buscar</button>
      <ListAutoComplete > 
        <ItemAutoComplete />
        <ItemAutoComplete />
        <ItemAutoComplete />
      </ListAutoComplete>
    </form>
  );
};

export { SearchPokemon };
