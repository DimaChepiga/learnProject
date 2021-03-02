"use strict";

const persone = {
    name: 'Alex',
    tel: '+77777777',
    parents: {
        mom: 'Olga',
        dad: 'Mike'
    }
};

console.log(JSON.stringify(persone)); 
//? Конвертация объекта в JSON формат

console.log(JSON.parse(JSON.stringify(persone))); 
//? Конвертация входящего JSON to Object


const clone = JSON.parse(JSON.stringify(persone)); 
//? Полная копия объекта. Без относительных ссылок

clone.parents.mom = 'Nataly';

console.log(persone);
console.log(clone);

