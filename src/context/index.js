import React from "react";
import { FindPokemonMatches } from './functions/SearchPokemon';

const PokedexContext = React.createContext();

const PokedexProvider = (props) => {
  const [searchValue, setSearchValue] = React.useState([]);
  const [searchPokemon, setSearchPokemon] = React.useState('');
  const [showMatches, setShowMatches] = React.useState(false);

  // Guarda todos los match que se encuentran
  const Matches = (e) => {
    const Matchs = FindPokemonMatches(e.target.value);
    setSearchValue(Matchs);
    setSearchPokemon(e.target.value);

    (Matchs.length === 0 || e.target.value === "")
      ? setShowMatches(false)
      : setShowMatches(true);
  };

  const formOnSubmitPokemon = (e) => {
    e.preventDefault();
    setShowMatches(false);

    (e.target[0].value !== "")
     ? alert(`Dentro de poco buscaremos a ${searchPokemon} ;)`)
     : alert('No se que quieres que busque... estas bien?');
  }
  
  return (
    <PokedexContext.Provider value={{
      searchValue,
      setSearchValue,
      FindPokemonMatches,
      searchPokemon,
      setSearchPokemon,
      showMatches,
      setShowMatches,
      Matches,
      formOnSubmitPokemon,
    }}>
      {props.children}
    </PokedexContext.Provider>
  );
};

export { PokedexContext, PokedexProvider };