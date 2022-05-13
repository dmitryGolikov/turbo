import React from 'react';
import PokemonRow from  "../components/PokemonRow";
import { useSelector, useDispatch } from 'react-redux';


const PokemonTable = () => {
    const pokemon = useSelector(state => state.pokemon);
    const filter = useSelector(state => state.filter);
    const dispatch = useDispatch();
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
        .splice(0, 20)
        .filter(pokemon => pokemon.name.english.toLowerCase().includes(filter)).map(pokemon => (
        <PokemonRow key={[pokemon.id, pokemon.name].join(".")} pokemon={pokemon} onClick={ (pokemon) => dispatch({type: "SET_SELECTED_POKEMON", payload: pokemon}) } />
      ))}
    </tbody>
  </table>
    )
}
    
export default PokemonTable;