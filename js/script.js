"use strict";

const personalMovieDB = {
    count : 0,
    movies : {},
    actors : {},
    genres : [],
    privat : true,
    start: function() {
        personalMovieDB.count = +prompt("Сколько фильмов вы посмотрели?", "");
    
        while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Сколько фильмов вы посмотрели?", "");
        }
    },
    writeYourGenres: function() {
        let yourGenre;
        for (let i = 1; i <= 3; i++) {
            yourGenre = prompt(`Ваш любимый жанр под номером ${i}:`);
            if (yourGenre == '' || yourGenre == null) {
                console.log('Некорректный ввод');
                i--;
            } else {
            personalMovieDB.genres[i - 1] = yourGenre;
            }
        }
        personalMovieDB.genres.forEach((genre, g) => {
            console.log(`Любимый жанр #${g + 1} - это ${genre}`);
        });
    },
    showMyDB: function() {
        if (!personalMovieDB.privat)
        {
            console.log(personalMovieDB);
        }
    },
    rememberMyFilms: function() {
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
    },
    detectPersobalLevel: function() {
        if (personalMovieDB.count < 10)
        {
            console.log("Вы не любитель смотреть кино.");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30)
        {
            console.log("Вы классический зритель.");
        } else if (personalMovieDB.count > 30)
        {
            console.log("Вы киноман.");
        } else {
            console.log("Произошла ошибка, попробуйте ещё раз."); 
        }
    },
    toggleVisibleMyDB: function() {
        if (!personalMovieDB.privat) {
            personalMovieDB.privat = true;
        }
        else {
            personalMovieDB.privat = false;
        }
    }
};

// personalMovieDB.start();

// personalMovieDB.writeYourGenres();

// personalMovieDB.toggleVisibleMyDB();

// personalMovieDB.showMyDB();

// personalMovieDB.rememberMyFilms();

// personalMovieDB.detectPersobalLevel();
