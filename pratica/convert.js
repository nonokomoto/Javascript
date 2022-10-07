
var currencyOne = 100
var currencuTwo = 0
var exchangeRate = 25

function convert(amount, rate){
    return amount * rate;
}

currencuTwo = convert(currencyOne, exchangeRate)

console.log(currencuTwo)

let contador = 3
function exemplo(){
    console.log(contador)
    contador = contador -// Task 1: Build a function-based console log message generator
function consoleStyler(color, background, fontsize, txt) {
  let message = "%c" + txt
  let style = `color: ${color}`
  style += `background: ${background}`
  style += `font-size: ${fontsize}`
  console.log(message)
  console.log(style)
}

// Task 2: Build another console log message generator


function celebrateStyler(reason) {
    let fontstyle = "color: tomato; font-size: 50px"

  if (reason == "birthday") {
    console.log(`%cHappy birthday`, fontstyle)
  } else if (reason == "champions") {
    console.log(`%cCongrats on the title`, fontstyle)
  } else {
    console.log(message, style)
  }
} // Task 3: Run both the consoleStyler and the celebrateStyler functions


consoleStyler('#1d5c63', '#ede6db', '40px', 'Congrats!')
celebrateStyler('birthday')

// Task 4: Insert a congratulatory and custom message

function styleAndCelebrate() {
  consoleStyler(color, background, fontsize, text)
  celebrateStyler(reason)
}

// Call styleAndCelebrate


styleAndCelebrate('ef7c8e', 'fae8e0', '30px', 'You made it!', 'champions')

 1
    if(contador === 0 )
    return;
    exemplo()
}

exemplo()