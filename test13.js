class Pet {
    constructor(name) {
        this._name = name;
    }
    sayHello() {
        console.log('*scratch*');
    }
    get name() {
        return this._name;
    }
}

class Cat extends Pet {
    constructor(name) {
        super(name);
    }
    sayHello() {
        super.sayHello();
        console.log('miaaaauw:'+this.name);
    }
}

let temp=new Cat('ace');
temp.sayHello();



