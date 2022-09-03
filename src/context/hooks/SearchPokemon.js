import NamePokemon from "../../helpers/NamePokemon.json";
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
    var response = await fetch(API_URL + pokemon);
    const data = await response.json();
    return { response, data };
  } catch (error) {
    console.error("Error: ", error);
    return { response };
  }
};

const ResponseApiSearchPokemon = async (obj_data) => {
  const { Pokemon, setLoading, setError, setPokedexData } = obj_data;
  setLoading(true);
  const data_pokemon = await APISeachPokemon(Pokemon);

  if (data_pokemon.response.status !== 200 || data_pokemon.ok === false) {
    setError({
      title: `OH NO! Error: ${data_pokemon.response.status} :(`,
      msg: "Lo lamento pero ha ocurrido un error con su petición, puedes intentar más tarde o realizar una busqueda diferente",
      show: true,
    });
    setPokedexData({});
  } else {
    setError({ show: false });
    setPokedexData({
      id: data_pokemon.data.id,
      name: data_pokemon.data.name,
      sprites: data_pokemon.data.sprites,
    });
  }
  setLoading(false);
};

const ChangePokemon = async (next, context) => {
  const value = next;
  const { setLoading, setError, setPokedexData, pokedexData } = context;
  let data = { Pokemon: 1, setLoading, setError, setPokedexData };

  if (pokedexData?.id) {
    data.Pokemon = pokedexData.id + value;
    if (data.Pokemon === 0) {
      console.log("No se puede bajar mas");
      return 0;
    } else if (data.Pokemon === 10250) {
      console.log("No se puede subir mas");
      return 0;
    }
  }

  await ResponseApiSearchPokemon(data);
};

export {
  FindPokemonMatches,
  APISeachPokemon,
  ResponseApiSearchPokemon,
  ChangePokemon,
};
