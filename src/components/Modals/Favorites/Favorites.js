import React, { useContext } from "react";
import { ButtonPokedex } from "../../ButtonsPokedex/ButtonsPokedex";
import { PokedexContext } from "./../../../context/index";
import { BsCardChecklist } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";
import { CgClose } from "react-icons/cg";
import "./Favorites.css";

const Favorites = () => {
  const { setShowFavorites } = useContext(PokedexContext);;

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
  const { favoritePokemon } = useContext(PokedexContext);

  return (
    <>
      <h4 className="title-favorite">Pokemones favoritos</h4>
      <ul className="list-container-favorites">
        <ItemFavoritesPokemons Pokemones={favoritePokemon} />
      </ul>
    </>
  );
};

const ItemFavoritesPokemons = ({ Pokemones }) => {
  const { DeleteFavoritePokemonLocalStorage, setFavoritePokemon} = useContext(PokedexContext);
  
  return (Pokemones.length === 0)
  ? <h1>Vacio</h1>
  : (
    Pokemones.map(({id, name , sprite}) => (
      <li key={id} className="pokemon-favorite">
        <div className="information-pokemon-favorite">
          <p>{id}</p>
          <p>{name}</p>
          <img
            className="img-pokemon-favorite"
            src={sprite}
            alt="img-pokemon"
          />
        </div>
        <div className="buttons-pokemon-favorite">
          <ButtonPokedex
            buttons={[
              {
                class_name_button: "button-favorite information-pokemon",
                icon: <BsCardChecklist />,
                Call_back_button: () => alert('Pronto funcionará uwu'),
              },
              {
                class_name_button: "button-favorite remove-pokemon",
                icon: <AiOutlineDelete />,
                Call_back_button: () => DeleteFavoritePokemonLocalStorage(setFavoritePokemon, id),
              },
            ]}
          />
        </div>
      </li>
    ))
  );
};

export { Favorites };
