var age = 10;

if (age >= 65 ) {
    console.log("You get your income from your pension")   
}
   else if( age < 65 && age >= 18 ){
    console.log("Each month you get your salary")
}
    else if( age < 18 ) {
        console.log("You get an allowance")
    }  
else {
    console.log(" The value of the age variable is not numerical")
}

var day = "sunday";

switch (day){
    case "Monday": 
        console.log("Do Something");
        break;
    case "Tuesday":
        console.log("Do something");
        break;
    case "Wednesday":
        console.log("Do something");
        break;
    case "Thusrday":
        console.log("Do something");
        break;
    case "Friday":
        console.log("Do something");
        break;
    case 'Saturday':
        console.log('Do something');
        break;
    case 'Sunday':
        console.log('Do something');
        break;
    default:
        console.log("There is no such day");
}

var i = 1

while ( i > 0) {
    console.log(i);
    i = i + 10;
}





