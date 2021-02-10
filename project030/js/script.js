/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict'; 

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

// document.querySelector('.promo__adv').remove();


const adv = document.querySelectorAll('.promo__adv img');

adv.forEach(element => {
    element.remove();
});

document.querySelector('.promo__genre').textContent = 'ДРАМА';

document.querySelector('.promo__bg').style.backgroundImage = 'url("img/bg.jpg")';

const movieList = document.querySelector('.promo__interactive-list');

// console.log(movieList.innerHTML);


movieList.innerHTML = '';

movieDB.movies.sort();

// console.log(movieList.innerHTML);

movieDB.movies.forEach( (nameFilm, numFilm) => {
    movieList.innerHTML += `
    <li class="promo__interactive-item">${numFilm+1} ${nameFilm}
                            <div class="delete"></div>
                        </li>
    
    
    `;
});
