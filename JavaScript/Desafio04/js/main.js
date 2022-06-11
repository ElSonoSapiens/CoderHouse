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

//----- FUNCIONES



//----- OBJETOS

const ramiro = {
    nombre : "Ramiro",
    apellido : "Perez",
    edad : 27,
    genero : "Masculino",
    tarde : 2,
    jus : 1,
    injus : 0,
}
const laura = {
    nombre : "Laura",
    apellido : "Antona",
    edad : 31,
    genero : "Femenino",
    tarde : 0,
    jus : 0,
    injus : 0,
}
const juan = {
    nombre : "Juan",
    apellido : "Valente",
    edad : 23,
    genero : "Masculino",
    tarde : 2,
    jus : 1,
    injus : 0,
}
const marcelo = {
    nombre : "Marcelo",
    apellido : "Cotti",
    edad : 25,
    genero : "Masculino",
    tarde : 1,
    jus : 2,
    injus : 1,
}
const romina = {
    nombre : "Romina",
    apellido : "Conti",
    edad : 21,
    genero : "Femenino",
    tarde : 3,
    jus : 0,
    injus : 1,
}

//----- PROMEDIO

const promedio = {
    nombre:"Promedio",
    tarde : 0,
    jus : 0,
    injus : 0,
}

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
const joaquin={
    nombre : "Joaquin",
    apellido : "Lugli",
    edad : 23,
    genero : "Masculino",
    tarde : 1,
    jus : 0,
    injus : 0,
}

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

//----- BUSQUEDA (aún no definido)

/* let i = prompt("ingresá del 1 al 7")
alert("El género de "+(empleados[i-1].nombre)+" es "+(empleados[i-1].genero)); */

//----- WHILE/SWITCH

let nombres =""

while(nombres != "esc"){ 
    nombres = prompt( 
    "Elegí un número para observar la información correspondiente al empleado seleccionado:"+
    "\n\n1. "+(empleados[0].nombre)+" "+(empleados[0].apellido)+
    "\n2. "+(empleados[1].nombre)+" "+(empleados[1].apellido)+
    "\n3. "+(empleados[2].nombre)+" "+(empleados[2].apellido)+
    "\n4. "+(empleados[3].nombre)+" "+(empleados[3].apellido)+
    "\n5. "+(empleados[4].nombre)+" "+(empleados[4].apellido)+
    "\n6. "+(empleados[5].nombre)+" "+(empleados[5].apellido)+
    "\n7. "+(empleados[6].nombre)+" "+(empleados[6].apellido)+
    "\n\n9. Promedio mensual"+
    "\n\n(gen) filtrar empleados según su género"+
    "\n(esc) para salir");
        switch (nombres) {
        case "1":
            alert((empleados[0].nombre) +" "+ (empleados[0].apellido) + "\n\n" + (empleados[0].edad) + " años\n\n" + ramiro.tarde+" llegadas tarde en el úiltimo mes.\n" +ramiro.jus+" Ausencias justificadas.\n" +ramiro.injus+" Ausencias injustificadas.");
            break;
        case "2":
            alert((empleados[1].nombre) +" "+ (empleados[1].apellido) + "\n\n" + (empleados[1].edad) + " años\n\n" + laura.tarde+" llegadas tarde en el úiltimo mes.\n" +laura.jus+" Ausencias justificadas.\n" +laura.injus+" Ausencias injustificadas.");
            break;
        case "3":
            alert((empleados[2].nombre) +" "+ (empleados[2].apellido) + "\n\n" + (empleados[2].edad) + " años\n\n" + juan.tarde+" llegadas tarde en el úiltimo mes.\n" +juan.jus+" Ausencias justificadas.\n" +juan.injus+" Ausencias injustificadas.");
            break;  
        case "4":
            alert((empleados[3].nombre) +" "+ (empleados[3].apellido) + "\n\n" + (empleados[3].edad) + " años\n\n" + marcelo.tarde+" llegadas tarde en el úiltimo mes.\n" +marcelo.jus+" Ausencias justificadas.\n" +marcelo.injus+" Ausencias injustificadas.");
            break;
        case "5":
            alert((empleados[4].nombre) +" "+ (empleados[4].apellido) + "\n\n" + (empleados[4].edad) + " años\n\n" + romina.tarde+" llegadas tarde en el úiltimo mes.\n" +romina.jus+" Ausencias justificadas.\n" +romina.injus+" Ausencias injustificadas.");
            break;
        case "6":
            alert((empleados[5].nombre) +" "+ (empleados[5].apellido) + "\n\n" + (empleados[5].edad) + " años\n\n" + florencia.tarde+" llegadas tarde en el úiltimo mes.\n" +florencia.jus+" Ausencias justificadas.\n" +florencia.injus+" Ausencias injustificadas.");
            break;
        case "7":
            alert((empleados[6].nombre) +" "+ (empleados[6].apellido) + "\n\n" + (empleados[6].edad) + " años\n\n" + joaquin.tarde+" llegadas tarde en el úiltimo mes.\n" +joaquin.jus+" Ausencias justificadas.\n" +joaquin.injus+" Ausencias injustificadas.");
            break;
        case "9":
            alert((promedio.nombre)+" de empleados:\n\n" +promedio.tarde+" llegadas tarde en el úiltimo mes.\n" +promedio.jus+" Ausencias justificadas.\n" +promedio.injus+" Ausencias injustificadas.");
            break;  
        case "gen":
            for (let i= 0; i < empleados.length; i++) {
                if((empleados[i].genero)=="Masculino"){
                    empleadosMasc.push(empleados[i].nombre+" "+empleados[i].apellido + "\n")
                }else if((empleados[i].genero)=="Femenino"){
                    empleadosFem.push(empleados[i].nombre+" "+empleados[i].apellido+ "\n")
                }
            }            
            alert("Empleados Masculinos\n\n" + empleadosMasc.join("") + "\n\n" + "Empleadas Femeninas\n\n" + empleadosFem.join(""))
            break;  
        case "esc":
            alert("Hasta la próxima");
            break;      
        default:
           alert("Seleccioná una opción válida")
           break;
        }
} 