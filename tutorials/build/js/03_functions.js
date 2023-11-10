"use strict";
//interface postid=stringOrNumer error refer it as classes or obj
//--------literal types----------------
let myName1;
myName1 = 'Ankit';
//myName1='Raj'
console.log(myName1);
let userName;
userName = 'Raj';
console.log(userName);
//console.log(userName='Aj'); err
//------------------functions--------------------------
const add = (a, b) => {
    return a + b;
};
const greet = (name) => {
    console.log(`Hi ${name}`);
};
console.log(add(2, 4));
greet('AJ');
let subtract = function (c, d) {
    return c - d;
};
console.log(subtract(10, 1));
//interface mathFun{(a:number,b:number):number}
let mutliply = function (c, d) {
    return c * d;
};
console.log(2 * 19);
//optional parameters
const sumAll = (a, b, c) => {
    if (c !== undefined)
        return a + b + c;
    return a + b;
};
console.log(sumAll(19, 9, 2));
//----default parameter----
const addAll = (a = 2, b, c = 2) => {
    return a + b + c;
};
console.log(addAll(undefined, 2));
//----Rest parameters----
const total = (...nums) => {
    return nums.reduce((prev, next) => prev + next);
};
console.log(total(1, 2, 3, 4));
//---never type----
const createErr = (err) => {
    throw new Error(err);
};
//createErr("shut the .. up")
//example 2 endless loop
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i == 10)
            break; //if no brk-- endless loop --- issue--never
    }
};
const numberOrString = (a) => {
    if (typeof a === 'number')
        return 'num';
    if (typeof b === 'string')
        return 'str';
    return createErr("this shld not happen");
};
console.log(numberOrString(1));
