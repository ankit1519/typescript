let username="Ankit raj"
console.log(username);


let a:number=12
let b:number=6
let c:number=2

//console.log(a/b);
//console.log(c*b);

//implicit
let myName="Ankit raj"

//explicit
let myName2:string="Akanksha Jha"

//myName2= 42 -->error

let meaningOfLife:number;
let isLoading:boolean;


meaningOfLife=42;
isLoading=true;
//console.log(meaningOfLife, isLoading,myName);

let album:any
album=22;
album="ank"
album=false;

/*const sum=(a,b)=>{
    return a+b
}
console.log(sum(3,4));
console.log(sum("ankit ",7));
console.log(sum("Ankit ","Raj"));
*/
//if we dont put parameter explicitly it by default refer it as any so we can pass any value number or string or boolean 

//better
const sum=(a:number,b:number)=>{
    return a+b
}
console.log(sum(8,20));
//console.log(sum("ankit",10)); will give error at compile tym


//union  type
let bharat:string|number;
bharat=10
console.log(bharat);
bharat="India"
console.log(bharat);
//bharat=true //error

let isActive:number | boolean

let re:RegExp=/\w+/g
console.log(re);
