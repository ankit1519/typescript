class Coder{
    /*name:string
    music:string
    lang:string
    age:number*/
    secLang!:string
    constructor(
       public readonly name:string,
        public music:string,
        private age:number,
        protected lang:string='hindi'
    )   {
            this.name=name
            this.music=music
            this.age=age
            this.lang
        }

        public getAge(){
            return `Hello!! my age is ${this.age}`
        }
}
const Ankit =new Coder('Ankit Raj',"ek ajnabee hasina se",21,'hindi')
console.log(Ankit.music);
//console.log(Ankit.age);
//console.log(Ankit.lang);
console.log(Ankit.getAge());

class WebDev extends Coder{
    constructor(
        public computer:string,
        name:string,
        music:string,
        age:number
    )   {
    
         super(name,music,age)
    }

    public getLang(){
        return `I write ${this.lang}`
    }
}

const Raj=new WebDev('Asus',"Raj",'SN',22)
console.log(Raj.getLang());
//console.log(Raj.age);


//----------INTERFACE----------------------
interface Musicians{
    name:string,
    instrument:string,
    play(action:string):string
}

class Guitarists implements Musicians{
    name:string
    instrument: string
    constructor(name:string,instrument:string){
        this.name=name
        this.instrument=instrument
    }
    play(action:string){
        return `${this.name} ${action} ${this.instrument}`
    }
}

const AnkitRaj=new Guitarists("Ankit",'guitar')
console.log(AnkitRaj.play('strums'))


//static
class Beauty{
    public static count:number=0;
    id:number
    constructor(public name:string){
        this.name=name
        this.id= ++Beauty.count
    }
}

const AkankshaJ=new Beauty("Akanksha Jha")
const AkankshaJha=new Beauty("Akanksha")
const AnkitR=new Beauty("Ankit Raj")
const AnkitSri=new Beauty("Ankit srivastava")
console.log(Beauty.count);
console.log(AkankshaJ.id)
console.log(AnkitSri.id)
console.log(AkankshaJha.id)

//Getters and setters
class Arr{
    arrOfStr:string[]
    constructor(){
        this.arrOfStr=[]
    }
    public get data():string[]{
        return this.arrOfStr
    }

    public set data(value:string[]){
        if(Array.isArray(value) && value.filter((val)=>typeof val==='string').length>=1){
            this.arrOfStr=value
            
            
            return
        }
        else{
            throw new Error("param is not array of string");
            
        }
    }
}

const newArr=new Arr()
newArr.data=['ankit','raj','aj']
console.log(newArr.data);
newArr.data=[...newArr.data,'Akanksha Ji']
console.log(newArr.data);
