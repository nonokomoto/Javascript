//Working with Map in JavaScript

let bestBoxers = new Map();
bestBoxers.set(1, "The Champions");
bestBoxers.set(2, "The Runner-up")
bestBoxers.set(3, "The third place");

console.log(bestBoxers)

bestBoxers.get(2);

//Working with Set construtor

const repetitiveFruits = ['apple','pear','apple','pear','plum', 'apple' ]
const uniqueFruits = new Set(repetitiveFruits);
console.log(uniqueFruits)