"use strict";
const btao = (args) => {
    return args;
};
console.log(btao("abc"));
const isObject = (dt) => {
    return typeof dt === 'object' && !Array.isArray(dt) && dt !== null;
};
console.log(isObject({}));
console.log(isObject({ name: 'ankit' }));
console.log(isObject([1, 2, 3]));
console.log(isObject(null));
const isTrue = (arg) => {
    if (Array.isArray(arg) && !arg.length)
        return { arg, is: false };
    if (isObject(arg) && !Object.keys(arg).length)
        return { arg, is: false };
    return { arg, is: !!arg };
};
console.log(isTrue(true));
console.log(isTrue(null));
console.log(isTrue(false));
console.log(isTrue(0));
console.log(isTrue([]));
console.log(isTrue([1, 2, 3]));
console.log(isTrue({}));
console.log(isTrue({ 1: 123 }));
console.log(isTrue({ 0: false }));
console.log(isTrue(""));
console.log(isTrue("ankit"));
const isTrueVal = (arg) => {
    if (Array.isArray(arg) && !arg.length)
        return { value: arg, is: false };
    if (isObject(arg) && !Object.keys(arg).length)
        return { value: arg, is: false };
    return { value: arg, is: !!arg };
};
console.log(isTrue(true));
console.log(isTrue(null));
console.log(isTrue(false));
console.log(isTrue(0));
console.log(isTrue([]));
console.log(isTrue([1, 2, 3]));
console.log(isTrue({}));
console.log(isTrue({ 1: 123 }));
console.log(isTrue({ 0: false }));
console.log(isTrue(""));
console.log(isTrue("ank"));
