import { AppState } from "../AppState.js";
import { baseURL } from "../env.js"
import { Pokemon } from "../models/Pokemon.js";

// @ts-ignore
const pokeApi = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/'
})


class WildPokemonService{
  async getActivePokemon(pokeName) {
    const response = await pokeApi.get(`pokemon/${pokeName}`)
    console.log('🐈🌿🌕📡', response.data);
    const newPokemon = new Pokemon(response.data)
    AppState.activePokemon = newPokemon

  }
  async getWildPokemon() {
    const response = await pokeApi.get('pokemon?limit=151')
    console.log('🐈🌿📡', response.data);
    AppState.wildPokemon = response.data.results
  }

}

export const wildPokemonService = new WildPokemonService()