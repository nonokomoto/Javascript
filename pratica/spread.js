
//Spread operator
const portugal = ["Lisboa","Porto", "Aveiro", "Algarve"];
const espanha =  ["Barcelona", "Ibiza", "Málaga", "Madrid"];
const paisesEuropa = [...portugal, ...espanha];

console.log(paisesEuropa)

const paisCplp = [...portugal, "São Tomé e Príncipe"]

console.log(paisCplp)

const melhorCidade = "Madrid"
const soletrar = [...melhorCidade];

console.log(soletrar)

const car1 = {
    speed: 200,
    color: 'yellow'
}

const car2 = {...car1}

car1.speed = 201

console.log(car1.speed, car2.speed)
    
