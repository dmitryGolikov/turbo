import { makeAutoObservable, observable, computed } from "mobx"

class Store {
    pokemon = [];
    filter = "";
    selectedPokemon = null;
  //@makeAutoObservable
    constructor() {
        makeAutoObservable(this, {
            pokemon: observable,
            filter: observable,
            selectedPokemon: observable,
            filteredPokemon: computed,
        });
    }
    setPokemon(pokemon) {
        this.pokemon = pokemon;
    }
    setFilter(filter) {
        this.filter = filter;
    }
    setSelectedPokemon(selectedPokemon) {
        this.selectedPokemon = selectedPokemon;
    }
    get filteredPokemon() {
        return this.pokemon
            .slice(0, 20)
            .filter(({ name: { english }}) => english.toLowerCase().includes(this.filter))
    }
}

const store = new Store();

// const useStore = create(set => ({
  
//     setPokemon: (pokemon) => set(state => ({
//         ...state,
//         pokemon
//     })),
//     setFilter: (filter) => set(state => ({
//         ...state,
//         filter
//     })),
//     setSelectedPokemon: (selectedPokemon) => set(state => ({
//         ...state,
//         selectedPokemon
//     }))
// }))

fetch("/turbo/pokemon.json")
    .then(resp => resp.json())
    .then(pokemon => store.setPokemon(pokemon))

export default store;