var num = document.querySelector("input#fnum")
var lista = document.querySelector("input#flista")
var resultado = document.querySelector("div#resultado")
var valores = []


//Função para adicinar o número na lista
function adicionar(){
    if(isNumero(num.value) && !inLista(num.value)){
        valores.push(Number(num.value))
        let item = document.createElement("option"); item.text ="Valor",(num.value), "adicionado."
        lista.appendChild(item)
    } else{
        window.alert("Valor inválido ou já adicionado na lista.")
    }
}

//Função para verificar se é numero e se é entre 1 - 100
function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }

}

//Função para verificar ser um determinado número ja foi adicionado
function inLista(n, l){

    if(l.indexOf(Number(n)) != -1){
        return true
    } else{
        return false
    }
}

