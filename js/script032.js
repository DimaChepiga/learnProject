'use strict';
// console.log(document.body);
// console.log(document.documentElement);
// document.body.childNodes;
// document.body.firstChild; // Возвращает текстуовую ноду
// console.log(document.body.firstElementChild); // Возвращает элемент 

// document.body.lastChild;

// console.log(document.querySelector('#current').parentNode.parentNode);
// console.log(document.querySelector('#current').parentElement);

// console.log(document.querySelector('[data-current="3"]').nextSibling); //получаем перенос строки

// console.log(document.querySelector('[data-current="3"]').previousSibling); //получаем перенос строки

// console.log(document.querySelector('[data-current="3"]').previousElementSibling); //получаем предыдущий Element

// console.log(document.querySelector('[data-current="3"]').nextElementSibling); //получаем следующий Element

for (let node of document.body.childNodes){
    if (node.nodeName == '#text'){
        continue;
    }
    console.log(node);
}

