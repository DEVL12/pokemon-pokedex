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

  const ResponseApiSearchPokemon = async (Pokemon) => {
    const data_pokemon = await APISeachPokemon(Pokemon);
    
    if (data_pokemon === false)
      return false;

    setPokedexData({
      "id": data_pokemon.id, 
      "name": data_pokemon.name, 
      "sprites": data_pokemon.sprites
    });
  }

  const formOnSubmitPokemon = async (e) => {
    e.preventDefault();
    const Pokemon = ( isNaN(parseInt(e.target[0].value)) )
      ? e.target[0].value.toLowerCase()
      : parseInt(e.target[0].value);
    
    setShowMatches(false);

    if (Pokemon === "" || Pokemon <= 0) {
      alert("No se que quieres que busque... estas bien?");
      return 0;
    }
    
    await ResponseApiSearchPokemon(Pokemon);
  };

  const ChangePokemon = async (valor) => {
    if (pokedexData) {
      const idPokemon = pokedexData.id + valor;

      if ((idPokemon) === 0) {
        console.log('No se puede bajar mas');
        return 0;
      } else if((idPokemon === 10250)) {
        console.log('No se puede subir mas');
        return 0;
      }

      await ResponseApiSearchPokemon(idPokemon);
    }
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
      pokedexData, 
      setPokedexData,
      ChangePokemon
    }}>
      {props.children}
    </PokedexContext.Provider>
  );
};

export { PokedexContext, PokedexProvider };