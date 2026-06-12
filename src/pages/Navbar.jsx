import React from "react";
import { Link } from 'react-router-dom';
import { useWatchList } from "../context/WatchListContext"; 

const Navbar = () => {
  const { watchList } = useWatchList(); 
  return (
   <nav className="bg-gray-800 p-4 fixed top-0 w-full text-white flex justify-between z-10">
    <Link className="text-white text-xl font-bold hover:text-red-500 transition duration-300" to="/">MovieApp</Link>
    <Link className="text-xl text-white hover:text-red-500 transition duration-300" to="/watchlist">Watchlist ({watchList.length})</Link>
   
   </nav>
  );
};

export default Navbar;