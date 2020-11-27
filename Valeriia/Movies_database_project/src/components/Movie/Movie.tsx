import React from "react";
import { IMovie } from "../../types";
import "./Movie.scss";

interface IMovieProps {
  movie: IMovie;
}

const Movie = ({ movie }: IMovieProps) => (
  <div className="movie">
    <div className="movie__description">
      <div className="movie__poster">
        <img
          src={movie.poster_path}
          alt={movie.title}
          className="movie__img"
        ></img>
      </div>
      <div className="movie__info">
        <div className="movie__heading">
          <h2>{movie.title}</h2>
          <p>{movie.vote_average}</p>
        </div>
        <h2>{movie.genres.slice(0, 1)}</h2>
        <span className="movie__genre">{movie.release_date.substr(0, 4)}</span>
        <span>{movie.runtime || "123"} min</span>
        <p>{movie.overview}</p>
      </div>
    </div>
  </div>
);

export default Movie;
