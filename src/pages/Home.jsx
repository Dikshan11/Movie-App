import React, { useEffect, useState } from "react";
import Moviecard from "../components/Moviecard";

const Home = () => {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState("");

    useEffect(() => {
        let url = "";

        if (search.trim() !== "") {
            url = `https://api.themoviedb.org/3/search/movie?query=${search}&page=${page}&api_key=1959dc710aa218913676cc985224ff51`;
        } else {
            url = `https://api.themoviedb.org/3/movie/popular?page=${page}&api_key=1959dc710aa218913676cc985224ff51`;
        }

        fetch(url)
            .then((response) => response.json())
            .then((data) => setMovies(data.results || []))
            .catch((err) => console.error("Error fetching movies:", err));
    }, [page, search]);

    return (
        <div className="p-4 mt-16">
            <input
                onChange={(e) => {
                    setSearch(e.target.value);
                    setPage(1); 
                }}
                placeholder="Search for movies..."
                type="text"
                className="p-2 mt-3 w-3/4 md:w-1/2 border border-gray-700 backdrop-blur-md bg-opacity-60 bg-gray-900 z-10 rounded fixed top-16 left-1/2 transform -translate-x-1/2 text-white"
            />
            <div className="movies-card grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-16">
                {movies.length > 0 ? (
                    movies.map((movie, index) => (
                        <Moviecard key={movie.id || index} movie={movie} />
                    ))
                ) : (
                    <p className="text-white text-center col-span-full">No movies found.</p>
                )}
            </div>
            <div className="pages-container flex justify-between mt-5">
                <button
                    disabled={page === 1}
                    onClick={() => setPage((prev) => prev - 1)}
                    className="bg-gray-800 text-white p-2 rounded-lg hover:bg-gray-700 transition duration-300 disabled:opacity-50"
                >
                    Previous
                </button>
                <button
                    onClick={() => setPage((prev) => prev + 1)}
                    className="bg-gray-800 text-white p-2 rounded-lg hover:bg-gray-700 transition duration-300"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Home;
