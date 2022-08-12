import React from "react";
import "./SearchPokemon.css";

const SearchPokemon = () => {
  return (
    <form className="form-pokemon" autoComplete="off">
      <input className="search-pokemon search-success" type="text" placeholder="Nombre o numero del pokemon"></input>
      <button className="search-button" type="button"> Buscar </button>
    </form>
  );
};

export { SearchPokemon };
