/* eslint-disable react/prop-types */
import axios from "axios";
import { useEffect, useState } from "react";

export function MovieDetails({movieName}) {
    const [movie, setMovie] = useState(null); // State to hold the movie data

    useEffect(() => {
        const fetchMovieData = async () => {
          const movieData = await getMovieObject(movieName);
          setMovie(movieData); // Update the state with the movie data
        };
    
        if (movieName) {
          fetchMovieData(); // Fetch the movie details if a movie name is provided
        }
      }, [movieName]); // Run this effect every time movieName changes
    
      if (!movie) {
        return <p>Loading...</p>; // Display loading message while fetching data
      }
    
      return (
        <div>
          <img src={movie.Poster} alt={movie.Title} />
        </div>
      );
}

async function getMovieObject(movieName) {
    const API_KEY = "573c16c8";
    const API_GET_MOVIE_REQUEST = `http://www.omdbapi.com/?apiKey=${API_KEY}&t=${movieName}`;
    console.log(API_GET_MOVIE_REQUEST);

    let response = "";
    try {
        response = await axios.get(API_GET_MOVIE_REQUEST);
      }
      catch (error) {
        console.error("Error fetching weather data:", error);
    }

    return response.data;
}