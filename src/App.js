import React, { useState, useEffect } from 'react';
import { Counter } from './Counter.js'
import { useGetClientsByUserIdQuery } from './services/clients.js'

function App() {
  const [clients, setClients] = useState([]);
  
  // Using a query hook automatically fetches data and returns query values
  const { data, error, isLoading } = useGetClientsByUserIdQuery(1)
  // Individual hooks are also accessible under the generated endpoints:
  // const { data, error, isLoading } = pokemonApi.endpoints.getPokemonByName.useQuery('bulbasaur')
  
  return (
    <div className="App">
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <pre>{data[0].first_name}</pre>
          <pre>{data[1].first_name}</pre>
          <pre>{data[2].first_name}</pre>
        </>
      ) : null}
    </div>
  );
}

export default App;
