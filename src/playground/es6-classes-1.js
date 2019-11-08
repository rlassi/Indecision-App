class Person {
    constructor(name = 'Anonymous', age = '0') {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return `Hi, I am ${this.name}!`;
    }
    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major
    }
    getDescription() {
        let description = super.getDescription();
        this.hasMajor() ? description += ` Their major is ${this.major}.` : description;
        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, major, homeLocation) {
        super(name, age, major);
        this.homeLocation = homeLocation;
    }
    getGreeting() {
        let location = super.getGreeting();
        this.homeLocation ? location += ` I'm visiting from ${this.homeLocation}.` : location;
        return location;
    }
}

const me = new Traveler('Ryan Lassiter', 33, 'Music', 'Asheville');
console.log(me.getGreeting());

const other = new Traveler();
console.log(other.getGreeting());