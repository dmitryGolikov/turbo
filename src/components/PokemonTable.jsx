import React from 'react';
import PokemonRow from  "../components/PokemonRow";
import store from "../store";
import { observer } from 'mobx-react';

const PokemonTable = () => {
    return (
        <table width="100%">
    <thead>
      <tr>
        <th>Name</th>
        <th>Type</th>
      </tr>
    </thead>
    <tbody>
      {store.filteredPokemon.map(pokemon => (
        <PokemonRow key={[pokemon.id, pokemon.name].join(".")} pokemon={pokemon} onClick={ (pokemon) => store.setSelectedPokemon(pokemon) } />
      ))}
    </tbody>
  </table>
    )
}
    
export default observer(PokemonTable);