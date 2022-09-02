import React, { useContext } from "react";
import { ButtonPokedex } from "../../ButtonsPokedex/ButtonsPokedex";
import { PokedexContext } from "./../../../context/index";
import "./Favorites.css";

const Favorites = ({ Pokemones }) => {
  const { Buttons } = useContext(PokedexContext);
  const Button = Buttons(useContext(PokedexContext), [6]);


  return (
    <div className="container-favorites">
      <div className="content-favorites">
        <ButtonPokedex buttons={Button} />
        <ListFavoritesPokemons/>
      </div>
    </div>
  );
};

const ListFavoritesPokemons = () => {
   const Pokemon = [{ btn: 1 }, { btn: 2 }, { btn: 3 }, { btn: 4 },{ btn: 5 },{ btn: 6 } ,{ btn: 7 }, { btn: 8 }];

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
  const { Buttons } = useContext(PokedexContext);
  const Buttons_favorite = Buttons(useContext(PokedexContext), [8, 9]);

  return Pokemones.map((Pokemon) => (
    <li key={Pokemon.btn} className="pokemon-favorite">
      <div className="information-pokemon-favorite">
        <p>100000</p>
        <p>charizard-mega-x</p>
        <img className="img-pokemon-favorite" src="	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10196.png" alt="img-pokemon"/>
      </div>
      <div className="buttons-pokemon-favorite">
        <ButtonPokedex buttons={Buttons_favorite} />
      </div>
    </li>
  ));
};

export { Favorites };
