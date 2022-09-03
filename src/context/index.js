import React, { useState } from "react";
import { AddFavoritesPokemonLocalStorage } from "./hooks/FavoritePokemon";
import {
  FindPokemonMatches,
  ResponseApiSearchPokemon,
  ChangePokemon,
} from "./hooks/SearchPokemon";

const PokedexContext = React.createContext();

const PokedexProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState([]);
  const [searchPokemon, setSearchPokemon] = useState("");
  const [showMatches, setShowMatches] = useState(false);
  const [pokedexData, setPokedexData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ show: false });
  const [showFavorites, setShowFavorites] = useState(false);

  // Guarda todos los match que se encuentran
  const Matches = (e) => {
    const Matchs = FindPokemonMatches(e.target.value);
    setSearchValue(Matchs);
    setSearchPokemon(e.target.value);

    Matchs.length === 0 || e.target.value === ""
      ? setShowMatches(false)
      : setShowMatches(true);
  };

  const formOnSubmitPokemon = async (e) => {
    e.preventDefault();
    const Pokemon = isNaN(parseInt(e.target[0].value))
      ? e.target[0].value.toLowerCase()
      : parseInt(e.target[0].value);

    setShowMatches(false);

    if (Pokemon === "" || Pokemon <= 0) {
      alert("No se que quieres que busque... estas bien?");
      return 0;
    }

    const data = { Pokemon, setLoading, setError, setPokedexData };
    await ResponseApiSearchPokemon(data);
  };

  return (
    <PokedexContext.Provider
      value={{
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
        ChangePokemon,
        loading,
        setLoading,
        error,
        setError,
        showFavorites, 
        setShowFavorites,
        AddFavoritesPokemonLocalStorage,
      }}
    >
      {children}
    </PokedexContext.Provider>
  );
};

export { PokedexContext, PokedexProvider };
