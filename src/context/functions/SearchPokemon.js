import NamePokemon from './../../helpers/NamePokemon.json';

const FindPokemonMatches = (value) => {
  return (
    NamePokemon.filter(data => {
      const valueInput = value.toLowerCase();
      const Pokemon = data.name.toLowerCase();
      return Pokemon.includes(valueInput);
    })
  );
};

export { FindPokemonMatches };