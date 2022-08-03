export const AllPokemon = () =>
  `https://pokeapi.co/api/v2/pokemon?limit=7&offset=0`;

export const SinglePokemon = (element) =>
  `https://pokeapi.co/api/v2/pokemon/${element}`;
