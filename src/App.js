import { useEffect, useState } from "react";
import {
  getPokemonList,
  getPokemonDescription,
  getPokemonSpriteUrl
} from "./api/utils";
import Select from "./components/Select";
import Card from "./components/Card";
import "./styles/styles.css";

export default function App() {
  const [pokemons, setPokemons] = useState({});
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    const getPokemonData = async () => {
      const data = await getPokemonList();
      const dataMap = {};

      data.forEach((pokemon, idx) => {
        const id = idx + 1;
        dataMap[id] = { ...pokemon, id };
      });

      let pokemon = Object.values(dataMap)[0];
      pokemon = await getPokemonFullData(pokemon);

      setPokemons(dataMap);
      setPokemon(pokemon);
    };
    getPokemonData();
  }, []);

  const getPokemonFullData = async (pokemon) => {
    const id = pokemon.id;
    const description = await getPokemonDescription(id);
    const imgUrl = getPokemonSpriteUrl(id);

    pokemon = { ...pokemon, description, imgUrl };

    return pokemon;
  };

  const selectOnChangeHandler = async (e) => {
    const id = e.target.value;
    const pokemon = await getPokemonFullData(pokemons[id]);
    setPokemon(pokemon);
  };

  const optionList = Object.values(pokemons).map((pokemon, idx) => {
    const { id, name } = pokemon;

    return (
      <option key={id} value={id}>
        {name}
      </option>
    );
  });

  return (
    <div className="App">
      <Select onChange={selectOnChangeHandler}>{optionList}</Select>
      <Card props={pokemon} />
    </div>
  );
}
