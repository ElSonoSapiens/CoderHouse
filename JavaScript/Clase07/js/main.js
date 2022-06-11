//------------ FUNCIONES DE ORDEN SUPERIOR (funcion dentro de otra funcion)

function mayorQue(n){
	return (m) => m>n
}

let mayorQueDiez = mayorQue(10);

console.log(mayorQueDiez(12));
console.log(mayorQueDiez(8));

//---- func por parametro

function doble(x){
	return x*2
}
function mitad(x){
	return x/2
}
function pedirNumero(X,callback){
	console.log(callback(X))
}
pedirNumero(4,doble)
pedirNumero(8,mitad)

//-------- EJEMPLOSCONCRETOS

// --- forEach

let array1 =[1,2,3,4,5]

//forEach ->para Cada parametro
	array1.forEach((num)=> console.log(num));

/* 	functionparaCada(array1);{
		for(let i = 0; i < array1.length; i++);{
			console.log(array1[i]);
		}
	} */

//------- find

const arrayDeObjetos = [
	{nombre:"Diego", apellido:"Hernandez",edad:32},
	{nombre:"Lissie", apellido:"Novoa",edad:30},
	{nombre:"Juan", apellido:"Perez",edad:31},
]

let resultado1 =arrayDeObjetos.find((elemento)=>elemento.nombre==="Diego");
let resultado2 =arrayDeObjetos.find((elemento)=>elemento.nombre==="Lissie");
let resultado3 =arrayDeObjetos.find((elemento)=>elemento.nombre==="Juan")

console.log(resultado1);
console.log(resultado2);
console.log(resultado3);

//--------- filter

let mayoresA30 = arrayDeObjetos.filter((elemento)=>elemento.edad>30);
console.log(mayoresA30);

//--------- some

let existe = arrayDeObjetos.some((elemento)=>elemento.nombre==="Diego");
console.log(existe);

let noExiste = arrayDeObjetos.some((elemento)=>elemento.nombre==="Robert");
console.log(noExiste);

//--------- map

let cumplieronAnios = arrayDeObjetos.map((elemento)=>{
	return{
		nombre:elemento.nombre,
		apellido:elemento.apellido,
		edad:elemento.edad+3,
	}
})
console.log(cumplieronAnios);

//--------- Reduce

let arrayDeNumero =[1,2,3,4,5];
let factorial = arrayDeNumero.reduce((acumulador,elemento)=>acumulador*elemento,1)
console.log(factorial);

//--------- Sort ->destructivo

let arrayDesordenado =[200,40,67,84,23,17]
console.log(arrayDesordenado.sort((a,b)=>a-b));
console.log(arrayDesordenado.sort((b,a)=>a-b));

//--------- Math
console.log( )
console.log(Math.PI)
console.log(Math.PI*2)
console.log(Math.E)
console.log(Math.min(2,5,6,7,8,9,20))
console.log(Math.max(2,5,6,7,8,9,20))
console.log(Math.floor(1.99))
console.log(Math.ceil(1.001))
console.log(Math.round(1.99))
console.log(Math.ceil(1.001))
console.log(Math.sqrt(25))
console.log(parseInt(Math.random()*10))

//----date

console.log(new.date);

const nacimientoDelProfe = new Date("January 27,1993");
console.log(nacimientoDelProfe)
console.log(nacimientoDelProfe.getDate())
console.log(nacimientoDelProfe.getMonth())
console.log(nacimientoDelProfe.getFullYear())


