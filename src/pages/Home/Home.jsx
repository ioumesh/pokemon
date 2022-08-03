import React, { useState, useEffect } from "react";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import Topbar from "../../components/Topbar/Topbar";
import axios from "axios";
import "./home.css";
const Home = () => {
  const url = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0";
  const [allpokemon, setAllPokemon] = useState([]);
  const [loadMore, setLoadMore] = useState(url);
  const getAllPokemon = async () => {
    const response = await axios.get(loadMore).then((res) => res.data);
    console.log(response);
    setLoadMore(response.next);
    function createPokemonObject(result) {
      result.forEach(async (element) => {
        const res = await axios
          .get(`https://pokeapi.co/api/v2/pokemon/${element.name}`)
          .then((res) => res.data);
        setAllPokemon((currentList) => [...currentList, res]);
      });
    }
    createPokemonObject(response.results);
  };
  useEffect(() => {
    getAllPokemon();
  }, []);
  console.log(allpokemon);
  return (
    <div>
      <Topbar />
      <div className="cardContainer">
        {allpokemon &&
          allpokemon.map((item, index) => {
            return (
              <PokemonCard
                id={item.id}
                name={item.name}
                image={item.sprites.other.dream_world.front_default}
                type={item.types[0].type.name}
                key={index}
              />
            );
          })}
      </div>
      <div>
        <button onClick={() => getAllPokemon()}>Load More</button>
      </div>
    </div>
  );
};

export default Home;
