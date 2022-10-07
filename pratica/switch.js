let answer = prompt("What is your name?")
if(typeof(answer) === "string"){
    var h1 = document.createElement("h1")
    h1.innerText = answer;
    document.body.innerText = "";
    document.body.appendChild(h1); 
}
let h1 = document.querySelector("h1");
let arr = [  'Example Domain',
    'First Click',
    'Second Click',
    'Third Click'];
function handleClicks(){
    switch(history.innerText){
        case arr[0]:
            h1.innerText = arr[1];
            break
        case arr[1]:
            h1.innerText = arr[2];
            break;
        case arr[2]:
            h1.innerText  = arr[3];
            break;
        default:
            h1.innerText = arr[0];
    }
}

h1.addEventListener("click", handleClicks)