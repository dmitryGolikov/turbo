import React from 'react';
import './App.css';
import PropTypes from "prop-types";
import { Button } from '@mui/material';
import styled from "@emotion/styled";

const PokemonRow = ({ pokemon, onSelect }) => (
  <tr
  key={[pokemon.id, pokemon.name].join(".")}
>
  <td>{ pokemon.name.english }</td>
  <td>{ pokemon.type.join(", ")}</td>
  <td>
    <Button variant='contained' color='primary' onClick={() => onSelect(pokemon)}>Select</Button>
  </td>
</tr>
);

const PokemonInfo = ({name, base}) => (
  <div>
    <h2>{name.english}</h2>
    <table>
    <tbody>
      {
        Object.keys(base).map(key => (
          <tr key={key}>
            <td>{key}</td>
            <td>{base[key]}</td>
          </tr>
        ))
      }
      </tbody>
    </table>
  </div>
)

PokemonInfo.propTypes = {
  name: PropTypes.shape({
    english: PropTypes.string.isRequired,
  }),
  base: PropTypes.shape({
    HP: PropTypes.number.isRequired,
    Attack: PropTypes.number.isRequired,
    Defense: PropTypes.number.isRequired,
    "Sp. Attack": PropTypes.number.isRequired,
    "Sp. Defense": PropTypes.number.isRequired,
    Speed: PropTypes.number.isRequired,

  })
}

PokemonRow.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.shape({
      english: PropTypes.string.isRequired,
    }),
    type: PropTypes.arrayOf(PropTypes.string.isRequired),
  }),
  onSelect: PropTypes.func.isRequired,
}

const Title = styled.h1`
  color: red;
  text-align: center;
`;

const TwoColumnLayout = styled.div`
    display: grid;
    grid-template-columns: 70% 30%;
    grid-column-gap: 1rem;
`;

const Container = styled.div`
  margin: auto;
  width: 800px;
  padding: 1rem;
`;

const Input = styled.input`
  width: 100%;
  font-size: x-large;
  padding: 0.2rem;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: "",
      pokemon: [],
      selectedItem : null
    }
  }
  componentDidMount() {
    fetch("http://localhost:3000/turbo/pokemon.json")
  .then(resp => resp.json())
  .then(pokemon => this.setState({ 
    ...this.state,
    pokemon
  }))
  .catch(error => (console.log(error)))    
  }
  render() {
return (<Container>
      <Title>Hello World</Title>
      <TwoColumnLayout>        
      <div>
        <Input value={this.state.filter} onChange={(event) => this.setState({
          ...this.state, filter: event.target.value
        })} />
          <table width="100%">
            <thead>
              <tr>
                <th>Name</th>
                <th>Type</th>
              </tr>
            </thead>
            <tbody>
              {this.state.pokemon
                .filter(pokemon => pokemon.name.english.toLowerCase().includes(this.state.filter)).map(pokemon => (
                <PokemonRow key={[pokemon.id, pokemon.name].join(".")} pokemon={pokemon} onSelect={(pokemon) => this.setState({
                  ...this.state, selectedItem: pokemon
                })} />
              ))}
            </tbody>
          </table>
        </div>
        
        {this.state.selectedItem && (
          <PokemonInfo {...this.state.selectedItem} />
        )}
      </TwoColumnLayout>

    </Container>);
  }
}

// function App() {
//   const [filter, setFilter] = React.useState("");
//   const [pokemon, pokemonSet] = React.useState([]);
//   const [selectedItem, setSelectedItem] = React.useState(null);

//   React.useEffect(() => {
//     fetch("http://localhost:3000/turbo/pokemon.json")
//     .then(resp => resp.json())
//     .then(data => pokemonSet(data))
//     .catch(error => (console.log(error)))
//   }, []);

//   return (
    
//   );
// }

// React.useEffect(() => {
//   fetch("http://localhost:3000/turbo/pokemon.json")
//   .then(resp => resp.json())
//   .then(data => pokemonSet(data))
//   .catch(error => (console.log(error)))
// }, []);


export default App;
