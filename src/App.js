import React from 'react';
import './App.css';
import pokemon from './pokemon.json';
import PropTypes from "prop-types"

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

function App() {
  const [filter, setFilter] = React.useState("");
  const [selectedItem, setSelectedItem] = React.useState(null);
  return (
    <div style={{
      margin: "auto",
      width: 800,
      paddingTop: "1rem"
    }}>
      <h1 className='title'>Hello World</h1>
      <div style={{
        display: "grid",
        gridTemplateColumns: "70% 30%",
        gridColumnGap: "1rem"
      }}>        
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
      </div>

    </div>
  );
}

export default App;
