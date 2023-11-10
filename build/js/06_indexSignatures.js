"use strict";
const tt = {
    p: -1,
    b: 111,
    j: 71,
    x: 900
};
console.log(tt.p);
console.log(tt['b']);
let prop = 'x';
console.log(tt[prop]);
console.log(tt['donot know']); //will give undefined
const student = {
    name: "Ankit",
    GPA: 8.95,
    classes: [1, 2, 3]
};
//console.log(`hi`,student.test);
for (const key in student) {
    console.log(`${key}: ${student[key]}`);
    //cant iterate if no index signature---> have to use keyof
}
console.log("Map");
Object.keys(student).map((key) => {
    console.log(key);
});
const mi = {
    'salary': 100,
    'bonus': 898,
};
