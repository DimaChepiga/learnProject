'use srict';

/* const btn = document.querySelectorAll('.btn');
btn[0].addEventListener('click', () => {
    clearTimeout(timerId);
});

btn[1].addEventListener('click', () => {
    setInterval(timerId);
});

// const timerId = setTimeout(logger, 7000);

function logger (text = 'test') {
    console.log(text);
    
} */

/* let id = setTimeout(function log() {
    console.log('Hello');
    id = setTimeout(log, 500);
}, 500); */

const btn = document.querySelector('.btn');
btn.addEventListener('click', myAnimation);

function myAnimation() {
   const elem = document.querySelector('.box');
   let pos = 0;

   const idFrame = setInterval( frame, 10);

   function frame() {
       if (pos == 200) {
           clearInterval(idFrame);
       } else {
           pos++;
           elem.style.top = pos + "px";
           elem.style.left = pos + "px";
       }
   }

    
}



