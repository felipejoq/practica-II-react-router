import {PokemonContext} from "./PokemonContext.js";
import {getPokemonByPage, navigatePokemonPerPage} from "../services/pokemon.js";
import {LIMIT, OFFSET} from "../helpers/constants.js";
import {useEffect, useState} from "react";
import useCounter from "../hooks/useCounter.js";
import {useSearchParams} from "react-router-dom";

export const PokemonProvider = ({children}) => {

  const [params, setParams] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();

  const {counter, addValue, subValue} = useCounter(parseInt(searchParams.get("offset")) || OFFSET);
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getPokemonPerPage = async () => {
    const {results} = await navigatePokemonPerPage(counter, LIMIT);
    return await getPokemonByPage(results);
  }

  useEffect(() => {
    setIsLoading(true)
    getPokemonPerPage().then(pokemons => {
      setPokemons(pokemons)
      setIsLoading(false)
    })
    setParams({ offset: counter, limit: LIMIT})
  }, [counter]);


  return (
    <PokemonContext.Provider value={{
      isLoading,
      pokemons,
      params,
      setParams,
      setSearchParams,
      addValue,
      subValue
    }}>
      {children}
    </PokemonContext.Provider>
  );
};