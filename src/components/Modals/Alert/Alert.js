import React, { useContext } from "react";
import { PokedexContext } from "./../../../context/index";
import './Alert.css';

const Alert = () => {
  const { error, setError } = useContext(PokedexContext);
  return (
    <div className="alert-modal" onClick={() => setError({ show: false })}>
      <h4>{error.title}</h4>
      <p>{error.msg}</p>
    </div>
  );
};

export { Alert };
