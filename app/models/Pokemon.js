

export class Pokemon{
  constructor(data){
    this.id = data.id
    this.name = data.name
    this.nickName = data.id // this id is that pokemon's number
    this.weight = data.weight
    this.height = data.height
    this.types = data.types[0].type ? data.types.map(t => t.type.name) : data.types
    this.pokeNumber = data.id
  }
//   name: String, required
// nickName: String, 
// img: String, required
// weight: String, 
// height: String, 
// types: undefined, 
// creatorId: String (References Account Id), required
// *creator: Object (Virtual Added by Database)
// *createdAt: ISO Timestamp (Virtual Added by Database)
// *updatedAt: ISO Timestamp (Virtual Added by Database)

  static WildPokemonTemplate(pokemon, pokeNumber){
    return `
    <div role="button" class="row text-light p-2 selectable" onclick="app.WildPokemonController.getActivePokemon('${pokemon.name}')">
      <div class="col-8 fw-bold text-capitalize">${pokemon.name}</div>
      <div class="col-4">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokeNumber}.gif" class="img-fluid"/>
      </div>
    </div>`
  }

  get ActivePokemonTemplate(){
    return `
    <h1>${this.name}</h1>
    <h2>${this.types}</h2>
    <h3>${this.height} ${this.weight}</h3>
    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${this.nickName}.png"/>
    `
  }
}