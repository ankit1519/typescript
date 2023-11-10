interface Tranj{
    /*p:number,
    b:number,
    j:number,*/

    //better
    [index:string]:number ///index signature
    //readonly [index:string]:number
    //we can give more props to add to obj
}
const tt:Tranj={
    p:-1,
    b:111,
    j:71,
    x:900
}
console.log(tt.p);
console.log(tt['b']);
let prop:string='x'
console.log(tt[prop]);

console.log(tt['donot know']);  //will give undefined


/////////////////////////////////
interface Student{
   // [key:string]:string|number|number[]|undefined
    name:string,
    GPA:number,
    classes?:number[]
}
const student:Student={
    name:"Ankit",
    GPA:8.95,
    classes:[1,2,3]
}
console.log(`hi`,student.test);

for(const key in student){
    console.log(`${key}: ${student[key]}`);
    //cant iterate if no index signature
}