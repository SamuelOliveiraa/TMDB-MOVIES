import PropTypes from "prop-types"; // Importe o PropTypes
import { LuImageOff } from "react-icons/lu";

function ImgContainer(props) {
  const { src } = props;

  return (
    <div className="w-248 h-372 text-yellow-300 text-6xl flex items-center justify-center bg-zinc-900">
      {src ? <img src={`https://image.tmdb.org/t/p/w342${src}`} alt="" /> : <LuImageOff />}
    </div>
  );
}

// Defina os tipos das props usando PropTypes
ImgContainer.propTypes = {
  src: PropTypes.string.isRequired // Defina src como uma string obrigatório
};

export default ImgContainer;
