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

let ramiroTarde = 2;
let ramiroJus = 1;
let ramiroInjus = 0;

let lauraTarde = 0;
let lauraJus = 0;
let lauraInjus = 0;

let juanTarde = 4;
let juanJus = 0;
let juanInjus = 2;

let marceloTarde = 1;
let marceloJus = 1;
let marceloInjus = 0;

let rominaTarde = 3;
let rominaJus = 0;
let rominaInjus = 1;

let promedioTarde = 0;
let promedioJus = 0;
let promedioInjus = 0;

function promTarde(){
	promedioTarde = (ramiroTarde+lauraTarde+juanTarde+marceloTarde+rominaTarde)/5;}

function promJus(){
	promedioJus = (ramiroJus+lauraJus+juanJus+marceloJus+rominaJus)/5;}

function promInjus(){
	promedioInjus = (ramiroInjus+lauraInjus+juanInjus+marceloInjus+rominaInjus)/5;}

promTarde();
promJus();
promInjus();


let nombres = prompt("Elegí un número para observar la información correspondiente al empleado seleccionado:\n\n1. Ramiro\n2. Laura\n3. Juan\n4. Marcelo\n5. Romina\n\n9. Promedio mensual\n\n(esc) para salir");
do{
  	switch (nombres) {
        case "1":
            alert("Ramiro:\n\n" +ramiroTarde+" llegadas tarde en el úiltimo mes.\n" +ramiroJus+" Ausencias justificadas.\n" +ramiroInjus+" Ausencias injustificadas.");
            break;
		case "2":
			alert("Laura:\n\n" +lauraTarde+" llegadas tarde en el úiltimo mes.\n" +lauraJus+" Ausencias justificadas.\n" +lauraInjus+" Ausencias injustificadas.");
            break;
		case "3":
			alert("Juan:\n\n" +juanTarde+" llegadas tarde en el úiltimo mes.\n" +juanJus+" Ausencias justificadas.\n" +juanInjus+" Ausencias injustificadas.");
			break;	
		case "4":
			alert("Marcelo:\n\n" +marceloTarde+" llegadas tarde en el úiltimo mes.\n" +marceloJus+" Ausencias justificadas.\n" +marceloInjus+" Ausencias injustificadas.");
			break;
		case "5":
			alert("Romina:\n\n" +rominaTarde+" llegadas tarde en el úiltimo mes.\n" +rominaJus+" Ausencias justificadas.\n" +rominaInjus+" Ausencias injustificadas.");
			break;
		case "9":
			alert("Promedio de empleados:\n\n" +promedioTarde+" llegadas tarde en el úiltimo mes.\n" +promedioJus+" Ausencias justificadas.\n" +promedioInjus+" Ausencias injustificadas.");
			break;	
        default:
           alert("Seleccioná una opción válida")
           break;
   }
   nombres = prompt("Elegí un número para observar la información correspondiente al empleado seleccionado:\n\n1. Ramiro\n2. Laura\n3. Juan\n4. Marcelo\n5. Romina\n\n9. Promedio mensual\n\n(esc) para salir");
} while(nombres != "esc");
