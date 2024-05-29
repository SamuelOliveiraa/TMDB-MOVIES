import { Link } from "react-router-dom";
import ShowStars from "./ShowStars";

function MovieCard(data) {
  const { original_title, poster_path, id, vote_average} = data.data;
  return (
    <div className="p-2 py-4 bg-zinc-800 items-center flex flex-col max-w-96">
      <div className="">
        <img src={`https://image.tmdb.org/t/p/w342${poster_path}`} alt="" />
        <h2 className="my-3">{original_title}</h2>
        <ShowStars stars={vote_average.toFixed(1)} />
        <Link to={`/movie/${id}`} className="block text-center mt-3 p-3 bg-yellow-400 w-full rounded-sm text-black border-2 transition-all duration-200 ease-in-out hover:bg-transparent hover:text-yellow-400 border-yellow-400">
          Detalhes
        </Link>
      </div>
    </div>
  );
}

export default MovieCard;
