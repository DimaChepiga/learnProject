/* Задания на урок:

*1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

*2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

*3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

*4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

*5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

// Возьмите свой код из предыдущей практики

function refreshListMovie() {

    const movieList = document.querySelector('.promo__interactive-list');

    movieList.innerHTML = '';

    movieDB.movies.sort();

    movieDB.movies.forEach((nameFilm, numFilm) => {
        if (nameFilm.length > 21) {
            nameFilm = nameFilm.slice(0, 21) + '...';
        }

        movieList.innerHTML += `
            <li class="promo__interactive-item">${numFilm+1} ${nameFilm}
                <div class="delete"></div>
            </li>
    
    
    `;
    });
}


function addMovieToList() {
    const buttonAdd = document.querySelector('form.add');

    buttonAdd.addEventListener('submit', function (event) {
        event.preventDefault();

        const newNameMovie = document.querySelector('.adding__input');
        const checkBoxLike = document.querySelector('form.add input[type="checkbox"]')

        if (newNameMovie.value) {
            movieDB.movies[movieDB.movies.length] = newNameMovie.value;
            console.log(movieDB.movies);
            refreshListMovie();
        }

        if (checkBoxLike.checked) {
            console.log('Добавляем любимый фЫлм');
        }
        event.target.reset();
    });


    document.querySelectorAll('.delete').forEach((btn, i) => {
        btn.addEventListener('click', () => {
            btn.parentElement.remove();
            console.log('yes');
            movieDB.movies.splice(i, 1);
            refreshListMovie(); 
            addMovieToList();
        });

    });




}




addMovieToList();