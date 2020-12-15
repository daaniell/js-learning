"use strict";

let oneOfLastFilms = null;
let rating = null;
const numberOfFilms = +prompt("Сколько фильмов вы посмотрели?", "");
if (numberOfFilms == "") {
    
}

const personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
};

for (let i = 0; i < 2; i++) {
    oneOfLastFilms = prompt("Один из последних просмотренных фильмов?", "film"),
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

personalMovieDB["movies"] = {oneOfLastFilms, rating};
console.log(personalMovieDB);

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

