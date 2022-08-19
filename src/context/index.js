import React from "react";
import { FindPokemonMatches, APISeachPokemon } from './functions/SearchPokemon';

const PokedexContext = React.createContext();

const PokedexProvider = (props) => {
  const [searchValue, setSearchValue] = React.useState([]);
  const [searchPokemon, setSearchPokemon] = React.useState('');
  const [showMatches, setShowMatches] = React.useState(false);
  const [pokedexData, setPokedexData] = React.useState({});
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState({ show:false });

  // Guarda todos los match que se encuentran
  const Matches = (e) => {
    const Matchs = FindPokemonMatches(e.target.value);
    setSearchValue(Matchs);
    setSearchPokemon(e.target.value);

    (Matchs.length === 0 || e.target.value === "")
      ? setShowMatches(false)
      : setShowMatches(true);
  };

  const ResponseApiSearchPokemon = async (Pokemon) => {
    setLoading(true);
    const data_pokemon = await APISeachPokemon(Pokemon);

    if (data_pokemon.response.status !== 200 || data_pokemon.ok === false) {
      setError({
        title: `OH NO! Error: ${data_pokemon.response.status} :(`,
        msg: 'Lo lamento pero ha ocurrido un error con su petición, puedes intentar más tarde o realizar una busqueda diferente',
        show: true,
      });
      setPokedexData({});
    } else {
      setError({show: false});
      setPokedexData({
        id: data_pokemon.data.id,
        name: data_pokemon.data.name,
        sprites: data_pokemon.data.sprites,
      });
    }
    setLoading(false);
  }

  const formOnSubmitPokemon = async (e) => {
    e.preventDefault();
    const Pokemon = ( isNaN(parseInt(e.target[0].value)) )
      ? e.target[0].value.toLowerCase()
      : parseInt(e.target[0].value);
    
    setShowMatches(false);

    if (Pokemon === "" || Pokemon <= 0) {
      alert("No se que quieres que busque... estas bien?");
      return 0;
    }
    
    await ResponseApiSearchPokemon(Pokemon);
  };

  const ChangePokemon = async (valor) => {
    if (pokedexData?.id) {
      const idPokemon = pokedexData.id + valor;
      if ((idPokemon) === 0) {
        console.log('No se puede bajar mas');
        return 0;
      } else if((idPokemon === 10250)) {
        console.log('No se puede subir mas');
        return 0;
      }
      await ResponseApiSearchPokemon(idPokemon);
    } else {
      await ResponseApiSearchPokemon(1);
    }
  }

  return (
    <PokedexContext.Provider value={{
      searchValue,
      setSearchValue,
      FindPokemonMatches,
      searchPokemon,
      setSearchPokemon,
      showMatches,
      setShowMatches,
      Matches,
      formOnSubmitPokemon,
      pokedexData, 
      setPokedexData,
      ChangePokemon,
      loading,
      error,
      setError,
    }}>
      {props.children}
    </PokedexContext.Provider>
  );
};

export { PokedexContext, PokedexProvider };