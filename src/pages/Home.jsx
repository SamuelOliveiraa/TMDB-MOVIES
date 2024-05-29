import { useState } from "react";
import MovieCard from "../components/MovieCard";
import API from "../utils/API";
import { useEffect } from "react";
import { CircularProgress, Pagination } from "@mui/material";

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
    }, 600);
  }, []);

  return (
    <div className="max-w-7xl mx-auto pb-20">
      <h1 className="my-12 text-4xl text-center">Melhores Filmes</h1>
      
      <div className="grid grid-cols-auto-fit-minmax gap-16 px-4 justify-items-center">
        {movies.length !== 0 ? movies.map(movie => <MovieCard data={movie} key={movie.id} />) : <CircularProgress />}
      </div>
      <div className="flex items-center justify-center mt-12">
      <Pagination
        count={10}
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
    </div>
  );
}

export default Home;
