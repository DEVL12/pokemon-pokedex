import React from "react";
import './ButtonsPokedex.css';

const ButtonPokedex = ({NameClass, Call_back, children}) => {
  return (
    <button className={ NameClass } type="button" onClick={ Call_back }>
    {children}
    </button>
  );
};

export { ButtonPokedex };