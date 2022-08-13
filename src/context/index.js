import React from "react";
import { FindPokemonMatches } from './functions/SearchPokemon';

const PokedexContext = React.createContext();

const PokedexProvider = (prosp) => {
  const [searchValue, setSearchValue] = React.useState([]);
  
  return (
    <PokedexContext.Provider value={{
      searchValue,
      setSearchValue,
      FindPokemonMatches,
    }}>
      {prosp.children}
    </PokedexContext.Provider>
  );
};

export { PokedexContext, PokedexProvider };