'use strict';

// const box = document.getElementById('box');
// console.log(box);

// const buttons = document.getElementsByTagName('button');
// console.log(buttons);

// // document.getElementsByTagName('button')[0].innerText = "Button1-1";

// const circles = document.getElementsByClassName('circle');
// console.log(circles);

// const hearts = document.querySelectorAll('.heart');

// // hearts.forEach( item => {
// //     console.log(item);
// // })

// const heart1 = document.querySelector('.heart');


const   box = document.getElementById('box'),
        buttons = document.getElementsByTagName('button'),
        circles = document.getElementsByClassName('circle'),
        hearts = document.querySelectorAll('.heart'),
        heart1 = document.querySelector('.heart');

// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

const div = document.createElement('div');

div.classList.add('black');
div.innerText = 'my text';

// document.body.append(div);
// document.body.prepend(div);


//document.querySelector('.wrapper').append(div);

// hearts[0].before(div);
// hearts[1].after(div);

// circles[2].remove(); 

hearts[2].replaceWith(circles[0]);