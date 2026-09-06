//primitiva

function numeroAleatorio(max) {
    let numero=Math.floor(Math.random() * max ) + 1
    return numero
}

let resultado = document.getElementById("resultado")

let numero = 0
let cantidad = 0
let carta = []
while(cantidad<6) {
    numero = numeroAleatorio(49)
    if (!carta.includes(numero)) {
        cantidad++
        carta.push(numero)
    }
}
console.log("El papel es: " + carta)

resultado.innerHTML = carta