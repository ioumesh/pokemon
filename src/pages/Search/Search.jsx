import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import { PokeContext } from "../../PokemonContext";
const Search = () => {
  const { pokemonList } = useContext(PokeContext);
  const navigate = useNavigate();
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
        <div className="buttonWrapper">
          <button className="btn" onClick={() => navigate("/")}>
            Go Back
          </button>
        </div>
      </div>
    </>
  );
};

export default Search;
