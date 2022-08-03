import React, { useState, useEffect } from "react";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import Topbar from "../../components/Topbar/Topbar";
import axios from "axios";
import "./home.css";
const Home = () => {
  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=100&offset=0")
      .then((res) => console.log(res.data));
  }, []);
  return (
    <div>
      <Topbar />
      <div className="cardContainer">
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
      </div>
    </div>
  );
};

export default Home;
