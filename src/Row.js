import React, { useState, useEffect } from "react";
import axios from "./axios"; //import axios helper file
import "./Row.css";

const base_url = "https://image.tmdb.org/t/p/original/";

export default function Row({ title, fetchUrl }) {
  // state to store movie data
  // Declare a new state variable, which we'll call "movies"

  const [movies, setMovies] = useState([]); // * useState  HOOK to store

  // A snippet of code which runs based on a specific condition/variable
  // *useEffect HOOK (similar to componentDidMount and componenetDidUpdate)
  useEffect(() => {
    // Similar to component did mount ( runs once )
    // Update the document using API with async function
    async function fetchData() {
      //wait for a response,
      const request = await axios.get(fetchUrl);
      // console.log(request)
      setMovies(request.data.results); //

      return request;
    }
    fetchData();
    // dependency for useEffect that is outside of function
  }, [fetchUrl]);
  console.log(movies);
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className="row__poster"
            src={`${base_url}${movie.poster_path}`}
            alt={movie.name}
          />
        ))}
      </div>

      {/** container => posters 
        container with posters inside
      */}
    </div>
  );
}
