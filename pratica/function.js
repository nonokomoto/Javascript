

/*function litterFinder (word, match){
    for ( let i = 0; i < word.length; i++){
        if (word[i] == match){
            console.log(i, "Found the", match, "at", i);
        }
        else (
            console.log(i, "---No match found at", i)
        )
    }
}

litterFinder("test", "s")
*/
function parImpar(n){
    if (n / 2 == 0){
        return "Esse número é par"
    }
    else{
        return "Esse número é impar"
    }
}

console.log(parImpar(1995))
