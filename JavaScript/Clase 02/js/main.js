/*
let valor = true // Asignacion de valor
let edad = 30
let edadExacta = 32;

if (edad == edadExacta){ // ==comparacion entre valores
    console.log("Apto para ingresas");
}
else{
    console.log("No apto para ingresar");
}

if(valor){
    console.log("Es verdadero")
}
else{

}

// Boolean true o false

let numero =10:
let esMayor5 =(numero>5) 


// triplete

let a =1;
let b ="1";

if(a==b){ // compara el valor
    console.log("son iguales");
}else{
    console.log("no son estricto iguales");
}

if(a===b){ //compara valor y tipo de dato
    console.log("son iguales");
}else{
    console.log("no son estricto iguales");
}

console.log(typeof(a));
console.log(typeof(b));

if(a!==b){ //compara valor y tipo de dato
    console.log("no son iguales");
}else{
    console.log("son iguales");
}
*/

let numero = prompt("Colocá un número entre 0 y 100");

if((numero<0) || (numero>100)){
    alert("Mandaste cualquiera amigo");
}
else if (numero==50){
    alert("Tu número es "+numero);
}
else if (numero<50){
    alert("Tu número es "+numero+ " y es menor que 50");
}
else if (numero>50){
    alert("Tu número es "+numero+ " y es mayor que 50");
}