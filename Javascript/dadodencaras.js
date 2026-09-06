//Dado de n caras

function numeroAleatorio(max) {
    let numero=Math.floor(Math.random() * max ) + 1
    return numero
}
let resultado = document.getElementById("resultado")

n = 6
console.log(numeroAleatorio(n))

resultado.innerHTML = numeroAleatorio(n)