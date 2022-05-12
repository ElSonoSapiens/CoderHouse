/* const numeros =[1,2,3,4,5];

console.log(numeros[0])
console.log(numeros[3])

let resultado = numeros[1]+numeros[3]

console.log(resultado);

//---------------

const arrayNumeros =[1,2,3,4,5]
console.log("El largo del array es: "+ arrayNumeros.length)
for(let i=0; i<5;i++){
	console.log(arrayNumeros[i])
}

//----------------

// array.propiedad
// array.metodo()

//----------------

const marcasAuto =["Ford", "Tesla","Honda","Renault"]
console.log(marcasAuto)
marcasAuto.push("BMW")
console.log(marcasAuto)
console.log(marcasAuto[3])
console.log(marcasAuto[1])
marcasAuto.unshift(marcasAuto)
console.log(marcasAuto) */

// .pop - quitar el último elemento

/* let marcaEliminada = marcasAuto.pop()
console.log("marca eliminada: " + marcaEliminada)
console.log(marcasAuto) */

//.shift - quitar el primer elemento

/* let marcaEliminada2 = marcasAuto.shift()
console.log("marca eliminada: " + marcaEliminada2)
console.log(marcasAuto) */

// ------------ SPLICE

/* const arrayPosiciones =["primera" , "segunda", "tercera", "cuarta"];
// arrayPosicione.splice(1,2)
arrayPosiciones.splice((arrayPosiciones.length/2),(arrayPosiciones.length/2))
console.log(arrayPosiciones)

// ------------ JOIN

const arrayNombres =["Diego", "Lissie" , "Barbi", "Trini"]

console.log(arrayNombres.join(" - "))

// --------- CONCAT

const perros =["Trini","Barbi","Pachu", "Grecia"]
const gatos =["Uno", "Dos", "Tres", "Cuatro"]

const mascotas = perros.concat(gatos)
console.log(mascotas)

// ------------ SLICE

const colores =["rojo", "azul","verde","amarillo","naranja","celeste","rambo"]
const noPrimarios = colores.slice(3,6)
console.log(noPrimarios)

// ---------- INDEXOF

const estudiantes = ["diego", "lissie", "tirini", "barbi"]
console.log(estudiantes.indexOf("barbi"))

const estudiantesExpulsados = estudiantes.slice(estudiantes.indexOf("lissie",estudiantes.length))
console.log(estudiantesExpulsados)

// ------- INCLUDES

const animales =["perro","gato","palomas","ratas"]
console.log(animales.includes("perro"))
console.log(animales.includes("monos"))

if(animales.includes("perro")==true){
	console.log("el perro será bienvenido")
}else{
	console.log("No aceptamos ese tipo de animales")
} */

// ------------- REVERSE


// ------------- EJERCICIO

const listaNombres =[];
let cantidad =5;

do{
	let entrada = prompt("Ingresar nombre");
	listaNombres.push(entrada.toUpperCase)
	console.log(listaNombres.length)
}while(listaNombres.length != cantidad){
	const nuevaLista= listaNombres.concat(["ANA","EMA"])
	alert(nuevaLista.join("\n"))
}



const eliminar=(array,valorAEliminar)=>{
	let index =array.index(valorAEliminar);
	if(index !=-1){
		array.splice(index,1);
	}else{
		return "el Elemento no exisste dentro del array"
	}
}