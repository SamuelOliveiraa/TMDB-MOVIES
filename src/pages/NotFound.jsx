import { Link } from "react-router-dom";
import ErrorMovie from "../../public/movie-not-found.svg";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center mt-10 pb-20 text-center">
      <img src={ErrorMovie} alt="Imagem de erro" />
      <h1 className="text-3xl mt-5">Lost your way?</h1>
      <p className="opacity-50 max-w-sm text-center my-4 p-2"> Oops! It seems like you didn´t find what you were looking for, right?</p>
      <Link to="/TMDB-MOVIES" className="bg-yellow-300 p-3 rounded-md text-black">
        Go Home
      </Link>
    </div>
  );
}

export default NotFound;
