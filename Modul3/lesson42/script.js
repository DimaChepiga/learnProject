'use strict';

const box = document.querySelector('.box');

/* const width = box.clientWidth;
const height = box.clientHeight;
 */

const width = box.offsetWidth;
const height = box.offsetHeight;

// console.log(`${width} ${height}`);

// console.log(box.getBoundingClientRect());

const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    console.log(box.scrollTop);
    box.scrollTop = 200;
    document.documentElement.scrollTop = 200;

    // box.style.height = `${box.scrollHeight}px`; // Расскрываем scroll
});

// const style = window.getComputedStyle(box); //Взять установленные через css данные стилей - все.

// console.log(style);

console.log(document.documentElement.scrollHeight); //Взять данные всего документа, не элемента


