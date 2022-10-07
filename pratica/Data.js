/*
The forEach() method

Arrays in JavaScript come with a handy method that allows you to loop over each of their members. 
*/
const fruits = ["Banana", "Manga", "Nectarina", "Laranja"];

function appendIndex(fruits,i){
    console.log(`${i}.${fruits}`)
}

fruits.forEach(appendIndex)

/*
To explain the syntax, the forEach() method accepts a function that will work on each array item. That function's first parameter is the current array item itself, and the second (optional) parameter is the index. 
*/

/*
Very often, the function that the forEach() method needs to use is passed in directly into the method call, like this:
*/

const veggies = ["Onion", "Garlic", "Potato"];
veggies.forEach(function(veggie, index){
    console.log(`${index}.${veggie}`)
})

// The filter() method

/*
Another very useful method on the array is the filter() method. It filters your arrays based on a specifc test. Those array items that pass the teste are returned
*/

const nums = [0,10,20,30,40,50];
nums.filter(function(num){
    return num > 20;
})

//The map method

/*
This method is used to map each array item over to another array's item, based on whatever work is performed inside the function that is passed-in to the map as a parameter. 

For example:
*/

[0,10,20,30,40,50].map(function(num) {
    return num / 10
})

//Working with Objects in JavaScript

const result = [];
const drone = {
    speed: 100,
    color: 'yellow'
}
const droneKeys = Object.keys(drone);
droneKeys.forEach( function(key) {
    result.push(key, drone[key])
})
console.log(result)