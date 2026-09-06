//contraseña segura

let resultado = document.getElementById("resultado")

let caracteres = "abcdefghijklmnopqrstuvwxyz";
let caracteresMayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let caracteresNumeros = "0123456789"
let caracteresEspeciales = "!@#$%^&*()_+|~`-={}[]:;'<>?,./"

function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let numCar = numeroAleatorio(8,50)
let numNum = numeroAleatorio(1,2)
let numEsp = numeroAleatorio(1,2)
let numMay = 1
let pswd = ""

for (let i=0; i<numNum; i++){
    pswd += caracteresNumeros[numeroAleatorio(0,caracteresNumeros.length-1)]
}
for (let i=0; i<numEsp; i++){
    pswd += caracteresEspeciales[numeroAleatorio(0,caracteresEspeciales.length-1)]
}

pswd += caracteresMayusculas[numeroAleatorio(0,caracteresMayusculas.length-1)]


while (pswd.length < numCar) {
    let opcion = numeroAleatorio(1,2)

    if (opcion == 1) {
        pswd += caracteresMayusculas[numeroAleatorio(0,caracteresMayusculas.length-1)]
        numMay++
    }
    else
        pswd += caracteres[numeroAleatorio(0,caracteres.length-1)]
}


pswd = pswd.split('').sort(() => Math.random() - 0.5).join('')
console.log(pswd)
salida = "Tiene " + numCar + " caracteres, " + numNum + " números, " + numEsp + " caracteres especiales y " + numMay + " mayúsculas: " + pswd

resultado.innerHTML = salida