import React, { useContext } from "react";
import { Loading } from "./Loading/Loading";
import { Alert } from "./Alert/Alert";
import {
  Favorites,
  ListFavoritesPokemons,
  ItemFavoritesPokemons,
} from "./Favorites/Favorites";
import { PokedexContext } from "../../context/index";

const Modals = () => {
  const { loading, error, showFavorites } = useContext(PokedexContext);
  return (
    <>
      {loading && <Loading />}
      {error.show && <Alert />}
      {showFavorites && <Favorites items={[{btn:1},{btn:2},{btn:3},{btn:4}]} /> }
    </>
  );
};

export { Modals };
