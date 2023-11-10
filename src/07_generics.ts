const btao=<T>(args:T):T=>{
    return args
}
console.log(btao("abc"));

const isObject=<T>(dt:T):boolean=>{
    return typeof dt==='object' && !Array.isArray(dt) && dt!==null;
}
console.log(isObject({}));
console.log(isObject({name:'ankit'}));
console.log(isObject([1,2,3]));
console.log(isObject(null));

const isTrue=<T>(arg:T):{arg:T,is:Boolean}=>{
    if(Array.isArray(arg) && !arg.length) return {arg,is:false}
    if(isObject(arg) && !Object.keys(arg as keyof T).length) return {arg,is:false}
    return {arg, is:!!arg}
}
console.log(isTrue(true));
console.log(isTrue(null));
console.log(isTrue(false));
console.log(isTrue(0));
console.log(isTrue([]));
console.log(isTrue([1,2,3]));
console.log(isTrue({}));
console.log(isTrue({1:123}));
console.log(isTrue({0:false}));
console.log(isTrue(""));
console.log(isTrue("ankit"));


interface BoolCheck<T>{
    value:T,
    is:boolean
}

const isTrueVal=<T>(arg:T):BoolCheck<T>=>{
    if(Array.isArray(arg) && !arg.length) return {value:arg,is:false}
    if(isObject(arg) && !Object.keys(arg as keyof T).length) return {value:arg,is:false}
    return {value:arg, is:!!arg}
}

console.log(isTrue(true));
console.log(isTrue(null));
console.log(isTrue(false));
console.log(isTrue(0));
console.log(isTrue([]));
console.log(isTrue([1,2,3]));
console.log(isTrue({}));
console.log(isTrue({1:123}));
console.log(isTrue({0:false}));
console.log(isTrue(""));
console.log(isTrue("ank"));

interface HasID{
    id:number
}
const pu=<T extends HasID>(user:T):T=>{
    return user
}
console.log(pu({id:1,name:"Ar"}));
//console.log(pu({name:"Ar"}));

//generics in class
class StateObject <T> {

    private data:T;
    constructor(value:T){
        this.data=value;
    }
    get state():T{
        return this.data;
    }
    set state(value:T){
        this.data=value
    }

}
const store=new StateObject("pogo")
console.log(store.state);
store.state="abc"
//store.state=134;
const myState=new StateObject<(string|number|boolean)[]>([12])
myState.state=[true,false,52,"ank"];
console.log(myState.state);
