/* eslint-disable react/prop-types */
import { useState } from "react";
import "../styles/App.css";

export function SearchBar({onSubmit}) {
  // Variables Definition
  const [movie, setMovie] = useState("");

  // Functions
  function handleSubmitMovie(e) {
    e.preventDefault();

    if(movie !== "") {
      onSubmit(movie);

      setMovie("");
    }
  }

  // Logic

  return (
      <form onSubmit={handleSubmitMovie} className="searchBar">
          <input
          value={movie}
          onChange={(e) => setMovie(e.target.value)}
          type="text"
          />

          <button>Add Movie</button>
      </form>
  );
}