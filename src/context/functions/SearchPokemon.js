import NamePokemon from './../../helpers/NamePokemon.json';

const FindPokemonMatches = (e) => {
  return (
    NamePokemon.filter(data => {
      const valueInput = e.target.value.toLowerCase();
      const Pokemon = data.name.toLowerCase();
      return Pokemon.includes(valueInput);
    })
  );
};

export { FindPokemonMatches };