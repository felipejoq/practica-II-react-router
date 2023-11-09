import {PokeCard} from "../components/PokeCard.jsx";
import {useParams} from "react-router-dom";
import useFetch from "../hooks/useFetch.js";
import {SERVICE_URL} from "../helpers/constants.js";

export const PokemonDetails = () => {

  let {pokemonName} = useParams();
  const {data, isLoading} = useFetch(`${SERVICE_URL}${pokemonName}`)

  return (
    isLoading ? "Cargando..." : <PokeCard pokemon={data}/>
  );
};