import React from "react";
import { FindPokemonMatches, APISeachPokemon } from './functions/SearchPokemon';

const PokedexContext = React.createContext();

const PokedexProvider = (props) => {
  const [searchValue, setSearchValue] = React.useState([]);
  const [searchPokemon, setSearchPokemon] = React.useState('');
  const [showMatches, setShowMatches] = React.useState(false);
  const [pokedexData, setPokedexData] = React.useState({});

  // Guarda todos los match que se encuentran
  const Matches = (e) => {
    const Matchs = FindPokemonMatches(e.target.value);
    setSearchValue(Matchs);
    setSearchPokemon(e.target.value);

    (Matchs.length === 0 || e.target.value === "")
      ? setShowMatches(false)
      : setShowMatches(true);
  };

  const formOnSubmitPokemon = async (e) => {
    e.preventDefault();
    const Pokemon = ( isNaN(parseInt(e.target[0].value)) )
      ? e.target[0].value.toLowerCase()
      : parseInt(e.target[0].value);
    
    setShowMatches(false);

    if (Pokemon === "" || Pokemon <= 0)
      alert("No se que quieres que busque... estas bien?");
    
    const data_pokemon = await APISeachPokemon(Pokemon);
    
    if (data_pokemon === false)
      return false;

      console.log(data_pokemon);

    setPokedexData(data_pokemon);
  };
  
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
      pokedexData, 
      setPokedexData
    }}>
      {props.children}
    </PokedexContext.Provider>
  );
};

export { PokedexContext, PokedexProvider };