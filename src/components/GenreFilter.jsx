import React from "react";

const GenreFilter = ({ genreList = [], selectedGenre, onChange }) => {
  return (
    <select
      name="genre"
      id="genre"
      value={selectedGenre}
      onChange={onChange}
      className="p-2 mb-4 border border-gray-700 rounded bg-gray-800 text-white bg-opacity-60 backdrop-blur-md"
    >
      <option value="all">All Genres</option>
      {genreList.map((genre) => (
        <option key={genre.id} value={genre.id}>
          {genre.name}
        </option>
      ))}
    </select>
  );
};

export default GenreFilter;
