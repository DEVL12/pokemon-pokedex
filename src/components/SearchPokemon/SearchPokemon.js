import React from "react";
import "./SearchPokemon.css";
import { PokedexContext } from'./../../context/index.js';
import { ListAutoComplete, ItemAutoComplete } from "../ListAutoComplete/ListAutoComplete";
import { AiOutlineSearch } from 'react-icons/ai';

const SearchPokemon = () => {
  const {
    searchValue,
    searchPokemon,
    showMatches,
    Matches,
    formOnSubmitPokemon,
    error,
  } = React.useContext(PokedexContext);

  return (
    <form className="form-pokemon" autoComplete="off" onSubmit={formOnSubmitPokemon}>
      <input
        className={`search-pokemon ${error.show && 'search-error'}`}
        type="text"
        placeholder="Nombre o numero del pokemon"
        onChange={Matches}
        value={searchPokemon}
      />
      <button className="search-button" type="submit"><AiOutlineSearch/></button>
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
