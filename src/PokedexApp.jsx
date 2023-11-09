import {Header} from "./components/Header.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./views/Home.jsx";
import {Container} from "react-bootstrap";
import {PokemonList} from "./views/PokemonList.jsx";
import {PokemonDetails} from "./views/PokemonDetails.jsx";
import {PokemonProvider} from "./context/PokemonProvider.jsx";
import {Footer} from "./components/Footer.jsx";

export const PokedexApp = () => {

  return (
    <>
      <BrowserRouter basename="/">
        <PokemonProvider>
          <Header/>
          <Container className="my-4 bg-light rounded shadow-sm p-4">
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/pokemons" element={<PokemonList/>}/>
              <Route path="/pokemons/:pokemonName" element={<PokemonDetails/>}/>
            </Routes>
          </Container>
          <Footer />
        </PokemonProvider>
      </BrowserRouter>
    </>
  )
}
