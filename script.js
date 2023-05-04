/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('How much films do you seen?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('How much films do you seen?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actor: {},
    genres: [],
    private: false
};

function rememberMyFilms() {
    const moviesName = [],
        moviesMark = [];

    for (let i = 1; i < 3; i++) {

        moviesName[i] = prompt('One of the last seens film?', '');
        moviesMark[i] = prompt('Whats your mark?', '');
        
        if (moviesName[i].length < 50 && moviesName[i] != '' && moviesName[i] != null && moviesMark[i] != '') {
            
            personalMovieDB.movies[moviesName[i]] = moviesMark[i];

            } else {
                i--;
            }
     }
};

function directPersonalLevel() {
   
    if (personalMovieDB.count < 10) {
        alert('You seen small numbers of films');
    } else if (personalMovieDB.count < 30) {
        alert('You are classic watcher');
    } else if (personalMovieDB.count > 30) {
        alert('You are flimslover');
    } else alert('Error');

};

function showMyDB(hidden) {
   
    if (!hidden) {
        console.log(personalMovieDB)
    }
};


function writeYourGenres() {
    
    for (let i = 0; i < 3; i++) {
        
        if (favGenres != '' && favGenres != null) {
            
            personalMovieDB.genres[i] = prompt(`Whats your favourite genres num. ${i + 1}?`, '');

            } else {
                i--;
            }
     }
}


directPersonalLevel();

rememberMyFilms();

writeYourGenres();

showMyDB(personalMovieDB.private);

// let i = 1;
// while (i < 3) {

//     moviesName[i] = prompt('One of the last seens film?', '');
//     moviesMark[i] = prompt('Whats your mark?', ''); 

//     if (moviesName[i].length < 50 && moviesName[i] != '' && moviesName[i] != null && moviesMark[i] != '') {
        
//         personalMovieDB.movies[moviesName[i]] = moviesMark[i];
//         console.log('done');
//         i++;

//         } else if ( i == 1) {
            
//             console.log('fail');
//             i = 1;

//         } else if ( i == 2) {
            
//             console.log('fail');
//             i = 2;

//         } else {

//             console.log('fail');
//             i--;

//         }
//     };
