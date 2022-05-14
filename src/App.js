import React from 'react';
import styled from "@emotion/styled";
import PokemonInfo from './components/PokemonInfo';
import PokemonFilter from './components/PokemonFilter';
import PokemonTable from './components/PokemonTable';
import { CssBaseline } from '@mui/material';
// import useStore from './store';

// const pokemonReducer = (state = {
//   pokemon: [],
//   filter: "",
//   selectedPokemon: null,
// }, { type, payload }) => {
//   switch(type) {
//     case 'SET_FILTER':
//       return {
//         ...state,
//         filter: payload
//       }
//     case 'SET_POKEMON':
//       return {
//         ...state,
//         pokemon: payload
//       }      
//     case 'SET_SELECTED_POKEMON':
//       return {
//         ...state,
//         selectedPokemon: payload
//       }
//       default:
//         return state;
//     }
// }

// const store = configureStore({
//   reducer: pokemonReducer
// });

const Title = styled.h1`
  color: red;
  text-align: center;
`;

const TwoColumnLayout = styled.div`
    display: grid;
    grid-template-columns: 70% 30%;
    grid-column-gap: 1rem;
`;

const PageContainer = styled.div`
  margin: auto;
  width: 800px;
  padding: 1rem;
`;

function App() {  
  // const [state, dispatch] = React.useReducer(pokemonReducer, {
  //   pokemon: [],
  //   filter: "",
  //   selectedPokemon: null
  // });
  // const dispatch = useDispatch();
  // const pokemon = useSelector(state => state.pokemon);
  // const pokemon = useStore(state => state.pokemon);
  // const setPokemon = useStore(state => state.setPokemon);

  // React.useEffect(() => {
  //   fetch("http://localhost:3000/turbo/pokemon.json")
  //   .then(resp => resp.json())
  //   .then(setPokemon)
  //   .catch(error => (console.log(error)))
  // }, []);

  // if(!pokemon) {
  //   return <div>Loading data</div>
  // }

  return (
      <PageContainer>
        <CssBaseline />
        <Title>Hello World</Title>
        <TwoColumnLayout>        
        <div>
            <PokemonFilter />
            <PokemonTable />
          </div>
          
          <PokemonInfo/>
        </TwoColumnLayout>

      </PageContainer>   
  );
}

//export default () => <Provider store={store}><App /></Provider>;
export default App;