function listColor (cor){
    for (var i = 0; i < cor.length; i++){
       if (cor[i] == "Preto"){
            console.log(i + 10, "Vermelho");
       }
       else(
            console.log(i+1, cor[i])
       )
    }
}

var cores = ["Azul", "Preto", "Branco", "Amarelo", "Vermelho"]

listColor(cores)

