import {Link} from "react-router-dom";
import pokeball from "../assets/pokeball.png"

export const Home = () => {
  return (
    <div className="d-flex justify-content-center my-4">
      <main className="text-center">
        <h1>¡Bienvenidos Maestros(as) Pokemon!</h1>
        <img src={pokeball} alt="Pokeball" style={{width: "200px"}}/>
        <p>¡Hola, entrenador(a)!</p>
        <p>¿Quieres saber más sobre los Pokemons? ¡Estás en el lugar correcto!</p>
        <p>En esta Pokedex encontrarás información sobre todos los Pokémon que existen, desde los más clásicos hasta los
          más recientes.</p>
        <Link className="btn btn-success" to="/pokemons">
          <div className="d-flex gap-2 ">
            <i className="bi bi-briefcase"></i> ¡Ir a los Pokemons!
          </div>
        </Link>
      </main>
    </div>
  );
};