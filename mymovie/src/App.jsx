import { useState } from "react";
import { MovieDetails } from "./components/MovieDetails";
import { SearchBar } from "./components/SearchBar";
import "./styles/App.css";

export default function App () {
  // Variables definition
  const [movieName, setMovieName] = useState("");

  // Functions
  function setMovieDetails(movie) {
      if(movie !== "") {
        setMovieName(movie);
      }
  }

  // Logic
  return (
    <div className="app-container">
      <h1>My Movie!</h1>
      <SearchBar onSubmit={setMovieDetails}/>
      <MovieDetails movieProp = {movieName}/>
    </div>
  );
}