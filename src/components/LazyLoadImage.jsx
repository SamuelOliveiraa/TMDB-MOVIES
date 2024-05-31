import { useState } from "react";
import PropTypes from "prop-types";
import { LuImageOff } from "react-icons/lu";

function ImageComponent({ src }) {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  return (
    <>
      {src ? (
        <>
          {!isLoaded && <div className={`w-full h-full bg-zinc-700 animate-pulse ${isLoaded ? "block" : "none"}`} />}
          <img
            src={`https://image.tmdb.org/t/p/w342${src}`}
            alt="Descrição da imagem"
            onLoad={handleImageLoad}
            className={`${isLoaded ? "block" : "hidden"} w-full h-full`}
          />
        </>
      ) : (
        <>
          <div className="w-full h-full text-yellow-300 text-6xl flex items-center justify-center">
            <LuImageOff />
          </div>
        </>
      )}
    </>
  );
}

// Defina os tipos das props usando PropTypes
ImageComponent.propTypes = {
  src: PropTypes.string.isRequired // Defina src como um número obrigatório
};

export default ImageComponent;
