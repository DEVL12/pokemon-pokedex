import React from "react";
import "./SearchPokemon.css";
import { PokedexContext } from'./../../context/index.js';
import { ListAutoComplete, ItemAutoComplete } from "../ListAutoComplete/ListAutoComplete";

const SearchPokemon = () => {
  const {
    searchValue,
    searchPokemon,
    showMatches,
    Matches,
    formOnSubmitPokemon,
  } = React.useContext(PokedexContext);

  return (
    <form className="form-pokemon" autoComplete="off" onSubmit={formOnSubmitPokemon}>
      <input
        className="search-pokemon search-success"
        type="text"
        placeholder="Nombre o numero del pokemon"
        onChange={Matches}
        value={searchPokemon}
      />
      <button className="search-button" type="submit">Buscar</button>
      {showMatches && (
        <ListAutoComplete>
          {searchValue.map((pokemon) => (
            <ItemAutoComplete name={pokemon.name} key={pokemon.name} />
          ))}
        </ListAutoComplete>
      )}
    </form>
  );
};

export { SearchPokemon };
