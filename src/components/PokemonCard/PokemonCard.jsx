import React from "react";
import "./pokemoncard.css";
const PokemonCard = ({ id, name, image, type }) => {
  return (
    <>
      <div className="cardWrapper">
        <div className="card">
          <div>
            <image src={image} alt={name} />
          </div>
          <div>
            <span>#{id}</span>
          </div>
          <div>
            <h3>{name}</h3>
            <small>{type}</small>
          </div>
        </div>
      </div>
    </>
  );
};

export default PokemonCard;
