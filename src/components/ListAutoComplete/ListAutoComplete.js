import React from "react";
import './ListAutoComplete.css';
import { PokedexContext } from "../../context";

const ListAutoComplete = ({children}) => {
  return (
    <ul className="list-container">
      {children}
    </ul>
  );
};

const ItemAutoComplete = ({pokemons}) => {
  const { setSearchPokemon, setShowMatches } = React.useContext(PokedexContext);

  const Alertando = (name) => {
    setSearchPokemon(name);
    setShowMatches(false);
  };

  return pokemons.map(({name}) =>(
    <li className="item-autocomplete" key={name} onClick={() => Alertando(name)}>{name}</li>
  ));
}

export { ListAutoComplete, ItemAutoComplete };