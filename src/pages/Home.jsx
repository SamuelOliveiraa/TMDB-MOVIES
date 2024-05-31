import { useState } from "react";
import MovieCard from "../components/MovieCard";
import API from "../utils/API";
import { useEffect } from "react";
import { CircularProgress, Pagination } from "@mui/material";

function Home() {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setTimeout(() => {
      async function fetchData() {
        const data = await API.get(currentPage);
        if (data.length === 0) {
          fetchData();
        }
        setMovies(data);
      }
      fetchData();
    }, 600);
  }, [currentPage]);

  function handlePageChange(e, value) {
    setCurrentPage(value);
    setMovies([]);
  }

  return (
    <div className="max-w-7xl mx-auto pb-20">
      <h1 className="my-12 text-4xl text-center">Best Movies</h1>

      <div className="grid grid-cols-auto-fit-minmax gap-x-10 gap-y-12 px-4 justify-items-center">
        {movies.length !== 0 ? movies.map(movie => <MovieCard data={movie} key={movie.id} />) : <CircularProgress />}
      </div>
      <div className="flex items-center justify-center mt-12">
        <Pagination count={6} page={currentPage} onChange={handlePageChange} color="primary" />
      </div>
    </div>
  );
}

export default Home;
