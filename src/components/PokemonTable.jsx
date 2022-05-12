import React from 'react';
import PokemonRow from  "../components/PokemonRow";
import PokemonContext from "../PokemonContext";

const PokemonTable = () => {
    const { state: { pokemon, filter }, dispatch } = React.useContext(PokemonContext);
    return (
        <table width="100%">
    <thead>
      <tr>
        <th>Name</th>
        <th>Type</th>
      </tr>
    </thead>
    <tbody>
      {pokemon
        .filter(pokemon => pokemon.name.english.toLowerCase().includes(filter)).map(pokemon => (
        <PokemonRow key={[pokemon.id, pokemon.name].join(".")} pokemon={pokemon} onClick={ dispatch({ type: "SET_SELECTED_POKEMON", payload: pokemon  })} />
      ))}
    </tbody>
  </table>
    )
}
    
export default PokemonTable;