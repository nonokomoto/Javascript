let cidades = ["Barcelona", "Ibiza", "Málaga", "Madrid", "Sevilha"]

function qualCidade(primeira, segunda, terceira, quarta, quinta){
    console.log(`Qual a primiera cidade: ${primeira}`)
    
    console.log(`Qual a segunda cidade: ${segunda}`)
    console.log(`Qual a terceira cidade: ${terceira}`)
    console.log(`Qual a quarta cidade: ${quarta}`)
    console.log(`Qual a quinta cidade: ${quinta}`)
}

qualCidade(...cidades);

function addTaxToPrices(taxRates, ...itemsBought){
    return itemsBought.map(item => taxRates * item)
}


let shoppingCart = addTaxToPrices(1.1,46,89,35,79);

console.log(shoppingCart)