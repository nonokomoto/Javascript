function meal(animal){
    animal.food = animal.food + 10;
}

var dog = {
    food:10
};

meal(dog);
//meal(dog);

console.log(dog.food);

function two (){
    return 2;
}

function one (){
    return 1;
}

function c(iv, ev){
    return iv() + iv() + ev()
}

console.log(c(two, one))