import "./App.css";
import { useEffect, useState } from "react";
import Pokemonsec from "./second";
import axios from "axios";

function App() {
  let [pokemonsall, setAll] = useState([]);
  let [pokemonInfo, fullinfo] = useState("");
  let [pokemon, dataPokemon] = useState([]);
  const [pokeSearch, setPokeSearch] = useState(false);
  const [pokeSearch2, setPokeSearch2] = useState(true);
  let [more] = useState("https://pokeapi.co/api/v2/pokemon?limit=113");
  let getallnouns = async () => {
    let param = await fetch(more);
    let param2 = await param.json();
function pokemonC(result) {
      result.forEach(async (pokemon) => {
        let param = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
      );
        let param2 = await param.json();
        setAll((currentList) => [...currentList, param2]);
    });
  }
    pokemonC(param2.results);
};
    useEffect(() => {
      getallnouns();
},[]);
  const fetchPokemon = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonInfo}`)
      .then((response) => {
        const main = response.data;
        dataPokemon({
          id: main.id,
          name: pokemonInfo,
          image: main.sprites.other.dream_world.front_default,
          type: main.types[0].type.name,
          attack: main.stats[1].base_stat,
          defense: main.stats[2].base_stat,
          speed: main.stats[5].base_stat,
          SpDef: main.stats[4].base_stat,
        });
        console.log(main);
        setPokeSearch(true);
        setPokeSearch2(false)
    })
      .catch(() => {
        console.log("Error!");
  });
};
  return (
    <div className="container">
      <div className="navbar">
        <h1 className="text">PokemonTk</h1>
          <div className="sea">
            <input className="search" type="text" placeholder="Name-Login" onChange={(event) => {fullinfo(event.target.value)}}/>
            <button onClick={fetchPokemon}> Поиск.. </button>
        </div>
      </div> 
        {pokeSearch ? (
     <div className="searchCard">
          <h3>#0{pokemon.id}</h3>
            <img src={pokemon.image} alt="none" />
              <h2>{pokemon.name}</h2>
              <h3>Attack: {pokemon.attack}</h3>
              <h3>Defense: {pokemon.defense}</h3>
              <h3>Speed: {pokemon.speed}</h3>
              <h3>Sp.Def: {pokemon.SpDef}</h3>
              <h4>Type: {pokemon.type}</h4>
        </div>
      ) : (
        ""
      )}
      <div className="all-container">
        {pokeSearch2 ? (
            <>
            {pokemonsall.map((main2) => (
              <div className="ccsd" style={{minHeight: 'auto'}}>
                <Pokemonsec
                  id={main2.id}
                  name={main2.name}
                  image={main2.sprites.other.dream_world.front_default}
                  type={main2.types[0].type.name}
                  attack={main2.stats[1].base_stat}
                  defense={main2.stats[2].base_stat}
                  speed={main2.stats[5].base_stat}
                  SpDef={main2.stats[4].base_stat}
                  />
                </div>
              ))}
            </>
          ) : ''
        }
      </div>
    </div>
  );
}
export default App;