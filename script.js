'use strict';

const numberOfFilms = +prompt('How much films do you seen?', '');

alert(`Woow, too mach films(${numberOfFilms})`);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actor: {},
    genres: [],
    private: false
};


const moviesName1 = prompt('One of the last seens film?', ''),
      moviesMark1 = prompt('Whats your mark?', ''),
      moviesName2 = prompt('One of the last seens film?', ''),
      moviesMark2 = prompt('Whats your mark?', '');

personalMovieDB.movies[moviesName1] = moviesMark1;
personalMovieDB.movies[moviesName2] = moviesMark2;

console.log(personalMovieDB);


