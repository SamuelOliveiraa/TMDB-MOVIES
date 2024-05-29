import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa6";
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
  console.log(movie)

  return (
    <div className="flex items-center justify-center max-w-lg mx-auto mt-20 ">
      {movie ? (
        <div>
          <div className="flex flex-col items-center gap-2 text-xl">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.original_title} />
            <h1>{movie.original_title}</h1>
            <span className="my-2 flex items-center gap-2">
              <FaStar className="text-yellow-400" /> Stars
            </span>
            <p>{movie.tagline}</p>
          </div> 
          <div className="w-full mt-9">
            <div>
              <span className="my-2 flex items-center gap-2">
                <FaStar className="text-yellow-400" /> Orçamento:
              </span>
              <p>{movie.budget}</p>
            </div>
            <div>
              <span className="my-2 flex items-center gap-2">
                <FaStar className="text-yellow-400" /> Receita:
              </span>
              <p>{movie.revenue}</p>
            </div>
            <div>
              <span className="my-2 flex items-center gap-2">
                <FaStar className="text-yellow-400" /> Duração:
              </span>
              <p>{movie.runtime}</p>
            </div>
            <div>
              <span className="my-2 flex items-center gap-2">
                <FaStar className="text-yellow-400" /> Descrição:
              </span>
              <p>{movie.overview}</p>
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
