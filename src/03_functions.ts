//Type Aliases
type stringOrNumber=string|Number
type strNumArr=(string | number) []
type Guitar={
    name:string,
    active:boolean,   
    albums:strNumArr
}
interface Guitarist{
    name?:string, // ? maked it optional
    active:boolean,   
    albums:strNumArr
}

type userId=stringOrNumber
//interface postid=stringOrNumer error refer it as classes or obj


//--------literal types----------------
let myName1:'Ankit'
myName1='Ankit'
  //myName1='Raj'
console.log(myName1);

let userName: 'Ankit' | 'Raj' | 'Akanksha'
userName='Raj'
console.log(userName);
//console.log(userName='Aj'); err


//------------------functions--------------------------


const add=(a:number,b:number):number=>{
    return a+b
}
const greet=(name:string):void=>{
    console.log(`Hi ${name}`);
}

console.log(add(2,4));
greet('AJ')

let subtract=function(c:number,d:number):number{
    return c-d
}
console.log(subtract(10,1));


type mathFunc=(a:number,b:number)=>number

//interface mathFun{(a:number,b:number):number}

let mutliply:mathFunc=function(c,d){
    return c*d
}
console.log(2*19);


//optional parameters
const sumAll=(a:number,b:number,c?:number):number=>{
    if(c!==undefined) return a+b+c;
    return a+b;
}
console.log(sumAll(19,9,2));


//----default parameter----
const addAll=(a:number=2,b:number,c:number=2):number=>{
    return a+b+c
}
console.log(addAll(undefined,2));


//----Rest parameters----
const total=(...nums:number[]):number=>{
    return nums.reduce((prev,next)=>prev+next)
}

console.log(total(1,2,3,4));


//---never type----
const createErr=(err:string):never=>{
    throw new Error(err);
    
}
//createErr("shut the .. up")

//example 2 endless loop
const infinite=()=>{
    let i:number=1
    while(true){
        i++;
        if(i==10) break;  //if no brk-- endless loop --- issue--never
    }
}

const numberOrString=(a:number|string):string=>{
    if(typeof a==='number') return 'num'
    if (typeof b==='string') return 'str'
    return createErr("this shld not happen")
}
console.log(numberOrString(1));
