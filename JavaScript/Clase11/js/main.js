//---------- OPERADOR &&

const usuario={
    nombre : "Diego",
    edad: 32
}
const ingresoUsuario = usuario.edad > 18 && new Date();
console.log(ingresoUsuario)

//---------- OPERADOR OR

let edad = 19;
let altura = 1.5;
// && doble ampersan es AND
if(edad > 19 || altura > 1.51){
    console.log("Puede pasar");
}else{
    console.log("No puede pasar");
};

let usuario2={
    nombre2 : "Diego Hernandez",
    edad2: 32,
}

const usuario3 = null

console.log(usuario2);
console.log(usuario3);

