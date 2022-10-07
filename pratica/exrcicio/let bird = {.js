let bird = {
    hasWings: true,
    canFly: true,
    hasFeathers: true,
}

let eagle = Object.create(bird)
console.log("eagle", eagle.hasWings)

let pombo = Object.create(bird)
console.log("has feathers", pombo.hasFeathers)

let galinha = Object.create(bird)
galinha.canFly = false;
console.log("Galinha", galinha)
console.log("Galinha can fly", galinha.canFly)
console.log("Galinha has Wings? ", galinha.hasWings)