// funcional programming
let shoes = 100;
let statetax = 1.23;

function totalPrice(shoes, tax){
    return shoes * tax
}

let toPay = totalPrice(shoes, statetax);

console.log(toPay);

// Objet Oriented Programming

let purchase1 = {
    shoes1: 100,
    stateTax: 1.23,
    _totalPrice: function(){
        let calculation = purchase1.shoes1 * purchase1.stateTax;
        console.log("Total price", calculation);
    }
}

purchase1._totalPrice();

//Another exemple

let purchase2 = {
    shoes1: 100,
    stateTax: 0.11,
    _totalPrice: function(){
        let calculation = this.shoes1 * this.stateTax;
        console.log("Total price of the secound is ", calculation);
    }
}

purchase2._totalPrice();


function Icecream(flavor) {
    this.flavor = flavor;
    this.meltIt = function() {
        console.log(`The ${this.flavor} icecream has melted`);
    }
}

function Icecream(flavor) {
    this.flavor = flavor;
    this.meltIt = function() {
        console.log(`The ${this.flavor} icecream has melted`);
    }
}

let kiwiIcecream = new Icecream("kiwi");
let appleIcecream = new Icecream("apple");
kiwiIcecream; // --> Icecream {flavor: 'kiwi', meltIt: ƒ}
appleIcecream; // --> Icecream {flavor: 'apple', meltIt: ƒ}