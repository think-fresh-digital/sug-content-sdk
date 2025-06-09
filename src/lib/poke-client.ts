import { Pokemon, PokemonClient } from 'pokenode-ts';

const POKEMON_POOL = [
  'pikachu',
  'charizard',
  'bulbasaur',
  'squirtle',
  'mewtwo',
  'eevee',
  'snorlax',
  'gyarados',
  'lapras',
  'dragonite',
  'gengar',
  'vaporeon',
  'flareon',
  'jolteon',
  'mew',
  'rayquaza',
  'lucario',
  'garchomp',
  'tyranitar',
  'metagross',
];

export const getPokemon = async (): Promise<Pokemon | null> => {
  if (process.env.POKEMON_ENABLED !== 'true') return null;

  // 50% chance to return null
  if (Math.random() < 0.5) {
    return null;
  }

  const api = new PokemonClient();

  // Get a random Pokemon from the pool
  const randomIndex = Math.floor(Math.random() * POKEMON_POOL.length);
  const randomPokemonName = POKEMON_POOL[randomIndex];

  const pokemon = await api.getPokemonByName(randomPokemonName);
  return pokemon;
};
