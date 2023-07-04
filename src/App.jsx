import { Grid } from "@mui/material";
import SearchAppBar from "./Componentes/Cabecalho";
import MediaCard from "./Componentes/PokeCards";
import axios from "axios";
import { useEffect, useState } from "react";



function App() {
  const [pokemons, setPokemons] = useState();
  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=16&offset=0").then(response => {
      setPokemons(response.data)
      console.log(response);
    })
  }, []);
  console.log("dataresponse", pokemons);
  return (
    <div>
      <div>
        <SearchAppBar />
      </div>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {
          pokemons ?
            pokemons.results.map(pokemon => {
              return (
                <Grid item xs={3}>
                  < MediaCard nome={pokemon.name} url={pokemon.url}/>
                </Grid>
              );
            })

            : ""

        }
      </Grid>
    </div >

  );
}

export default App;
