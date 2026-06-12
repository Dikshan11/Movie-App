import React, { createContext, useState, useEffect, useContext } from "react";

const WatchListContext = createContext();

export const WatchListProvider = ({ children }) => {
    const [watchList, setWatchList] = useState([]);
    const [genreList, setGenreList] = useState([]);

    useEffect(() => {
        const url = "https://api.themoviedb.org/3/genre/movie/list?api_key=1959dc710aa218913676cc985224ff51";
        fetch(url)
            .then((res) => res.json())
            .then((data) => setGenreList(data.genres || []))
            .catch((err) => console.error("Error fetching genres:", err));
    }, []);

    const addToWatchList = (movie) => {
        setWatchList((prev) =>
            prev.find((m) => m.id === movie.id) ? prev : [...prev, movie]
        );
    };

    const removeFromWatchList = (movieId) => {
        setWatchList((prev) => prev.filter((movie) => movie.id !== movieId));
    };

    return (
        <WatchListContext.Provider
            value={{ watchList, addToWatchList, removeFromWatchList, genreList }}
        >
            {children}
        </WatchListContext.Provider>
    );
};

export const useWatchList = () => useContext(WatchListContext);
