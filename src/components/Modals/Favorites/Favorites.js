import React, { useContext } from "react";
import { ButtonPokedex } from "../../ButtonsPokedex/ButtonsPokedex";
import { PokedexContext } from "./../../../context/index";
import "./Favorites.css";

const Favorites = ({ Pokemon }) => {
  const { Buttons } = useContext(PokedexContext);
  const Button = Buttons(useContext(PokedexContext), [6]);

  return (
    <div className="container-favorites">
      <div className="content-favorites">
        <ButtonPokedex buttons={Button} />
        <ListFavoritesPokemons>
          <ItemFavoritesPokemons items={Pokemon} />
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
