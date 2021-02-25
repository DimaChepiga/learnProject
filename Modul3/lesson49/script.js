//rest operator
"use strict";

const log = function (a,b, ...rest) {
    console.log(a, b, rest);
    
}

log(1, 2, 3, 5, 6, 7, 8);
