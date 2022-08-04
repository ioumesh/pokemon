import React, { useContext, useState } from "react";
import "./searchbox.css";
import { PokeContext } from "../../PokemonContext";
import { useNavigate } from "react-router-dom";
const SearchBox = () => {
  const { pokemonList, setPokemonList } = useContext(PokeContext);
  const [searchTerm, setSearchTerm] = useState();
  const filterPokemon = pokemonList.filter((item) => item.name === searchTerm);

  const handleInput = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
  };
  const handlePokemonSearch = () => {
    setPokemonList(filterPokemon);
    navigate("search");
  };
  const navigate = useNavigate();
  return (
    <>
      <div className="searchWrapper">
        <input
          type="text"
          placeholder="Search Pokemon"
          onChange={handleInput}
        />
        <button className="searchBtn" onClick={handlePokemonSearch}>
          search
        </button>
      </div>
    </>
  );
};

export default SearchBox;
