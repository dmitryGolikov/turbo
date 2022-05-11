import React from 'react';
import './App.css';
import PropTypes from "prop-types"
import styled from "@emotion/styled"

const PokemonRow = ({ pokemon, onSelect }) => (
  <tr
  key={[pokemon.id, pokemon.name].join(".")}
>
  <td>{ pokemon.name.english }</td>
  <td>{ pokemon.type.join(", ")}</td>
  <td>
    <button onClick={() => onSelect(pokemon)}>Select</button>
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

function App() {
  const [filter, setFilter] = React.useState("");
  const [pokemon, pokemonSet] = React.useState([]);
  const [selectedItem, setSelectedItem] = React.useState(null);

  React.useEffect(() => {
    fetch("http://localhost:3000/pokemon.json")
    .then(resp => resp.json())
    .then(data => pokemonSet(data))
  }, []);

  return (
    <Container>
      <Title>Hello World</Title>
      <TwoColumnLayout>        
      <div>
        <input value={filter} onChange={(event) => setFilter(event.target.value)} />
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
                <PokemonRow key={[pokemon.id, pokemon.name].join(".")} pokemon={pokemon} onSelect={(pokemon) => setSelectedItem(pokemon)} />
              ))}
            </tbody>
          </table>
        </div>
        
        {selectedItem && (
          <PokemonInfo {...selectedItem} />
        )}
      </TwoColumnLayout>

    </Container>
  );
}

export default App;
