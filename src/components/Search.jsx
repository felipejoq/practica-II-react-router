import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import {useContext} from "react";
import {PokemonContext} from "../context/PokemonContext.js";
import {useNavigate} from "react-router-dom";
import {SERVICE_URL} from "../helpers/constants.js";

export const Search = () => {

  const {pokemonList} = useContext(PokemonContext);
  const navigate = useNavigate();

  const handleOnSelect = (pokemon) => {
    navigate(`/pokemons/${pokemon.name}`)
  }

  const formatResult = (pokemonList) => {
    return (
      <>
        <span key={pokemonList.name} style={{ display: 'block', textAlign: 'left' }}>{pokemonList.name}</span>
      </>
    )
  }

  return (
    <div style={{ width: "100%", minWidth: "230px" }}>
      <ReactSearchAutocomplete
        items={pokemonList}
        onSelect={handleOnSelect}
        autoFocus
        placeholder="Buscar pokemon..."
        formatResult={formatResult}
      />
    </div>
  );
};