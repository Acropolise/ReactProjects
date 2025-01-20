/* eslint-disable react/prop-types */
import axios from "axios";
import { useEffect, useState } from "react";

export function MovieDetails({movieProp}) {
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const fetchMovieData = async () => {
          const movieData = await getMovieObject(movieProp);
          setMovie(movieData);
        };
    
        if (movieProp) {
          fetchMovieData();
        }
      }, [movieProp]);
    
      if (!movie) {
        return <p>Loading...</p>;
      }
    
      return (
        <div>
          <img src={movie.Poster} alt={movie.Title} />
        </div>
      );
}

async function getMovieObject(movieProp) {
    const API_KEY = "573c16c8";
    const API_GET_MOVIE_REQUEST = `http://www.omdbapi.com/?apiKey=${API_KEY}&t=${movieProp}`;
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
