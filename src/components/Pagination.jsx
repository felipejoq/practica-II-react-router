import {Button} from "react-bootstrap";
import {LIMIT} from "../helpers/constants.js";
import {useContext} from "react";
import {PokemonContext} from "../context/PokemonContext.js";

export const Pagination = () => {
  const {subValue, addValue, resetValue} = useContext(PokemonContext);

  return (
    <div className="d-flex justify-content-center w-100 gap-2">
      <Button
        variant="primary"
        onClick={() => subValue(LIMIT)}
      >
        <i className="bi bi-arrow-left"></i> Prev
      </Button>
      <Button
        variant="secondary"
        onClick={() => resetValue(0)}
      >
        <i className="bi bi-house-door"></i> Inicio
      </Button>
      <Button
        variant="primary"
        onClick={() => addValue(LIMIT)}
      >
        Next <i className="bi bi-arrow-right"></i>
      </Button>
    </div>
  );
};