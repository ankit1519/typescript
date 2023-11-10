"use strict";
//Utility Types
const updateAssignment = (assign, propsToUpdate) => {
    return Object.assign(Object.assign({}, assign), propsToUpdate);
};
const assign1 = {
    studentId: "12334",
    title: "fp",
    grade: 0,
};
console.log(updateAssignment(assign1, { grade: 33 }));
const assignGraded = updateAssignment(assign1, { grade: 33 });
//2. required and Readonly
const recordAssignment = (assign) => {
    return assign;
};
const assignVer = Object.assign(Object.assign({}, assignGraded), { verified: true });
console.log(assignVer);
//assignVer.grade=10
console.log(assignGraded);
//recordAssignment(assignGraded)
recordAssignment(Object.assign(Object.assign({}, assignGraded), { verified: true }));
//3. Record
const hex = {
    red: "FF0000",
    green: "00FF00",
    blue: "0000FF"
};
const finalGrades = {
    Sara: "B",
    "Kelly": "A"
};
console.log(finalGrades);
console.log(hex);
const gradeData = {
    Sara: { a1: 85, a2: 99 },
    Kelly: { a1: 76, a2: 88 }
};
console.log(gradeData);
const score = {
    studentId: "1233",
    grade: 1
};
const preview = {
    studentId: "12",
    title: "final project"
};
const x = "A";
const y = "B";
//const x:adjustGrade="C"
console.log(x, y);
const createNA = (title, points) => {
    return { title, points };
};
