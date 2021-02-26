//rest operator
"use strict";

const log = function (a,b, ...rest) { //? ... rest operator returns array
    console.log(a, b, rest);
    
};

// log(1, 2, 3, 5, 6, 7, 8);


function calcOrDouble(number, basis = 2) { //? присвоение по умолчанию
    console.log(number * basis);
}

calcOrDouble(2); 
