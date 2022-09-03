import React, { useState } from "react";

const AddFavoritePokemonLocalStorage = (setFavoritePokemon, Pokemon) => {
  if (Object.values(Pokemon).length === 0) return 0;

  const AddToLocalStorage = ({ id, name, sprites }) => {
    const data = IsListEmpty()
      ? [{ id: id, name: name, sprite: sprites.front_default }]
      : [
          ...JSON.parse(GetListOfPokemons()),
          { id: id, name: name, sprite: sprites.front_default },
        ];

    SaveChanges(setFavoritePokemon, data);
  };

  IsListEmpty()
    ? AddToLocalStorage(Pokemon)
    : !ExistInTheList(Pokemon.id) && AddToLocalStorage(Pokemon);
};

const DeleteFavoritePokemonLocalStorage = (setFavoritePokemon, id) => {
  if (!ExistInTheList(id)) return 0;

  let NewListPokemon = JSON.parse(GetListOfPokemons());
  const index = NewListPokemon.findIndex((Pokemon) => Pokemon.id === id);
  NewListPokemon.splice(index, 1);

  SaveChanges(setFavoritePokemon, NewListPokemon);
};

const SaveChanges = (setFavoritePokemon, data) => {
  localStorage.setItem("Favorites_pokemons", JSON.stringify(data));
  setFavoritePokemon(data);
};

const ExistInTheList = (id) => {
  const List_Pokemons = JSON.parse(GetListOfPokemons());
  return List_Pokemons.some((Pokemon) => Pokemon.id === id);
};

const InitialValue = () =>
  IsListEmpty() ? [] : JSON.parse(GetListOfPokemons());

const GetListOfPokemons = () => localStorage.getItem("Favorites_pokemons");

const IsListEmpty = () => (!GetListOfPokemons() ? true : false);

export {
  AddFavoritePokemonLocalStorage,
  DeleteFavoritePokemonLocalStorage,
  InitialValue,
};
