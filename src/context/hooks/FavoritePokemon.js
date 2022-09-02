import React, { useState } from "react";

const AddFavoritesPokemonLocalStorage = (Pokemon) => {
  // const [favorites, set_favorites] = useState({});
  if (Object.values(Pokemon).length === 0) return 0;

  const AddToLocalStorage = ({ id, name, sprites }) => {
    const data = IsListEmpty()
      ? [{ id: id, name: name, sprite: sprites.front_default }]
      : [
          ...JSON.parse(GetListOfPokemons()),
          { id: id, name: name, sprite: sprites.front_default },
        ];

    localStorage.setItem("Favorites_pokemons", JSON.stringify(data));
  };

  const ExistInTheList = (Pokemon) => {
    const List_Pokemons = JSON.parse(GetListOfPokemons());
    return List_Pokemons.some(({ id }) => id === Pokemon.id);
  };

  const IsListEmpty = () => (!GetListOfPokemons() ? true : false);

  const GetListOfPokemons = () => localStorage.getItem("Favorites_pokemons");

  IsListEmpty()
    ? AddToLocalStorage(Pokemon)
    : !ExistInTheList(Pokemon) && AddToLocalStorage(Pokemon);
};

export { AddFavoritesPokemonLocalStorage };
