import React from "react";
import './ButtonsPokedex.css';

const ButtonPokedex = () => {
  const mensaje = (msg) => {
    alert(msg);
  }

  return ( // Luego los agregare con un ciclo
    <>
      <button className="btn-pokedex btn-lateral next-pokemon" type="button" onClick={() => mensaje('flecha derecha')}></button>
      <button className="btn-pokedex btn-lateral previous-pokemon" type="button" onClick={() => mensaje('flecha izquierda')}></button>
      <button className="btn-pokedex btn-vertical next-evolution-pokemon" type="button" onClick={() => mensaje('flecha arriba')}></button>
      <button className="btn-pokedex btn-vertical previous-evolution-pokemon" type="button" onClick={() => mensaje('flecha abajo')}></button>
      <button className="btn-pokedex add-favorite" type="button" onClick={() => mensaje('Boton circular')}></button>
      <button className="see-favorites" type="button" onClick={() => mensaje('Boton favoritos')}></button>
    </>
  );
};

export { ButtonPokedex };