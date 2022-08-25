import React, { useContext } from "react";
import { ButtonPokedex } from "../../ButtonsPokedex/ButtonsPokedex";
import { PokedexContext } from "./../../../context/index";
import { CgClose } from "react-icons/cg";
import "./Favorites.css";

const Favorites = ({ items }) => {
  const { showFavorites, setShowFavorites } = useContext(PokedexContext);
  return (
    <div className="container-favorites">
      <div className="content-favorites">
        <ButtonPokedex
          NameClass="close-favorite"
          Call_back={() => setShowFavorites(!showFavorites)}
        >
          <CgClose />
        </ButtonPokedex>
        <ListFavoritesPokemons>
          <ItemFavoritesPokemons items={items} />
        </ListFavoritesPokemons>
      </div>
    </div>
  );
};

const ListFavoritesPokemons = ({ children }) => {
  return (
    <>
      <h4 className="title-favorite">Pokemones favoritos</h4>
      <ul className="list-container-favorites">{children}</ul>
    </>
  );
};

const ItemFavoritesPokemons = ({ items }) => {
  return items.map((item) => <li key={item.btn}>-Pokemon-</li>);
};

export { Favorites };
