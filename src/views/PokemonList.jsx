import {Col, Row} from "react-bootstrap";
import {useContext, useEffect} from "react";
import {PokemonContext} from "../context/PokemonContext.js";
import {Pagination} from "../components/Pagination.jsx";
import {PokemonShow} from "../components/PokemonShow.jsx";

export const PokemonList = () => {

  const {pokemons, isLoading, params, setSearchParams} = useContext(PokemonContext);


  useEffect(() => {
    setSearchParams(params)
  }, [params]);

  return (
    <div>
      <h1>Pokemon List</h1>
      <hr/>
      <Row>
        {
          isLoading || !(pokemons.length > 0)
            ? "Cargando..."
            : pokemons.map(pokemon => (
              pokemon.id && <Col key={crypto.randomUUID()}>
                <PokemonShow pokemon={pokemon}/>
              </Col>
            ))
        }
      </Row>
      <hr/>
      <Pagination/>
    </div>
  );
};