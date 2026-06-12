import React, { useContext, useState } from "react";
import GenreFilter from "../components/GenreFilter";
import Moviecard from "../components/Moviecard";
import { useWatchList } from "../context/WatchListContext"; // FIXED

const Watchlist = () => {
  const { watchList } = useWatchList(); // FIXED

  const [search, setSearch] = useState("");
  const filteredMovies = watchList.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4 mt-16">
      <input onChange={(e) => setSearch(e.target.value)} placeholder="Search for movies..." type="text"
        className="p-2 mt-3 w-3/4 md:w-1/2 border border-gray-700 backdrop-blur-md bg-opacity-60 bg-gray-900 z-10 rounded fixed top-16 left-1/2 transform -translate-x-1/2 text-white" />
   
   <div className=" mt-16 flex justify-center">
   </div>
            <div className="movies-card grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-16">
                {watchList.length > 0 ? (
                    filteredMovies.map((movie, index) => (
                        <Moviecard key={movie.id || index} movie={movie} />
                    ))
                ) : (
                    <p className="text-white text-center col-span-full">No movies found.</p>
                )}
            </div>
    </div>
  );
};

export default Watchlist;