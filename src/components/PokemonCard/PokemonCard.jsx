import React from "react";
import "./pokemoncard.css";
const PokemonCard = () => {
  return (
    <div className="cardWrapper">
      <div className="card">
        <image src="" alt="pokemon-image" />
        <span>Id</span>
        <spn>Name</spn>
        <span>type</span>
      </div>
    </div>
  );
};

export default PokemonCard;
