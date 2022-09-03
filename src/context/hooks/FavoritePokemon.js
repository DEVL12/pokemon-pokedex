const AddFavoritePokemonLocalStorage = (
  setFavoritePokemon,
  setAlertFavorite,
  Pokemon
) => {
  if (Object.values(Pokemon).length === 0) return 0;

  const AddToLocalStorage = ({ id, name, sprites }) => {
    const data = IsListEmpty()
      ? [{ id: id, name: name, sprite: sprites.front_default }]
      : [
          ...JSON.parse(GetListOfPokemons()),
          { id: id, name: name, sprite: sprites.front_default },
        ];

    SaveChanges(setFavoritePokemon, data);

    setAlertFavorite({
      title: "Pokemon añadido",
      msg: `${name.toUpperCase()} fue añadido correctamente a su lista de favoritos`,
      show: true,
    });
  };

  IsListEmpty()
    ? AddToLocalStorage(Pokemon)
    : !ExistInTheList(Pokemon.id)
        ? AddToLocalStorage(Pokemon)
        : setAlertFavorite({
            title: 'Pokemon ya existente',
            msg: `${Pokemon.name.toUpperCase()} ya se encuentra registrado dentro de su lista de favoritos`,
            show: true,
          });
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
