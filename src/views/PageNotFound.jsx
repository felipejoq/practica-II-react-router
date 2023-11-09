import notFoundImg from "../assets/404.png";
import {Link} from "react-router-dom";
export const PageNotFound = () => {
  return (
    <div className="text-center w-100">
      <h1>Página no encontrada</h1>
      <p>La página que estás buscando no se pudo encontrar o no existe.</p>
      <p>
        <Link className="text-muted" to="/">
          Volver al Inicio
        </Link>
      </p>
      <img
        src={notFoundImg}
        alt="Imagen de 404 Not Found"
        style={{ maxWidth: '50%', height: 'auto' }}
      />
    </div>
  );
};