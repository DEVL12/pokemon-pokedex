import React from "react";
import './ButtonsPokedex.css';

const ButtonPokedex = ({NameClass}) => {
  const mensaje = (msg) => {
    alert(msg);
  }

  return (
    <button className={ NameClass } type="button" onClick={() => mensaje('Funciono')} />
  );
};

export { ButtonPokedex };