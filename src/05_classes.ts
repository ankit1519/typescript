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


//
