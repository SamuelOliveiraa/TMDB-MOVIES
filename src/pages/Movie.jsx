import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import API from "../utils/API";
import ShowStars from "../components/ShowStars";
import NotFound from "./NotFound";

function Movies() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [found, setFound] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const data = await API.getById(id);
      if (data.success === false) {
        setFound(true);
        return;
      }
      setMovie(data);
    }
    fetchData();
  }, [id]);
  console.log(movie);

  return (
    <div className="flex items-center justify-center max-w-5xl mx-auto md:mt-20 mt-10 md:pb-20 pb-10">
      {movie ? (
        <div className="w-full ">
          <div className="mb-10 hidden md:block">
            <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt="" className="w-11/12 mx-auto rounded-3xl  " />
          </div>
          <div className="md:max-w-4xl grid gap-8 mx-auto md:grid-cols-custom-1fr-2fr md:px-12 px-2 grid-cols-1 md:mt-16">
            <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="" className="md:w-full w-11/12 mx-auto rounded-3xl h-full" />
            <div className="md:max-w-md w-full px-8 md:p-0">
              <h2 className="text-2xl bold">{movie.original_title}</h2>
              <p className="opacity-50 font-light leading-relaxed my-5 text-xl">{movie.overview}</p>
              <div className="bg-zinc-800 text-yellow-300 my-4 w-14 rounded-md px-1 py-px">
                <ShowStars stars={movie.vote_average.toFixed(1)} />
              </div>
              <p className="flex flex-col gap-2 opacity-80 mb-3">
                <span className="opacity-50">Type</span>
                Movie
              </p>
              <p className="flex flex-col gap-2 opacity-80 mb-3">
                <span className="opacity-50">Release Date</span>
                {movie.release_date}
              </p>
              <p className="flex flex-col gap-2 opacity-80 mb-3">
                <span className="opacity-50">Run time</span>
                {`${movie.runtime} min`}
              </p>
              <p className="flex flex-col gap-2 opacity-80 mb-3">
                <span className="opacity-50">Genres</span>
                {movie.genres.map(genre => `${genre.name}, `)}
              </p>
            </div>
          </div>
        </div>
      ) : found ? (
        <NotFound />
      ) : (
        <CircularProgress />
      )}
    </div>
  );
}

export default Movies;
