//frase boomer

let boton = document.getElementById("boton")
let resultado = document.getElementById("resultado")
let frase = document.getElementById("frase")


function numeroAleatorio(max) {
    return Math.floor(Math.random() * max);
}

function cambiaVocales(frase) {
    let nuevaFrase=""
    for (let i=0; i<frase.length; i++) {
        console.log(frase[i])
        if (frase[i] == 'a' || frase[i] == 'A') nuevaFrase+="4"
        else if (frase[i] == 'e' || frase[i] == 'E') nuevaFrase+="3"
        else if (frase[i] == 'i' || frase[i] == 'I') nuevaFrase+="1"
        else if (frase[i] == 'o' || frase[i] == 'O') nuevaFrase+="0"
        else if (numeroAleatorio(2)==1) nuevaFrase+=frase[i]
        else nuevaFrase+=frase[i].toUpperCase(); 
    }
    return nuevaFrase
}

boton.addEventListener("click", (e) => {
    
    let fraseBoomer=cambiaVocales(frase.value)
    resultado.innerHTML+=fraseBoomer + "<br>"  

})


