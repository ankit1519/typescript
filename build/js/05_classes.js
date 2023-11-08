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
//console.log(Raj.age);
//
