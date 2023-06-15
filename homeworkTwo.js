"use strict";

const numberOfFilms = prompt("Введите количество просмотренных фильмов?", "");

const moviesDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  privat: false,
};

const lastFilm = prompt('Какой фильм вы смотрели в последний раз?', ''),
      rating = +prompt('Оцените последний фильм в баллах?', ''),
      lastfilmTwo = prompt('Один из последних просмотренных вами фильмов?', ''),
      ratingTwo = +prompt('Какой из фильмов вы смотрели в последний раз?', '');

moviesDB.movies[lastFilm] = rating;
moviesDB.movies[lastfilmTwo] = ratingTwo;

console.log(moviesDB);