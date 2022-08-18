import NamePokemon from "./../../helpers/NamePokemon.json";
const API_URL = "https://pokeapi.co/api/v2/pokemon/";

const FindPokemonMatches = (value) => {
  return NamePokemon.filter((data) => {
    const valueInput = value.toLowerCase();
    const Pokemon = data.name.toLowerCase();
    return Pokemon.includes(valueInput);
  });
};

const APISeachPokemon = async (pokemon) => {
  const response = await fetch(API_URL + pokemon)

  if(response.status !== 200 || response.ok !== true) {
    console.log('Error al buscar el pokemon');
    return false;
  } else {
    const data = await response.json();
    return data;
  }
};

export { FindPokemonMatches, APISeachPokemon };
