

let botonPrincipalv2 = documen.getElementById("boton-principalv2")

botonPrincipalv2.onclick = () => (console.log("Respuesta 2"));

//------------

function saludarv3(){
    console.log("Me hiciste click V3")
}

//------------

let multiplesEventos = docuemnt.getElementById("multiples-eventos");

multiplesEventos.addEventListener("mouseover",consologear)
function consologear(){
    console.log("pasaron el mouse por aca.")
}

//------------

let input1 = document.getElementById("nombre")
let input2 = document.getElementById("edad")
input1.onkeyup = () => {console.log ("valor1")}
input2.onkeyup = () => {console.log ("valor2")}

