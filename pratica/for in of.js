var dairy = ["cheese", "sour cream","milk", "yogurt", "ice cream", "milkshake"]

function logDairy(){
    for(var pasta of dairy){
        console.log(pasta)
    }
}

logDairy();

const animal = {
    canJump: true
}

const bird = Object.create(animal);
bird.canFly = true
bird.hasFeathers = true


function birdCan(){
    for (const [key, value] of Object.entries(bird)) {
        console.log(`${key}: ${value}`);
    }
}

birdCan()

function animalCan(){
    for (key in bird ){
        console.log(`${key}:${bird[key]}`)
    }
}

animalCan()

