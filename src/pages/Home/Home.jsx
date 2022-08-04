import React, { useState, useEffect, useContext } from "react";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import axios from "axios";
import "./home.css";
import { AllPokemon } from "../../config/Api";
import { SinglePokemon } from "../../config/Api";
import { PokeContext } from "../../PokemonContext";
const Home = () => {
  const { pokemonList, setPokemonList } = useContext(PokeContext);
  const [loadMore, setLoadMore] = useState(AllPokemon);

  const fetchPokemonList = async () => {
    const response = await axios.get(loadMore).then((res) => res.data);
    setLoadMore(response.next);
    const fetchSinglePokemon = (result) => {
      result.forEach(async (element) => {
        const res = await axios
          .get(SinglePokemon(element.name))
          .then((res) => res.data);
        setPokemonList((currentList) => [...currentList, res]);
      });
    };
    fetchSinglePokemon(response.results);
  };
  useEffect(() => {
    fetchPokemonList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleNextPokemon = () => {
    fetchPokemonList();
  };
  return (
    <>
      <div>
        <div className="cardContainer">
          {pokemonList &&
            pokemonList.map((item, index) => {
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
      </div>
      <div className="buttonWrapper">
        <button className="btn" onClick={handleNextPokemon}>
          Next &raquo;
        </button>
      </div>
    </>
  );
};

export default Home;
