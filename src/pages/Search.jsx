import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import API from "../utils/API";
import { CircularProgress, Pagination } from "@mui/material";
import MovieCard from "../components/MovieCard";
import NotFound from "./NotFound";

function Search() {
  const [searchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const query = searchParams.get("q");
  const [currentPage, setCurrentPage] = useState(1);
  const [notFound, setNotFound] = useState(null);

  useEffect(() => {
    setMovies([]);
    setNotFound(null);
    setTimeout(() => {
      async function fetchData() {
        if (!query) {
          return;
        }
        try {
          const data = await API.search(query, currentPage);
          if (data.length === 0) {
            setNotFound(true);
            return;
          }
          setMovies(data);
        } catch (error) {
          console.error("Erro ao buscar filmes:", error);
        }
      }
      fetchData();
    }, 600);
  }, [query, currentPage]);

  function handlePageChange(e, value) {
    setCurrentPage(value);
    setMovies([]);
  }

  return (
    <>
      <h1 className="text-3xl text-center my-10">
        Resultados para: <span className="text-yellow-300 uppercase ">{query}</span>
      </h1>
      {movies.length === 0 ? (
        <div className="flex items-center justify-center">{notFound ? <NotFound /> : <CircularProgress />}</div>
      ) : (
        <>
          <div className="max-w-7xl mx-auto pb-6">
            <div className="grid grid-cols-auto-fit-minmax gap-x-10 gap-y-12 px-4 justify-items-center">
              {movies.length !== 0 ? movies.map(movie => <MovieCard data={movie} key={movie.id} />) : <CircularProgress />}
            </div>
          </div>
          <div className="flex items-center justify-center mt-8 mb-12">
            <Pagination count={6} currentPage={currentPage} onChange={handlePageChange} color="primary" />
          </div>
        </>
      )}
    </>
  );
}

export default Search;
