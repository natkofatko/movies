import React, { Component } from 'react';

const IMAGE =
  'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg';

const Movie = ({ movie }) => {
  const poster = movie.Poster === 'N/A' ? IMAGE : movie.Poster;
  return (
    <div className="movie">
      <h2>{movie.Title}</h2>
      <div>
        <img width="200" height="280 auto" alt={movie.Title} src={poster}></img>
      </div>
      <p className="para">{movie.Year}</p>
      <p className="para">{movie.Type}</p>
    </div>
  );
};

export default Movie;
