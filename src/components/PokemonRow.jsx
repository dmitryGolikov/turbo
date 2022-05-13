import React from 'react';
import { Button } from '@mui/material';
import PokemonType from '../PokemonType';

const PokemonRow = ({ pokemon, onClick }) => (
    <>
    <tr
    key={[pokemon.id, pokemon.name].join(".")}
    >
        <td>{ pokemon.name.english }</td>
        <td>{ pokemon.type.join(", ")}</td>
        <td>
            <Button 
            variant='contained'
             color='primary'
             onClick={() => onClick(pokemon)}>
                 More Information
            </Button>
        </td>
    </tr>
    </>
);


PokemonRow.propTypes = {
    pokemon: PokemonType.isRequired,
  };  

export default PokemonRow;