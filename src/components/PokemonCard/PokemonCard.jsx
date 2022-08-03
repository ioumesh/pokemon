import React from "react";
import "./pokemoncard.css";
const PokemonCard = ({ id, name, image, type }) => {
  const style = type + " pokemon-container";
  return (
    <>
      <div className={style}>
        <div className="pokemonId">
          <small>#0{id}</small>
        </div>
        <div className="pokemonImgWrapper">
          <img src={image} alt={name} />
        </div>
        <div className="detail-wrapper">
          <h3>{name}</h3>
          <small>Type: {type}</small>
        </div>
      </div>
    </>
  );
};

export default PokemonCard;
