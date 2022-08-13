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

const ItemAutoComplete = ({name}) => {
  const { setSearchPokemon, setShowMatches } = React.useContext(PokedexContext);

  const Alertando = () => {
    setSearchPokemon(name);
    setShowMatches(false);
  };

  return (
    <li className="item-autocomplete" onClick={() => Alertando(name)}>{name}</li>
  );
}

export { ListAutoComplete, ItemAutoComplete };