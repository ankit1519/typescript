let stringArr=['one','hey','aj']
let guitar=['strat','les paul',5150]
let mixedData=['ankit',99,'raj',true]
//stringArr[0]=21; give error as no. is not assignable to type string
stringArr.push('ar')
console.log(stringArr);

guitar[0]=7
guitar.unshift('abc')
guitar.push(1)
guitar.push("abce")
//guitar.push(true)
console.log(guitar);

mixedData=guitar
console.log(mixedData);
//guitar=mixedData
//console.log(guitar);


let emptyArr=[] //type:any
let band:string[]=[]

band.push('Van halen')
console.log(band);


//-----Tuple--------
let myTuple:[number,boolean,string]=[12,true,'str']
let mixed=['ankit',123,false]
mixed=myTuple
//myTuple=mixed error as infering diff structure
//myTuple[3]=99 error- type 99 is not assignable to type undefined as 4th position is not defined
//myTuple[2]=8  error- type Number is not assignable as type string

 


//------------------OBJECTS--------------------
let myObj:object
myObj=[]
console.log(typeof myObj);
console.log(myObj);
myObj=band
console.log(myObj);
console.log(typeof myObj);
myObj={}
console.log(myObj);
console.log(typeof myObj);

const exampleObject={
    prop1:'raj',
    prop2:true
}

//exampleObject.prop1=true --- error boolean is not assignable to string
console.log(exampleObject.prop1);
//exampleObject.prop2=12;
console.log(exampleObject.prop2);


/*type Guitarist={
    name?:string, // ? maked it optional
    active:boolean,   
    albums:(string |number)[]
}*/
interface Guitarist{
    name?:string, // ? maked it optional
    active:boolean,   
    albums:(string |number)[]
}
let ankitr:Guitarist={
    name:"Ankit Raj",
    active:false,
    albums:[2003,'aohu',901]
}
console.log(ankitr);

const ankitra={
    name:"ankit",
    active:true,
    albums:[2001,'abcdd']
}
console.log(ankitra);

//ankitr=ankitra

//ankitr.age=40 error

/*const greetings=(guitarist:Guitarist)=>{
    return `Hello ${guitarist.name} !`
}
console.log(greetings(ankitr));*/

const greetings=(guitarist:Guitarist)=>{
    if (guitarist.name) return `Hello ${guitarist.name} !`
    return `hello!`
}
console.log(greetings(ankitr));


// --------------ENUMS---------
enum Grade{
    U=1,
    D,
    C,
    A,
}
console.log(Grade);
console.log(Grade.A);
console.log(Grade.U);

