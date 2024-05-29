import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
/* import { FaStar } from "react-icons/fa6"; */
import { CircularProgress } from "@mui/material";
import API from "../utils/API";

function Movies() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const data = await API.getById(id);
      if (!data) {
        return;
      }
      setMovie(data);
    }
    fetchData();
  }, [id]);
  console.log(movie);

  return (
    <div className="flex items-center justify-center max-w-5xl mx-auto mt-20 pb-20">
      {movie ? (
        <div className="w-full ">
          <div className="mb-10">
            <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt="" className="w-full rounded-3xl" />
          </div>
          <div className="flex">
          <div className="flex ">
            <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="" />
          </div>
          <div>
            <h2>{movie.original_title}</h2>
            <p>{movie.overview}</p>
            <span>{movie.vote_average.toFixed(1)}</span>
            <p>
              <span>Type</span>
              Movie
            </p>
            <p>
              <span>Release Date</span>
              {movie.release_date}
            </p>
            <p>
              <span>Run time</span>
              {`${movie.runtime} min`}
            </p>
            <p>
              <span>Genres</span>
              {movie.genres.map(genre => genre.name)}
            </p>
          </div>
          </div>
        </div>
      ) : (
        <CircularProgress />
      )}
    </div>
  );
}

export default Movies;
