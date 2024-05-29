import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import API from "../utils/API";
import { CircularProgress, Pagination } from "@mui/material";
import MovieCard from "../components/MovieCard";

function Search() {
  const [searchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const query = searchParams.get("q");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setMovies([]);
    setTimeout(() => {
      async function fetchData() {
        if (!query) {
          return;
        }
        try {
          const data = await API.search(query, currentPage);
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
      <div className="max-w-7xl mx-auto pb-6">
        <div className="grid grid-cols-auto-fit-minmax gap-16 px-4 justify-items-center">
          {movies.length !== 0 ? movies.map(movie => <MovieCard data={movie} key={movie.id} />) : <CircularProgress />}
        </div>
      </div>
      <div className="flex items-center justify-center mt-8 mb-12">
        <Pagination
          count={6}
          currentPage={currentPage}
          onChange={handlePageChange}
          sx={{
            "& .Mui-selected": {
              backgroundColor: "#facc15", // Cor de fundo para página selecionada
              color: "#000" // Cor do texto para página selecionada
            },
            "& .MuiPaginationItem-ellipsis": {
              backgroundColor: "#facc15", // Cor de fundo para elipse
              color: "#e5e5e7" // Cor do texto para elipse
            },
            "& .MuiButtonBase-root": {
              color: "#e5e5e7" // Cor do texto para os botões de página não selecionados
            }
          }}
        />
      </div>
    </>
  );
}

export default Search;
