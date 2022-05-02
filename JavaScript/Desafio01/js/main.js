//---------------------- USUARIO Y CONTRASEÑA

let usuario = prompt("Hola. ¿Cómo te llamás?")
while(usuario ==""){
	usuario=prompt("Debés ingresar tu nombre")
}
let entrada = prompt("Hola "+ usuario +" ingresá la contraseña")
while(entrada !="entrar"){
	alert("Contraseña Incorrecta");
	entrada = prompt("Hola "+ usuario+" ingresá la contraseña");
}

//---------------------- FERIADOS

let mes = prompt("Ingresar un mes del año.");
do{	
	switch(mes){
		case "enero":
		case "Enero":
		case "ENERO":
			alert("En Enero los feriado son: el 1") 
			break;
		case "febrero":
		case "Febrero":
		case "FEBRERO":
			alert("En Febrero los feriado son: el 28") 
			break;
		case "marzo":
		case "Marzo":
		case "MARZO":
			alert("En Marzo los feriado son: el 1 y el 24") 
			break;
		case "abril":
		case "Abril":
		case "ABRIL":
			alert("En Abril los feriado son: el 2, el 14, el 15, el 16, el 17, el 22, el 23 y el 24") 
			break;
		case "mayo":
		case "Mayo":
		case "MAYO":
			alert("En Mayo los feriado son: el 1, el 2, el 18 y el 25") 
			break;
		case "junio":
		case "Junio":
		case "JUNIO":
			alert("En Junio los feriado son: el 17 y el 20") 
			break;
		case "julio":
		case "Julio":
		case "JULIO":
			alert("En Julio los feriado son: el 17 y el 30") 
			break;
		case "agosto":
		case "Agosto":
		case "AGOSTO":
			alert("En Agosto los feriado son: el 15") 
			break;
		case "septiembre":
		case "Septiembre":
		case "SEPTIEMBRE":		
			alert("En Septiembre los feriado son: el 26 y el 27") 
			break;
		case "octubre":
		case "Octubre":
		case "OCTUBRE":
			alert("En Octubre los feriado son: el 5, el 7 y el 10") 
			break;
		case "noviembre":
		case "Noviembre":
		case "NOVIEMBRE":
			alert("En Noviembre los feriado son: el 20 y el 21") 
			break;
		case "diciembre":
		case "Diciembre":
		case "DICIEMBRE":
			alert("En Diciembre los feriado son: el 8, el 9 y el 25") 
			break;	
	}
	mes = prompt("Por favor, ingresar un mes del año.");
}while(mes != "ESC");