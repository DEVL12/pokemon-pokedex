import React from "react";
import { PokedexContext } from "../../context/index.js";
import Welcome from './../../assets/images/Welcome.gif';
import './ResultPokemon.css';


const ResultPokemon = () => {
  const {pokedexData} = React.useContext(PokedexContext);

  return (
    <div className="container-result">
      {pokedexData?.name && (
        <span className="name-pokemon"> {pokedexData.name}</span>
      )}
      {pokedexData?.id && (
        <span className="number-pokemon">{pokedexData.id}</span>
      )}
      <img
        className="img-pokemon"
        src={
          pokedexData?.sprites
            ? pokedexData?.sprites?.front_default
            : Welcome
        }
        alt="Pokemon"
      />
    </div>
  );
};

export { ResultPokemon };