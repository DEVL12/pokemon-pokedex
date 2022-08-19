import React from "react";
import { PokedexContext } from "../../context";
import './Modals.css';

const Alert = () => {
  const {error, setError} = React.useContext(PokedexContext);
  return (
    <div className="alert-modal" onClick={() => setError({ show: false})}> 
      <h4>{error.title}</h4>
      <p>{error.msg}</p>
    </div>
  );
}

export { Alert };
