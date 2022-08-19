import React from "react";
import './ButtonsPokedex.css';

const ButtonPokedex = ({NameClass, call_back, children}) => {
  return (
    <button className={ NameClass } type="button" onClick={ call_back } >
    {children}
    </button>
  );
};

export { ButtonPokedex };