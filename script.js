/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';

// Код возьмите из предыдущего домашнего задания

const numberOfFilms = +prompt('How much films do you seen?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actor: {},
    genres: [],
    private: false
};

if (personalMovieDB.count < 10) {
    alert('You seen small numbers of films');
} else if (personalMovieDB.count < 30) {
    alert('You are classic watcher');
} else if (personalMovieDB.count > 30) {
    alert('You are flimslover');
} else alert('Error');


const moviesName = [],
      moviesMark = [];

outer: for (let i = 1; i < 3; i++) {

    moviesName[i] = prompt('One of the last seens film?', '');
    moviesMark[i] = prompt('Whats your mark?', '');
    
    if (moviesName[i].length < 50 && moviesName[i] != '' && moviesName[i] != null && moviesMark[i] != '') {
        
        personalMovieDB.movies[moviesName[i]] = moviesMark[i];

        } else {
            i--;
    }
};

console.log(personalMovieDB);


