//variables
let num1=document.getElementById("numero1")
let num2=document.getElementById("numero2")
let boton=document.getElementById("run")
let salida=document.getElementById("salida")
let borrar1
let indice=0

//eventos
boton.addEventListener("click", (e) => {
    console.log("Han clickado sobre: "+e.target.id)
    /*console.log("El resultado de " + num1.value + " por " + num2.value + " es " + (parseInt(num1.value) + parseInt(num2.value)))

    /*for (let i=0; i<parseInt(num2.value); i++) {
        salida.innerHTML+=num1.value + "<br>"
    }*/
    indice++
    let texto=""
    texto+=`<input type="button" value="Borrar" id=${indice}>` + num1.value+"<br>"
    salida.innerHTML+=texto
    //apunto al id
    borrar1=document.getElementById(indice)
    borrar1.addEventListener("click",(ev) => {
        console.log("Han clickado sobre: "+ev.target.id)
        console.log("Aquí")
        alert("Soy yo:")
    })

})

//main