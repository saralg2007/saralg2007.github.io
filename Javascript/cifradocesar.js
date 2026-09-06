//numero del cesar

let resultado = document.getElementById("resultado")

let abecedario = "abcdefghijklmnñopqrstuvwxyz"
let frase="Arroz con tomate"
let paso=3
let fraseCifrada = ""
for (let i=0; i<frase.length; i++) {

    if (frase[i] === " "){
        fraseCifrada = fraseCifrada + " "
    }

    else {
        let pos = (abecedario.indexOf(frase[i]) + paso) % abecedario.length
        let letraCifrada = abecedario[pos]
        fraseCifrada += letraCifrada
    }
}
console.log(fraseCifrada)

resultado.innerHTML = fraseCifrada