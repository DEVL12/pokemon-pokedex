import React, { useContext } from "react";
import { PokedexContext } from "./../../../context/index";
import './Favorites.css';

const Favorites = ({ children }) => {
  const { showFavorites, setShowFavorites } = useContext(PokedexContext);
  return (
    <div
      className="container-favorites"
      onClick={() => setShowFavorites(!showFavorites)}
    >
      <div className="content-favorites">{children}</div>
    </div>
  );
};

export { Favorites };
