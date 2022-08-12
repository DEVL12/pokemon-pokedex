import React from "react";
import './ResultPokemon.css';

const ResultPokemon = () => {
  return(
    <div className="container-result">
      <span className="name-pokemon">LUCARIO</span>
      <span className="number-pokemon">448</span>
      <img className="img-pokemon" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/448.png" alt="img"/>
    </div>
  );
};

export { ResultPokemon };