"use strict";
class Coder {
    constructor(name, music, age, lang = 'hindi') {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang;
    }
    getAge() {
        return `Hello!! my age is ${this.age}`;
    }
}
const Ankit = new Coder('Ankit Raj', "ek ajnabee hasina se", 21, 'hindi');
console.log(Ankit.music);
//console.log(Ankit.age);
//console.log(Ankit.lang);
console.log(Ankit.getAge());
class WebDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
    }
    getLang() {
        return `I write ${this.lang}`;
    }
}
const Raj = new WebDev('Asus', "Raj", 'SN', 22);
console.log(Raj.getLang());
class Guitarists {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} ${this.instrument}`;
    }
}
const AnkitRaj = new Guitarists("Ankit", 'guitar');
console.log(AnkitRaj.play('strums'));
//static
class Beauty {
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Beauty.count;
    }
}
Beauty.count = 0;
const AkankshaJ = new Beauty("Akanksha Jha");
const AkankshaJha = new Beauty("Akanksha");
const AnkitR = new Beauty("Ankit Raj");
const AnkitSri = new Beauty("Ankit srivastava");
console.log(Beauty.count);
console.log(AkankshaJ.id);
console.log(AnkitSri.id);
console.log(AkankshaJha.id);
//Getters and setters
class Arr {
    constructor() {
        this.arrOfStr = [];
    }
    get data() {
        return this.arrOfStr;
    }
    set data(value) {
        if (Array.isArray(value) && value.filter((val) => typeof val === 'string').length >= 1) {
            this.arrOfStr = value;
            return;
        }
        else {
            throw new Error("param is not array of string");
        }
    }
}
const newArr = new Arr();
newArr.data = ['ankit', 'raj', 'aj'];
console.log(newArr.data);
newArr.data = [...newArr.data, 'Akanksha Ji'];
console.log(newArr.data);
