import React, { useEffect, useState } from "react";

import axios from "./axios";

import "./Row.css";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row( {title, fetchUrl, isLargeRow} ) {
  const [movies, setMovies] = useState([]);

  // A snippet of code which runs based on a specific condition/variable
  useEffect(() => {
    // if [], run once when the row loads, and dont run again
    async function fetchData() {
      const request = await axios.get(fetchUrl); //"https://api.themoviedb.org/3".get(/discover/tv?api_key=${API_KEY}&with_networks=213)
      // response => "https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213"
      // console.log(request.data.results);
      // console.log(request.data.results.length);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  //   console.log(movies);
  // console.log(fetchUrl);

  return (
    <div className="row">
      {/* title */}
      {/* container -> posters */}

      <h2>{title}</h2>
      <div className="row__posters">
        {/* several row__posters(s) */}
        {movies.map((movie) => (
          <img
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            key={movie.id}
            // src={`${base_url}${movie.poster_path}`}  // poster_path => portrait & backdrop_path => landscape
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
