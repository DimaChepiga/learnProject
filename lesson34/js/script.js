'use strict';
/*
    touchstart  -- касание на объект
    touchmove -- движение касания по объекту
    touchend -- отрыв касания от объекта
    touchenter -- движение касанием по экрану к элементу и момент пересекания границы элемента
    touchleave -- движение касанием за пределы границы элемента
    touchcancel -- выход касания за пределы браузера 

    touches -- количество задействованных пальцев(точек) на экране
    targetTouches -- количество точек на определенном объекте
    changetTouches -- количество точек совершивших действие 

    hammer.min.js -- hammerjs.github.io  


*/

window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');

    box.addEventListener('touchstart', (e) => {
        e.preventDefault();

        console.log('yes');
        console.log(e.touches);
    });

    box.addEventListener('touchmove', (e) => {
        e.preventDefault();

        console.log('move');
    });



});