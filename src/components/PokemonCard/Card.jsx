import React from "react";
import "./pokemoncard.css";
const Card = ({ id, name, image, type }) => {
  const style = type + " pokemon-container";
  const pokemonName = name.charAt(0).toUpperCase() + name.slice(1);
  return (
    <div className={style}>
      <div className="pokemonImgWrapper">
        <img src={image} alt={name} />
      </div>
      <div className="pokemonId">
        <small>#0{id}</small>
      </div>
      <div className="detail-wrapper">
        <h3>{pokemonName}</h3>
        <small>{type}</small>
      </div>
    </div>
  );
};

export default Card;
