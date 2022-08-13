import React from "react";
import './ListAutoComplete.css';

const ListAutoComplete = ({children}) => {
  return (
    <ul className="list-container">
      {children}
    </ul>
  );
};

const ItemAutoComplete = () => {
  const Alertando = () => {
    alert('Has elejido a: xd');
  };

  return (
    <li className="item-autocomplete" onClick={() => Alertando()}>Hola</li>
  );
}

export { ListAutoComplete, ItemAutoComplete };