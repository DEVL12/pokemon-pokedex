import React from "react";
import './BodyPokedex.css';


const BodyPokedex = ({ children }) => {
  return(
    <div className="container-pokedex">
      { children }
    </div>
  );
};

export { BodyPokedex };