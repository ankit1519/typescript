"use strict";
let an = 'hello';
let bn = an; //less specific type
let cn = an; //more specific type
console.log(an, typeof an);
let dn = 'world';
const addOrConcat = (a, b, c) => {
    if (c === 'addi')
        return a + b;
    return '' + a + b;
};
console.log(addOrConcat(2, 1, 'addi'));
//where to use it
let myVal = addOrConcat(2, 1, 'concat');
let nextVal = addOrConcat(2, 1, 'concat');
console.log(nextVal);
10; //avoid it
