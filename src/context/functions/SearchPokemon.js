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
  try {
    var response = await fetch(API_URL + pokemon)
    const data = await response.json();
    return {response, data};
  } catch (error) {
    console.error('Error: ', error);
    return {response};
  }
};

export { FindPokemonMatches, APISeachPokemon };
