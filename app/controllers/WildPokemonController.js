import { AppState } from "../AppState.js";
import { Pokemon } from "../models/Pokemon.js";
import { wildPokemonService } from "../services/WildPokemonService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

function _drawWildPokemon(){
  const wildPokemon = AppState.wildPokemon
  console.log('about draw some pokemon', wildPokemon);
  let content = ''
  // wildPokemon.forEach(poke => content += `<div class="row text-light p-2">${poke.name} 🐈</div>`)
  wildPokemon.forEach((poke, i) => content += Pokemon.WildPokemonTemplate(poke, i+1))
  setHTML('wild-pokemon-list', content)
}

function _drawActivePokemon(){
  const activePokemon = AppState.activePokemon
  let content = activePokemon.ActivePokemonTemplate
  setHTML('active-pokemon', content)
}


export class WildPokemonController{
  constructor(){
    console.log('🐈🌿🎮');
    this.getWildPokemon()
    AppState.on('wildPokemon', _drawWildPokemon)
    AppState.on('activePokemon', _drawActivePokemon)
  }

  async getWildPokemon(){
    try {
      await wildPokemonService.getWildPokemon()
    } catch (error) {
      Pop.error(error)
      console.error(error)
    }
  }

  async getActivePokemon(pokeName){
    try {
      await wildPokemonService.getActivePokemon(pokeName)
    } catch (error) {
      Pop.error(error)
      console.error(error)
    }
  }
}

