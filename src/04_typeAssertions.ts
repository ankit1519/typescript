type one=string
type two=string|number
type three='hello'

let an:one='hello';
let bn=an as two  //less specific type
let cn= an as three //more specific type

console.log(an,typeof an);

let dn=<two>'world'


const addOrConcat=(a:number,b:number,c:'addi'|'concat'):number|string=>{
    if(c==='addi') return a+b
    return ''+a+b
}
console.log(addOrConcat(2,1,'addi'));
//where to use it

let myVal:string=addOrConcat(2,1,'concat') as string
let nextVal:number=addOrConcat(2,1,'concat') as number
console.log(nextVal);
10 as unknown as string  //avoid it


