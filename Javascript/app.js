
/*let edad = 12


if (edad>=18) {
    console.log("Puedes conducir") 
    console.log("Puedes beber alcohol")
}
else
    if (edad>12) 
        console.log("Puedes tomar café")
    else   
        console.log("Puedes tomar colacao")*/

/*for (let i=1; i<=10; i++) {
    console.log(i)
}*/

/*let i=1
while(i<=10) {
    console.log(i)
    i++
}*/


/*function numeroAleatorio(max) {
    let numero=Math.floor(Math.random() * max ) + 1
    return numero
}

/*console.log(numero)*/

//loteria
l/*et resultado = document.getElementById("resultado")
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

resultado.innerHTML = carta*/

//numero del cesar
/*let abecedario = "abcdefghijklmnñopqrstuvwxyz"
let frase="zsza manzanas"
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
console.log(fraseCifrada)*/


//contraseña segura

/*let caracteres = "abcdefghijklmnopqrstuvwxyz";
let caracteresMayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let caracteresNumeros = "0123456789"
let caracteresEspeciales = "!@#$%^&*()_+|~`-={}[]:;'<>?,./"

// devuelve un valor aleatorio entre min y max
function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let numCar = numeroAleatorio(8,50)
let numNum = numeroAleatorio(1,2)
let numEsp = numeroAleatorio(1,2)
let pswd = ""

for (let i=0; i<numNum; i++){
    pswd += caracteresNumeros[numeroAleatorio(0,caracteresNumeros.length-1)]
}
for (let i=0; i<numEsp; i++){
    pswd += caracteresEspeciales[numeroAleatorio(0,caracteresEspeciales.length-1)]
}

pswd += caracteresMayusculas[numeroAleatorio(0,caracteresMayusculas.length-1)]
longitud = pswd.length
for (let i=0; i<numCar - longitud; i++) {
    let opcion = numeroAleatorio(1,2)

    if (opcion == 1)
        pswd += caracteresMayusculas[numeroAleatorio(0,caracteresMayusculas.length-1)]
    else
        pswd += caracteres[numeroAleatorio(0,caracteres.length-1)]
}

pswd = pswd.split('').sort(() => Math.random() - 0.5).join('')
console.log(pswd)*/