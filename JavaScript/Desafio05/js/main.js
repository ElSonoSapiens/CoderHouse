//---------------------- USUARIO Y CONTRASEÑA

let usuario = prompt("Hola. ¿Cómo te llamás?");
while(usuario ==""){
	usuario=prompt("Debés ingresar tu nombre");
}
let entrada = prompt("Hola "+ usuario +" ingresá la contraseña (entrar)");
while(entrada !="entrar"){
	alert("Contraseña Incorrecta");
	entrada = prompt("Hola "+ usuario +" ingresá la contraseña (entrar)");
}

//---------------------- CONTROL FICHAJE

alert(usuario + " te doy la bienvenida a la plataforma de fichaje y control de empleados");

//----- FUNCION CONSTRUCTORA

function Empleado(nombre, edad, genero, tarde, jus, injus) {
    this.nombre = nombre;
    this.edad = edad;
    this.genero = genero;
    this.tarde = tarde;
    this.jus = jus;
    this.injus = injus;
}

//----- OBJETOS

const ramiro = {
    nombre : "Ramiro",
    apellido : "Perez",
    edad : 27,
    genero : "Masculino",
    tarde : 2,
    jus : 1,
    injus : 0,
};

let docRamiro = document.querySelector("#ramiro .container");

docRamiro.innerHTML = `
    <h3><b>${ramiro.nombre} ${ramiro.apellido}</b></h3>
    <p>${ramiro.edad} Años</p> 
    <p>${ramiro.tarde} Llegadas tarde en el úiltimo mes.</p>
    <p>${ramiro.jus} Ausencias justificadas.</p>
    <p>${ramiro.injus} Ausencias injustificadas.</p> `

//-----

const laura = {
    nombre : "Laura",
    apellido : "Antona",
    edad : 31,
    genero : "Femenino",
    tarde : 0,
    jus : 0,
    injus : 0,
}

let docLaura = document.querySelector("#laura .container");

docLaura.innerHTML = `
    <h3><b>${laura.nombre} ${laura.apellido}</b></h3>
    <p>${laura.edad} Años</p> 
    <p>${laura.tarde} Llegadas tarde en el úiltimo mes.</p>
    <p>${laura.jus} Ausencias justificadas.</p>
    <p>${laura.injus} Ausencias injustificadas.</p> `

//-----

const juan = {
    nombre : "Juan",
    apellido : "Valente",
    edad : 23,
    genero : "Masculino",
    tarde : 2,
    jus : 1,
    injus : 0,
}

let docJuan = document.querySelector("#juan .container");

docJuan.innerHTML = `
    <h3><b>${juan.nombre} ${juan.apellido}</b></h3>
    <p>${juan.edad} Años</p> 
    <p>${juan.tarde} Llegadas tarde en el úiltimo mes.</p>
    <p>${juan.jus} Ausencias justificadas.</p>
    <p>${juan.injus} Ausencias injustificadas.</p> `

//-----

const marcelo = {
    nombre : "Marcelo",
    apellido : "Cotti",
    edad : 25,
    genero : "Masculino",
    tarde : 1,
    jus : 2,
    injus : 1,
}

let docMarcelo = document.querySelector("#marcelo .container");

docMarcelo.innerHTML = `
    <h3><b>${marcelo.nombre} ${marcelo.apellido}</b></h3>
    <p>${marcelo.edad} Años</p> 
    <p>${marcelo.tarde} Llegadas tarde en el úiltimo mes.</p>
    <p>${marcelo.jus} Ausencias justificadas.</p>
    <p>${marcelo.injus} Ausencias injustificadas.</p> `

//-----

const romina = {
    nombre : "Romina",
    apellido : "Conti",
    edad : 21,
    genero : "Femenino",
    tarde : 3,
    jus : 0,
    injus : 1,
}

let docRomina = document.querySelector("#romina .container");

docRomina.innerHTML = `
    <h3><b>${romina.nombre} ${romina.apellido}</b></h3>
    <p>${romina.edad} Años</p> 
    <p>${romina.tarde} Llegadas tarde en el úiltimo mes.</p>
    <p>${romina.jus} Ausencias justificadas.</p>
    <p>${romina.injus} Ausencias injustificadas.</p> `

//----- PROMEDIO

const promedio = {
    nombre:"Promedio",
    tarde : 0,
    jus : 0,
    injus : 0,
}

let docPromedio = document.querySelector("#promedios");

//----- ARRAY

const empleados = [ramiro,laura,juan,marcelo,romina];
const empleadosMasc=[];
const empleadosFem=[];

//----- NUEVOS OBJETOS

const florencia={
    nombre : "Florencia",
    apellido : "Perez",
    edad : 24,
    genero : "Femenino",
    tarde : 2,
    jus : 1,
    injus : 0,
}

let docFlorencia = document.querySelector("#florencia .container");

docFlorencia.innerHTML = `
    <h3><b>${florencia.nombre} ${florencia.apellido}</b></h3>
    <p>${florencia.edad} Años</p> 
    <p>${florencia.tarde} Llegadas tarde en el úiltimo mes.</p>
    <p>${florencia.jus} Ausencias justificadas.</p>
    <p>${florencia.injus} Ausencias injustificadas.</p> `

//-----

const joaquin={
    nombre : "Joaquin",
    apellido : "Lugli",
    edad : 23,
    genero : "Masculino",
    tarde : 1,
    jus : 0,
    injus : 0,
}

let docjoaquin = document.querySelector("#joaquin .container");

docjoaquin.innerHTML = `
    <h3><b>${joaquin.nombre} ${joaquin.apellido}</b></h3>
    <p>${joaquin.edad} Años</p> 
    <p>${joaquin.tarde} Llegadas tarde en el úiltimo mes.</p>
    <p>${joaquin.jus} Ausencias justificadas.</p>
    <p>${joaquin.injus} Ausencias injustificadas.</p> `

//----- PUSH NUEVOS OBJETOS

empleados.push(florencia)
empleados.push(joaquin)

//----- FUNCIONES

function promTarde(){
	promedio.tarde = (
        empleados[0].tarde+
        empleados[1].tarde+
        empleados[2].tarde+
        empleados[3].tarde+
        empleados[4].tarde+
        empleados[5].tarde+
        empleados[6].tarde) / 7;}

function promJus(){
	promedio.jus = (
        empleados[0].jus+
        empleados[1].jus+
        empleados[2].jus+
        empleados[3].jus+
        empleados[4].jus+
        empleados[5].jus+
        empleados[6].jus) / 7;}

function promInjus(){
	promedio.injus = (
        empleados[0].injus+
        empleados[1].injus+
        empleados[2].injus+
        empleados[3].injus+
        empleados[4].injus+
        empleados[5].injus+
        empleados[6].injus) / 7;}

promTarde();
promJus();
promInjus();

//----- PROMEDIO EN HTML

docPromedio.innerHTML = `
        <h2>Promedios</h2>
        <h3>Llegadas tarde: ${promedio.tarde.toFixed(2)}</h3>
        <h3>Ausencias justificadas: ${promedio.jus.toFixed(2)}</h3>
        <h3>Ausencias injustificadas: ${promedio.injus.toFixed(2)}</h3>`
