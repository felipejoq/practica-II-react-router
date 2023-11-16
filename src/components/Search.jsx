import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import {useContext, useState} from "react";
import {PokemonContext} from "../context/PokemonContext.js";
import {useNavigate} from "react-router-dom";

export const Search = () => {

  const {pokemonList} = useContext(PokemonContext);
  const navigate = useNavigate();
  const [searchString, setSearchString] = useState("")

  const handleOnSearch = (string) => {
    setSearchString(string);
  };

  const handleOnSelect = (pokemon) => {
    navigate(`/pokemons/${pokemon.name}`)
    setSearchString("");
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
        inputSearchString={searchString}
        onSearch={handleOnSearch}
        styling={{ zIndex: 4 }}
      />
    </div>
  );
};