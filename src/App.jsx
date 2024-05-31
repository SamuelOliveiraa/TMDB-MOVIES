import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Movie from "./pages/Movie";
import Search from "./pages/Search";
import Header from "./components/Header";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { ThemeProvider, createTheme } from "@mui/material/styles";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#facc15", // Cor principal
        contrastText: "#fff" // Cor do texto
      }
    },
    components: {
      MuiPaginationItem: {
        styleOverrides: {
          root: {
            color: "#fff", // Cor do texto para todos os itens de paginação
            "&:hover": {
              backgroundColor: "rgba(250, 204, 21, 0.8)" // Cor de fundo opaca no hover
            }
          },
          outlined: {
            "&.Mui-selected": {
              backgroundColor: "#facc15", // Cor de fundo para item selecionado
              color: "#000", // Cor do texto para item selecionado
              "&:hover": {
                backgroundColor: "rgba(250, 204, 21, 0.8)" // Cor de fundo opaca no hover
              }
            }
          }
        }
      }
    }
  });
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <Routes>
          <Route path="/TMDB-MOVIES" element={<Home />} />
          <Route path="/TMDB-MOVIES/movie/:id" element={<Movie />} />
          <Route path="/TMDB-MOVIES/search" element={<Search />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
