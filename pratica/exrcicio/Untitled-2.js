//Classes

class Carro{
    constructor(cor, marca){
        this.cor = cor;
        this.marca = marca;
    }
    modeloFv(){
        console.log("Tesla")
    }
}


const carro1 = new Carro()

carro1.modeloFv()

class Train {
    constructor(_color, _lightsOn) {
        this._color = _color;
        this._lightsOn = _lightsOn;
    }
    toggleLights(){
        this._lightsOn = !this._lightsOn;
    }
    lightsStatus(){
        console.log("Lights on?", this._lightsOn);
    }
    getSelf(){
        console.log(this);
    }
    getPrototype(){
        let proto = Object.getPrototypeOf(this);
        console.log(proto);
    }
}

let myFirstTrain = new Train("red", false);
    console.log(myFirstTrain);

console.log("-------");

let mySecoundTrain = new Train("blue", true);
    console.log(mySecoundTrain);
console.log("-------");
let train4 = new Train("red", false)
train4.toggleLights(); // undefined
train4.lightsStatus(); // Lights on? true
train4.getSelf(); // Train {color: 'red', lightsOn: true}
train4.getPrototype(); // {constructor: f, toggleLights: f, ligthsStatus: f, getSelf: f, getPrototype: f}

console.log(train4)