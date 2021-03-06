import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
import axios from "./axios"; //import axios helper file
import "./Row.css";
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original/";

export default function Row({ title, fetchUrl }) {
  // state to store movie data
  // Declare a new state variable, which we'll call "movies"

  const [movies, setMovies] = useState([]); // * useState  Hook to store
  const [trailerUrl, setTrailerUrl] = useState(""); // * useState Hook to store trailerUrl

  // A snippet of code which runs based on a specific condition/variable
  // *useEffect HOOK (similar to componentDidMount and componenetDidUpdate)
  useEffect(() => {
    // Similar to component did mount ( runs once )
    // Update the document using API with async function
    async function fetchData() {
      //wait for a response,
      const request = await axios.get(fetchUrl);

      setMovies(request.data.results); //

      return request;
    }
    fetchData();
    // dependency for useEffect that is outside of function
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      //
      autoplay: 1,
    },
  };

  // click event for when img tag is clicked
  const handleClick = (movie) => {
    // if video is open
    if (trailerUrl) {
      // set trailerUrl to empty if a trailerUrl already exists
      setTrailerUrl("");
    } else {
      // handle showing of setTrailer
      movieTrailer(movie?.title || "404")
        // .then chain promise
        .then((url) => {
          // wrap in URL Search Param to get the querystring
          // https://www.youtube.com/watch?v=4XP6T1CMgBQ ** everything after ? **
          const urlParams = new URLSearchParams(new URL(url).search);
          // If the URL of your page is https://example.com/?name=Jonathan&age=18 you could parse out the 'name' and 'age' parameters
          setTrailerUrl(urlParams.get("v")); // get value of querystring param variable v=value
        })
        // catch error
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            className="row__poster"
            src={`${base_url}${movie.poster_path}`}
            alt={movie.name}
          />
        ))}
      </div>
      {/* conditional render to show youtube video if it exists */}
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}
