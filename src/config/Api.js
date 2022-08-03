export const AllPokemon = () =>
  `https://pokeapi.co/api/v2/pokemon?limit=20&offset=0`;

export const SinglePokemon = (element) =>
  `https://pokeapi.co/api/v2/pokemon/${element}`;
