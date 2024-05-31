import { Link, useNavigate } from "react-router-dom";
import { BiCameraMovie } from "react-icons/bi";
import { IoSearchSharp } from "react-icons/io5";
import { useState } from "react";

function Header() {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (!inputValue) {
      return;
    }

    navigate(`/TMDB-MOVIES/search?q=${inputValue}`);
    setInputValue("");
  }

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  return (
    <div className="bg-zinc-900 px-3 md:px-6 sticky top-0 z-10">
      <header className="max-w-7xl mx-auto py-4 flex items-center justify-between gap-2">
        <nav>
          <Link to="/TMDB-MOVIES" className="flex items-center gap-1 md:text-2xl text-lg text-yellow-300">
            <BiCameraMovie />
            <span>MoviesLib</span>
          </Link>
        </nav>
        <form className="flex max-w-40 md:max-w-44 gap-1" onSubmit={handleSubmit}>
          <input
            type="text"
            value={inputValue}
            onChange={e => handleChange(e)}
            placeholder="Search a movie"
            name="movie"
            className="w-full rounded-sm text-black py-1 px-2 text-sm "
          />
          <button className="bg-yellow-300 p-1 rounded-sm text-black text-xl   border-yellow-300 border-2 hover:bg-transparent hover:text-yellow-300 transition-all duration-200 ease-in-out">
            <IoSearchSharp />
          </button>
        </form>
      </header>
    </div>
  );
}

export default Header;
