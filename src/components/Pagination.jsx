import {Button} from "react-bootstrap";
import {LIMIT} from "../helpers/constants.js";
import {useContext} from "react";
import {PokemonContext} from "../context/PokemonContext.js";

export const Pagination = () => {
  const {subValue, addValue} = useContext(PokemonContext);

  return (
    <div className="d-flex justify-content-center w-100 gap-2">
      <Button
        variant="secondary"
        onClick={() => subValue(LIMIT)}
      >
        <i className="bi bi-arrow-left"></i> Prev
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