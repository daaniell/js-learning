"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы посмотрели?", "");

    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы посмотрели?", "");
    }
}

start();

const personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
};

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        const yourGenre = prompt(`Ваш любимый жанр под номером ${i}:`);
        personalMovieDB.genres[i - 1] = yourGenre;
    }
}

writeYourGenres();

function showMyDB() {
    if (!personalMovieDB.privat)
    {
        console.log(personalMovieDB);
    }
}

showMyDB();

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const oneOfLastFilms = prompt("Один из последних просмотренных фильмов?", "film"),
                rating = prompt("Поставье оценку фильму:", "0");

        if (oneOfLastFilms != null && rating != null &&
            oneOfLastFilms != '' && rating != '' &&
            oneOfLastFilms.length < 50) {
                personalMovieDB.movies[oneOfLastFilms] = rating;
                console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}

rememberMyFilms();

function detectPersobalLevel(){
    if (personalMovieDB.count < 10)
    {
        console.log("Вы не любитель смотреть кино.");
    } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30)
    {
        console.log("Вы классический зритель.");
    } else if (personalMovieDB.count > 30)
    {
        console.log("Вы киноман.");
    } else {
        console.log("Произошла ошибка, попробуйте ещё раз."); 
    }
}

detectPersobalLevel();



