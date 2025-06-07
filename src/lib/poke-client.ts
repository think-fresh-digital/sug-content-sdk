import { Pokemon, PokemonClient } from "pokenode-ts";

export const getPokemon = async (name: string): Promise<Pokemon> => {
    const api = new PokemonClient();

    const pokemon = await api.getPokemonByName(name);

    return pokemon;
}