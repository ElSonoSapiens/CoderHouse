//------------- OBJETOS

const PROFESOR = {
	nombre: "Diego",
	apellido: "Hernandez",
	edad: 32,
	trabajando: true,
}

console.log(PROFESOR);
console.log(PROFESOR.nombre);
console.log(PROFESOR.apellido);
console.log(PROFESOR.edad);
console.log(PROFESOR.trabajando);

PROFESOR.nombre = "Lissie"
console.log(PROFESOR.nombre)
PROFESOR.edad = PROFESOR.edad +1
console.log(PROFESOR.edad)
console.log(PROFESOR.nombre)

const ALUMNO = {
	nombre: "barbi",
	apellido: "hernandez",
}

console.log(ALUMNO.nombre)

// --------------- CONTRUCTOR

function ESTUDIANTE (nombre,apellido,edad){
	this.nombre = nombre;
	this.apellido = apellido;
	this.edad = edad;
	this.festejar = function (){console.log("Soy "+this.nombre + " y estoy feliz por haber aprobado.")}
}

const ESTUDIANTE1 = new ESTUDIANTE("Guillermo","Dabenigno", 25)

console.log(ESTUDIANTE1)

let hoy = new Date()
console.log(hoy)

// --------------------------------

/* 
Crear objeto con 3 propiedades
console.log de esas propiedades
crear funcion constructora para otro objeto
crear instancia de esa funcion constructora 
*/

const PC = {
	ram: "16GB",
	hdd: "1TB",
	procesador: "Ryzen 9 5900X",
}
console.log(PC.ram)
console.log(PC.hdd)
console.log(PC.procesador)

function CLIENTE (nombre,apellido,dni, celular){
	this.nombre = nombre;
	this.apellido = apellido;
	this.dni = dni;
	this.celular = celular;	
}

const CLIENTE1 = new CLIENTE("Juan","Perez", 37865946, 1150456895)
const CLIENTE2 = new CLIENTE("Paula","Darco", 41456895, 1132354584)

console.log(CLIENTE1)
console.log(CLIENTE2)

console.log(ESTUDIANTE1.nombre.toUpperCase())
console.log(ESTUDIANTE1.apellido.toLowerCase())
console.log(ESTUDIANTE1.nombre.length)

ESTUDIANTE1.festejar()

const ESTUDIANTE2 = new ESTUDIANTE("Diego","Hernandez", 32)

ESTUDIANTE2.festejar()
console.log("edad" in ESTUDIANTE1);
console.log("apellido" in ESTUDIANTE2);

for(const propiedad in PROFESOR){
	console.log(PROFESOR[propiedad])
}

class TUTOR{
	constructor(nombre,apellido,edad,camada){
		this.nombre = nombre;
		this.apellido = apellido;
		this.edad = edad;
		this.camada = camada;
	}
	hablar(){
		console.log("Hola mi nombre es "+this.nombre)
	}
}

const TUTOR1 = new TUTOR("Cristian","Cabrera,20,7")
	console.log(TUTOR1.nombre)

TUTOR1.hablar()

/* 
Una constructora con la sintaxis nueva
Un metodo para la constructora que haga un console.log
Un metodo para la constructora que cambie alguna propiedad interna
Crear una instancia de ese objeto
Consologearlo
*/

class COCINA{
	constructor(horno,heladera,bacha,microhondas){
		this.horno = horno;
		this.heladera = heladera;
		this.bacha = bacha;
		this.microhondas = microhondas;
	}
}

console.log()

/*
Consigna: A partir de los ejemplos mostrados la primera clase, y en función del tipo de simulador que hayas elegido, deberás:
Crear al menos un objeto para controlar el funcionamiento de tu simulador.
Incorporar sus propiedades y su constructor.
Invocar a ese objeto en algún momento donde el usuario realice alguna acción.
Utilizar sus mètodos.
>>Aspectos a incluir en el entregable: Archivo HTML y Archivo JS, referenciado en el HTML por etiqueta <script src="js/miarchivo.js"></script>, que incluya la definición de un algoritmo en JavaScript que emplee objetos para elementos con propiedades y mètodos comunes.
>>Ejemplo:
Algunos objetos a identificar que forman parte del simulador pueden ser: Producto, Persona,Libro, Auto, Comida, Bebida, Tarea, etc.
*/
