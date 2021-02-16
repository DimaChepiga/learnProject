'use srict';

const btn = document.querySelectorAll('.btn');
btn[0].addEventListener('click', () => {
    clearTimeout(timerId);
});

btn[1].addEventListener('click', () => {
    setInterval(timerId);
});

const timerId = setTimeout(logger, 7000);

function logger (text = 'test') {
    console.log(text);
    
}