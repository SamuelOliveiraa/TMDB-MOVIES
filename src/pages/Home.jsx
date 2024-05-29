import { useState } from "react";
import MovieCard from "../components/MovieCard";
import API from "../utils/API";
import { useEffect } from "react";
import { CircularProgress } from "@mui/material";

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      async function fetchData() {
        const data = await API.get();
        if (data.length === 0) {
          fetchData();
        }
        setMovies(data);
      }
      fetchData();
    }, 400)
  }, []);

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="my-12 text-4xl text-center">Melhores Filmes</h1>
      <div className="grid grid-cols-auto-fit-minmax gap-16 px-4 justify-items-center">
        {movies.length !== 0 ? movies.map(movie => <MovieCard data={movie} key={movie.id} />) : <CircularProgress />}
      </div>
    </div>
  );
}

export default Home;
