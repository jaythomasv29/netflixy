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

  return (
    <header>
      {/** Background image to cover header */}

      {/** title */}
      {/** div > 2 buttons for Play and My List */}
      {/**Description paragraph */}
    </header>
  );
}

export default Banner;
