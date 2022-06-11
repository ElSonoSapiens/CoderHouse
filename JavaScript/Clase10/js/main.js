// //----- STORAGE
// // Permite almacenar info de manera local hadta 5Mb

// console.log("Hola");

// let nombre = localStorage.setItem("nombre","Diego")
// let esValido = localStorage.setItem("esValido", true)
// let edad = localStorage.setItem("edad",32)
// let variableNombre = localStore.getItem("nombre")
// console.log(variableNombre);

function guardarNombre(){
    localStorage.setItem("nombreInput",document.getElementById("nombreAGuardar").value)
}
document.getElementById("nombreAGuardar").value = localStorage.getItem("nombreInput");


//-----

function guardarEdad(){
    localStorage.setItem("edadInput",document.getElementById("edadAGuardar").value)
}
document.getElementById("edadAGuardar").value = localStorage.getItem("edadInput");

//-----

function guardarCargo(){
    localStorage.setItem("cargoInput",document.getElementById("cargoAGuardar").value)
}
document.getElementById("cargoAGuardar").value = localStorage.getItem("cargoInput");

//-----

function recorrer(){
    for (let i = 0; i < localStorage.length; i++) {
        let clave = localStorage.key[i];
        console.log("Clave: " + clave);
        console.log("Valor: " + localStore.getItem(clave));
    }
}
recorrer()

function borrar(){
    localStorage.clear();
    document.getElementById("nombreAGuardar").value =" ";
    document.getElementById("edadAGuardar").value =" ";
    document.getElementById("cargoAGuardar").value =" ";
}


console.log(nombreInput);

// Crear formulario de 3 campos
// Almacenar esos datos de forma Local
// Crear el boton que los borre

// -- Array objetos Literales

// let profesor =[
//     {
//         nombre : "Esteban",
//         edad : 29,
//         profesor : true
//     },
//     {
//         nombre : "Diego",
//         edad : 32,
//         profesor : false
//     }
// ]
// let objetoCadena = JSON.stringify(profesor);
// let objetoObjeto = JSON.parse(objetoCadena)

// console.log(profesor);
// console.log(objetoCadena);
// console.log(objetoObjeto);

// //POST

