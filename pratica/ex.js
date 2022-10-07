function addTwoNums(a, b) {
    try {
      console.log(a + b);
  
      if (typeof(a) != `number`) {
        throw new ReferenceError("the first argument is not a number");
      } else if (typeof(b) != `number`) {
        throw new ReferenceError(" the secound argument is not a number");
      } else {
        console.log(a + b);
      }
    } catch (err) {
      console.log("Error!", err);
    }
  }
  
  addTwoNums(5, "5");
  console.log("It still work");

  
  try{​
    console.log('Hello');
  } catch(err) {​
    console.log('Goodbye');
  }