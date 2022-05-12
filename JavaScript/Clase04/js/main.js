//----------------- CLASE 4 FUNCIONES

/* function nombre (parámetros){
	intrucciones;
	return;
} */

/* function saludar(nombre){
	console.log("Hola "+nombre);
}

saludar("Diego");//invoco la funcion
saludar("Lissie");// se i9nvoca con un parámetro distinto
saludar("Barbaria");
saludar("Trinidad");

function siguiente(numero){
	console.log(numero+1);
}
siguiente(7);

//-----------------

function sumarDosNumero(numero1,numero2){
	let resultado =numero1+numero2;
	return resultado;
}

function mostrarPorConsola (resultado){
	console.log(resultado);
}

mostrarPorConsola(sumarDosNumero(1,2)); */

// escribir una funcion que reciba un numero y nos devuelva si un mensaje diciendo si es par o impar.

/* function esPar(numero){ 
    if (numero % 2 == 0){
		console.log("El número "+numero+" es Par");
	}
	else{
		console.log("El número "+numero+" es Impar");
	}
} 
esPar(7);
esPar(9);
esPar(12);
esPar(18); */

// escribir una funcion que reciba un numero y una edad y nos indique cuantos años cumplirá la persona el año que viene.

/* function cumple(nombre, edad){
	console.log(nombre+" cumplirá "+(edad+1)+" el año que viene");
}
cumple("Diego",32);
cumple("Lissie",30);
cumple("Barbara",6);
cumple("Trinidad",5); */

//------- ANÓNIMA

/* saludar("Diego");

function saludar(nombre){
	console.log("hola "+nombre);
}

let saludarVariable = function(nombre){
	console.log("hola "+nombre);
}
saludarVariable("Lissie"); */

// ---------- FLECHA

/* let sumarUno= numero => numero+1;
console.log(sumarUno(4));

let saludarComplejo = (nombre) =>{
	let nombreFormal = "Hola Don "+nombre;
	return nombreFormal;
}

console.log(saludarComplejo("Juan"));
 */

/* 1) Crear una funcion declarada que diga "Iniciando este programa".
2) Crear una funcion declarada que piuda el nombre y que puida un genero y en base al genero salude como Bienvenido/Bienvenida. 
3) Crear una funcon anonima que tenga un parametro que muestre el siguiente de un numero.
4) Crear una funcion anonima que muestre el siguiente y el anterior de un numero.
5) Tomar algunas de las funciones que ya hicieron y convertirla en flecha. */

//------------- 1 

function Iniciar(){
	console.log("Iniciando Programa");
}

Iniciar();

//------------- 2

function Bienvenida(nombre, genero){
	if (genero == "hombre"){
		console.log("Hola "+nombre+", Bienvenido");
		if(genero == "mujer"){
			console.log("Hola "+nombre+", Bienvenida");
		}
	}
}

Bienvenida("Diego","hombre");
Bienvenida("Lissie","mujer");
