import {PokemonContext} from "./PokemonContext.js";
import {getAllPokemonNames, getPokemonByPage, navigatePokemonPerPage} from "../services/pokemon.js";
import {LIMIT, OFFSET} from "../helpers/constants.js";
import {useEffect, useState} from "react";
import useCounter from "../hooks/useCounter.js";
import {useSearchParams} from "react-router-dom";

export const PokemonProvider = ({children}) => {

  const [params, setParams] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();

  const {counter, addValue, subValue, resetValue} = useCounter(parseInt(searchParams.get("offset")) || OFFSET);
  const [pokemons, setPokemons] = useState([]);
  const [pokemonList, setPokemonList] = useState([])
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
    setParams({offset: counter, limit: LIMIT})
  }, [counter]);

  useEffect(() => {
    setIsLoading(true)
    getAllPokemonNames().then(({results}) => {
      results = results.map(item => {
        return {
          ...item,
          id: crypto.randomUUID()
        }
      })
      setPokemonList(results);
      setIsLoading(false)
    })
      .catch(error => console.log(error))
  }, []);


  return (
    <PokemonContext.Provider value={{
      isLoading,
      pokemons,
      params,
      setParams,
      setSearchParams,
      pokemonList,
      resetValue,
      addValue,
      subValue
    }}>
      {children}
    </PokemonContext.Provider>
  );
};