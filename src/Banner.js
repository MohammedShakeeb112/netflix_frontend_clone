import React, { useEffect, useState } from "react";
// 1.37.56
import axios from "./axios";
import requests from "./requests";
import "./Banner.css";

function Banner(props) {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      // console.log(request);
      // console.log(
      //   request.data.results[
      //     Math.floor(Math.random() * request.data.results.length - 1)
      //   ]
      // );
      // console.log(requests.fetchNetflixOriginals);
    }
    fetchData();
  }, []);
  // console.log(movie)
  // console.log("TEST");
  // console.log(movie.backdrop_path);
  // console.log(`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`);
  // console.log(movie?.title)
  // console.log(movie?.name)
  // console.log(movie?.original_name)

  // function truncate(str, n) {
  //   return str?.length > n ? str.substring(0, n - 1) + "..." : str;
  // }
  // console.log(movie?.overview.substr(0, 125-1));
  // console.log(movie?.overview);

  return (
    //  {/** <<< Background image */}
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
        "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
        )`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        {/* title */}
        {/* <h2>{props.single}</h2> */}
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        {/* div => 2 buttons */}
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">MyList</button>
        </div>
        {/* description */}
        <h1 className="banner__description">
          {movie?.overview}
          {/* {truncate(movie?.overview, 150)} */}
        </h1>
      </div>

      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;
