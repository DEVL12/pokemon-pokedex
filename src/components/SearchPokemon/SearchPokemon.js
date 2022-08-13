import React from "react";
import "./SearchPokemon.css";
import NamePokemon from './../../helpers/NamePokemon.json';

const SearchPokemon = () => {
  const [searchValue, setSearchValue] = React.useState([]);

  const FindPokemonMatches = (e) => {
    const Matchs = NamePokemon.filter(data => {
      const valueInput = e.target.value.toLowerCase();
      const Pokemon = data.name.toLowerCase();
      return Pokemon.includes(valueInput);
    });

    setSearchValue(Matchs);
    console.log(searchValue);
  };

  return (
    <form className="form-pokemon" autoComplete="off">
      <input
        className="search-pokemon search-success"
        type="text"
        placeholder="Nombre o numero del pokemon"
        onChange={FindPokemonMatches}
      />
      <button className="search-button" type="button">Buscar</button>
    </form>
  );
};

export { SearchPokemon };
