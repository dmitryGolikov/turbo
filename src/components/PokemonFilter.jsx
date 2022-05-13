import React from 'react';
import styled from "@emotion/styled";
import { useSelector, useDispatch } from 'react-redux';

const Input = styled.input`
  width: 100%;
  font-size: x-large;
  padding: 0.2rem;
`;


const PokemonFilter = () => {
    const filter = useSelector(state => state.filter);
    const dispatch = useDispatch();
    return (
        <Input 
            type='text'
            value={filter}
            onChange={(event) => dispatch({type: "SET_FILTER", payload: event.target.value})}
        />
    )
}

export default PokemonFilter;