var dishDados = [
    {
        nome: "Italian Pasta",
        price: 11.46
    },
    {
        nome: "Rice with veggies", 
        price: 10.38
    },
    {
        nome: "Chicken with Patatos",
        price: 18.66
    }, 
    {
        nome: "Vegetarian Pizza",
        price: 7.74
    }   
]

var imposto = 1.20

function getPreco(cobrarTax){

//for loop that will loop over all object inside the dishData array

    for(var dish of dishDados){
       var finalPreco;
        if(cobrarTax == true){
            finalPreco = dish.price * imposto
        }
        else if(cobrarTax == false){
            finalPreco = dish.price
        }
        else{
            console.log("You need to pass a boolean to the getPrices call!"  );
            return;
        }
        console.log(`Dish: ${dish.nome} Price: $${finalPreco}`);
    }

}

function getDisconto(cobrarTax, clientes){
    getPreco(cobrarTax);

    if(typeof(clientes) == Number && clientes > 0 && clientes < 30){
        disconto = 0;
        if(clientes < 5){
            disconto = 5
        }
        else if(clientes >= 5){
            disconto = 10
        }
       console.log(`Disconto é: $${disconto}`)
    }
    else{
        console.log(`O segundo argumento tem que ser um número entre 0 e 30`);
    }

}

getDisconto(true, 4)
