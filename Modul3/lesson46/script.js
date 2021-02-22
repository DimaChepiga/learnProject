'use strict';

//! 1) Если используем строгий режим 'use strict', то при вызове this = undefined, 
//! если режим не строгий, что в общем то теперь запрещено, то будет this = window


// 1)
/* function showThis(a, b) {
    // console.log(this); //undefined becouse 'use strict'
    function sum() {
        // console.log(this.sum); //undefined becouse 'use strict'
        return a + b;
        
    }
    console.log(sum());
}

showThis(2,5);
 */
// end 1)

//! 2) Функция внутри функции это функция
//! Функция внутри объекта это метод - метод имеет this, функция не имеет this, вывод: метод имеет!
//! Контекст this у объектов работает, у функций не работает. Если функция внутри метода, то она теряет доступ к 
//! контексту. см пример

/* const obj = {
    a: 20,
    b: 15,
    sum: function () {
        console.log(this.a + this.b);
        function bbb (a = this.a) {  //даже на уровне инициализации this потерян
            console.log(this); // Нет такого
            
        }
    }
};

obj.sum();
 */
// end 2)

//! 3) конструктор
//! this в конструкторах и классах вызванный через new это новый экземпляр объекта
//! если вызов идет через точку this. то это вызов текущего объекта

/* function User(name,id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function () {
        console.log(`Hello ${this.name}`);        
    }

    
}
const ivan = new User('Ivan', 28);
 */
// end 3)

//! 4) присвоение this функциям в ручную call, apply, bind

/* function sayName(surname) {
    console.log(this);

    console.log(`${this.name} ${surname}` );
}

const user = {
    name: 'Dima'
};


sayName.call(user, 'Chepiga', 'nik'); // через запятую
sayName.apply(user, ['Chepiga','Nik']); // массив, как принять и распарсить массив, думай


function count(num) {
    return this * num;
}

const double = count.bind(2); // Создает новую функцию, в this переходит аргумент bind()

console.log(double(13));
 */
// end 4)


//! стрелочные функции внутри объекта или внутри функции не имеет собственного контекста, а берет его у родителя


const btn = document.querySelector('button');

/* btn.addEventListener('click', function () { //! this взят у родителя button
    console.log(this);
    this.style.backgroundColor = 'red';
    
});
 */

btn.addEventListener('click', () => { //! this = window, стрелочная функция тянет родителя button
    console.log(this);
    this.style.backgroundColor = 'red';
    
});


const obj = {
    num: 5,
    sayNumber: function () {
        const say = () => {
            console.log(this);
        };

        say();
    }    
}

//obj.sayNumber();

const double = a => a * 2; //! Стрелочная функция в коротком исполнении, одной строкой один аргумент () можно не
const calc = (a, b) => a * b; //! Стрелочная функция в коротком исполнении, одной строкой

console.log(double(4));


