"use strict";

const numberOfFilms = prompt("Сколько фильмов вы посмотрели?", "");
console.log(numberOfFilms);

const personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
};

const oneOfLastFilms = prompt("Один из последних просмотренных фильмов?", "film");
const rating = prompt("Поставье оценку фильму:", "1");

console.log(oneOfLastFilms);
console.log(rating);

personalMovieDB["movies"] = {oneOfLastFilms, rating};

console.log(personalMovieDB);
