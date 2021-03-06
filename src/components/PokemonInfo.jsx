import React from 'react';
import PokemonType from '../PokemonType';
import store from '../store';
import { observer } from 'mobx-react';


const PokemonInfo = () => {
  const selectedPokemon = store.selectedPokemon;
    return selectedPokemon ? (
        <div>
      <h2>{selectedPokemon.name.english}</h2>
      <table>
      <tbody>
        {
          Object.keys(selectedPokemon.base).map(key => (
            <tr key={key}>
              <td>{key}</td>
              <td>{selectedPokemon.base[key]}</td>
            </tr>
          ))
        }
        </tbody>
      </table>
    </div>
    ): null;
}
PokemonInfo.propTypes = PokemonType.isRequired;

  export default observer(PokemonInfo);