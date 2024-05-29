import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import API from "../utils/API";
import { CircularProgress } from "@mui/material";
import MovieCard from "../components/MovieCard";

function Search() {
  const [searchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const query = searchParams.get("q");

  useEffect(() => {
    setMovies([])
    setTimeout(() => {
      async function fetchData() {
        if (!query) {
          return;
        }
        try {
          const data = await API.search(query);
          if (data.length === 0) {
            fetchData();
          }
          setMovies(data);
        } catch (error) {
          console.error("Erro ao buscar filmes:", error);
        }
      }
      fetchData();
    }, 600);
  }, [query]);

  return (
    <>
      <h1 className="text-3xl text-center my-10 ">
        Resultados para: <span className="text-yellow-300 uppercase ">{query}</span>
      </h1>
      <div className="max-w-7xl mx-auto pb-20">
        <div className="grid grid-cols-auto-fit-minmax gap-16 px-4 justify-items-center">
          {movies.length !== 0 ? movies.map(movie => <MovieCard data={movie} key={movie.id} />) : <CircularProgress />}
        </div>
      </div>
    </>
  );
}

export default Search;
