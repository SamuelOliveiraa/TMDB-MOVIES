import { Link } from "react-router-dom";
import ShowStars from "./ShowStars";
import LazyLoadImage from "./LazyLoadImage";

function MovieCard(data) {
  const { original_title, poster_path, id, vote_average } = data.data;
  return (
    <div className="relative p-2 py-4 bg-zinc-800 items-center flex flex-col w-270 transition-all ease-in-out rounded">
      <div className="w-full">
        <div className="w-248 h-372 rounded overflow-hidden">
          <LazyLoadImage src={poster_path} />
        </div>
        <h2 className="my-2 h-12 flex items-center justify-center text-center ">{original_title}</h2>
        <div className="absolute top-2 left-3">
          <ShowStars stars={vote_average.toFixed(1)} />
        </div>
        <Link
          to={`/TMDB-MOVIES/movie/${id}`}
          className="block text-center p-3 bg-yellow-400 w-full rounded-sm text-black border-2 transition-all duration-200 ease-in-out hover:bg-transparent hover:text-yellow-400 border-yellow-400"
        >
          Details
        </Link>
      </div>
    </div>
  );
}

export default MovieCard;
