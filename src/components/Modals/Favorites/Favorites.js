import React, { useContext } from "react";
import { ButtonPokedex } from "../../ButtonsPokedex/ButtonsPokedex";
import { PokedexContext } from "./../../../context/index";
import { BsCardChecklist } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";
import { CgClose } from "react-icons/cg";
import "./Favorites.css";

const Favorites = ({ Pokemones }) => {
  const { setShowFavorites } = useContext(PokedexContext);

  return (
    <div className="container-favorites">
      <div className="content-favorites">
        <ButtonPokedex
          buttons={[{
            class_name_button: "close-favorite",
            icon: <CgClose />,
            Call_back_button: () => setShowFavorites(false),
          }]}
        />
        <ListFavoritesPokemons />
      </div>
    </div>
  );
};

const ListFavoritesPokemons = () => {
  const Pokemon = [{ btn: 1 }, { btn: 2 }];

  return (
    <>
      <h4 className="title-favorite">Pokemones favoritos</h4>
      <ul className="list-container-favorites">
        <ItemFavoritesPokemons Pokemones={Pokemon} />
      </ul>
    </>
  );
};

const ItemFavoritesPokemons = ({ Pokemones }) => {
  return Pokemones.map((Pokemon) => (
    <li key={Pokemon.btn} className="pokemon-favorite">
      <div className="information-pokemon-favorite">
        <p>100000</p>
        <p>charizard-mega-x</p>
        <img
          className="img-pokemon-favorite"
          src="	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10196.png"
          alt="img-pokemon"
        />
      </div>
      <div className="buttons-pokemon-favorite">
        <ButtonPokedex
          buttons={[
            {
              class_name_button: "button-favorite information-pokemon",
              icon: <BsCardChecklist />,
              Call_back_button: () => alert(Pokemon.btn),
            },
            {
              class_name_button: "button-favorite remove-pokemon",
              icon: <AiOutlineDelete />,
              Call_back_button: () => alert(Pokemon.btn),
            },
          ]}
        />
      </div>
    </li>
  ));
};

export { Favorites };
