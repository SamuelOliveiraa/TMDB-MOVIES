import { Link } from "react-router-dom";
import ShowStars from "./ShowStars";
import ImgContainer from "./ImgContainer";

function MovieCard(data) {
  const { original_title, poster_path, id, vote_average } = data.data;
  return (
    <div className="p-2 py-4 bg-zinc-800 items-center flex flex-col w-270 transition-all ease-in-out">
      <div className="w-full">
        <div className="w-248 h-372">
          <ImgContainer src={poster_path} />
        </div>
        <h2 className="my-3 h-12 flex items-center justify-center text-center">{original_title}</h2>
        <ShowStars stars={vote_average.toFixed(1)} />
        <Link
          to={`/TMDB-MOVIES/movie/${id}`}
          className="block text-center mt-3 p-3 bg-yellow-400 w-full rounded-sm text-black border-2 transition-all duration-200 ease-in-out hover:bg-transparent hover:text-yellow-400 border-yellow-400"
        >
          Details
        </Link>
      </div>
    </div>
  );
}

export default MovieCard;
