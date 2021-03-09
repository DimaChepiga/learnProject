'use strict';

// Filter

const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemart'];

const shortNames = names.filter((name) => {
    return name.length < 5;
});

console.log(shortNames);

// map

const answers = ['IvaN', 'AnnA', 'Hello'];

const result = answers.map(item => item.toLowerCase());

console.log(result);

// можно и так, но так сказали нехорошо, надо как выше
/* let answers = ['IvaN', 'AnnA', 'Hello'];

answers = answers.map(item => item.toLowerCase());

console.log(answers); */


// every / some

const some = [4, 'aaaaa', 'bbbbb'];

console.log(some.some( item => typeof(item) === 'number')); //? Хотя бы один соответсвует условию

console.log(some.every( item => typeof(item) === 'number')); //? все должны соответствовать условию


// reduce 

const arr = [4, 5, 1, 3, 2, 6];

// const res = arr.reduce((sum, current) => sum + current, 3); //? Второй аргумент, после call функции, начальное значение sum
const res = arr.reduce((sum, current) => sum + current);

console.log(res);

const arrStr = ['4', '5', '1', '3', '2', '6'];

// const resStr = arrStr.reduce((sum, current) => sum + ', ' + current);
const resStr = arrStr.reduce((sum, current) => `${sum}, ${current}`, 'This is numbers ');

console.log(resStr); //Трындобол насчет запятых, но при начальном значении добавляет


const obj = {
    ivan: 'persone',
    ann: 'persone',
    Ritz: 'animal',
    Margo: 'animal'
};

const newArr = Object.entries(obj) //? превращаем объект в массив массивов и дальше работаем
.filter(item => item[1] === 'persone')
.map(item => item[0]);

console.log(newArr);