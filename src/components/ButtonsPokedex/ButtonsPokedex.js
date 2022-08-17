import React from "react";
import './ButtonsPokedex.css';

const ButtonPokedex = ({NameClass, call_back}) => {
  return (
    <button className={ NameClass } type="button" onClick={ call_back } />
  );
};

export { ButtonPokedex };