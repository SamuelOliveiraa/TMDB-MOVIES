import { Link } from "react-router-dom";
import ErrorMovie from "../../public/movie-not-found.svg";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <img src={ErrorMovie} alt="Imagem de erro" />
      <h1 className="text-3xl mt-5">Filme não encontrado!</h1>
      <p className="opacity-50 max-w-sm text-center my-4"> Oops! Parece que voce não econtrou o que estava procurando, não é mesmo?</p>
      <Link to="/TMDB-MOVIES" className="bg-yellow-300 p-3 rounded-md text-black">Pagina Inical</Link>
    </div>
  );
}

export default NotFound;
