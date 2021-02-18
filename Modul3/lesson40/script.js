'use strict';

const now = new Date(); //Текущая дата
// const now = new Date('2021-02-17'); // Год-месяц-день строкой
// const now = new Date(2020, 1, 17, 20); // Год, месяц, день, час(гринвич) цифрами

let testDate;

testDate = now.getFullYear(); //Полный год
testDate = now.getMonth(); //Месяц
testDate = now.getDate(); //Число
testDate = now.getDay(); //День недели
testDate = now.getHours(); //Час
testDate = now.getUTCHours(); //Час по Гринвичу

testDate = now.getTimezoneOffset(); //Разница между локалью и UTC
testDate = now.getTime(); //TimeSTAMP

testDate = now.setHours(18, 40); //Установить часы и минуты в дате

testDate = now.setHours(40); 
//Установить часы в дате, автоисправление все что свыше 24 часов прибавляет в следующий день


// console.log(testDate);
// console.log(now);

const start = new Date();

for (let i = 0; i < 100000; i++) {
    let some = i ** 3;
}

const end = new Date();

console.log(` ${end-start}`);