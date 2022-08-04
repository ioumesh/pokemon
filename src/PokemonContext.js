import React, { createContext, useState } from "react";
export const PokeContext = createContext();

const PokemonContext = ({ children }) => {
  const [pokemonList, setPokemonList] = useState([]);
  return (
    <PokeContext.Provider value={{ pokemonList, setPokemonList }}>
      {children}
    </PokeContext.Provider>
  );
};

export default PokemonContext;
