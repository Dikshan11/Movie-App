import React from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useWatchList } from "../context/WatchListContext"; // <-- FIXED

const Moviecard = ({ movie }) => {
  const { watchList, addToWatchList, removeFromWatchList } = useWatchList();

  const isInWatchList = watchList.some((item) => item.id === movie.id);

  return (
    <div className=" bg-gray-800 p-4 rounded-lg shadow-md text-white relative">
        <img className="w-full h-80 object-contain rounded-sm" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
        <h3 className="text-lg font-bold mt-4">{movie.title}</h3>
        <p className=" text-sm text-gray-400">{movie.release_date?.split("-")[0]}</p>
        <button onClick={() => {
          if (isInWatchList) {
            removeFromWatchList(movie.id);
          } else {
            addToWatchList(movie);
          }
        }} className=" absolute top-2 right-2 text-red-500 text-xl">
            {isInWatchList ? <FaHeart/> : <FaRegHeart />}
        </button>
    </div>
  );
};

export default Moviecard;