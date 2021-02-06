import React, { useState, useEffect } from "react";

import axios from "./axios"; //import axios helper file
import requests from "./requests";
import "./banner.css";

function Banner() {
  // useState hook to use state in functional component
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      const randomPosition = Math.floor(
        Math.random() * request.data.results.length
      );
      setMovie(request.data.results[randomPosition]); // random movie set as state
      return request;
    }
    fetchData();
  }, []);

  console.log(movie);
  // A function to truncate long movie description text
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
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
      {/** Background image to cover header */}

      {/** title */}
      {/**Description paragraph */}
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        {/** div > 2 buttons for Play and My List */}
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>

        <h1 className="banner__description">
          {truncate(movie?.overview, 270)}
        </h1>
      </div>
      <div className="banner__fadeBottom"></div>
    </header>
  );
}

export default Banner;
