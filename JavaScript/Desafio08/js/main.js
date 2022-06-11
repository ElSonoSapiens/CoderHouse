// //-------------------------------------------------- USUARIO Y CONTRASEÑA

// let usuario = prompt("Hola. ¿Cómo te llamás?");
// while(usuario ==""){
// 	usuario=prompt("Debés ingresar tu nombre");
// }
// let entrada = prompt("Hola "+ usuario +" ingresá la contraseña (entrar)");
// while(entrada !="entrar"){
// 	alert("Contraseña Incorrecta");
// 	entrada = prompt("Hola "+ usuario +" ingresá la contraseña (entrar)");
// }

// //-------------------------------------------------- CONTROL FICHAJE

// alert(usuario + " te doy la bienvenida a la plataforma de fichaje y control de empleados");

//-------------------------------------------------- FUNCION CONSTRUCTORA

function Empleado(nombre, apellido, edad, genero, tarde, jus, injus) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.genero = genero;
    this.tarde = tarde;
    this.jus = jus;
    this.injus = injus;
}

//-------------------------------------------------- OBJETOS

const ramiro = {
    nombre : "Ramiro",
    apellido : "Perez",
    edad : 27,
    genero : "Masculino",
    tarde : 2,
    jus : 1,
    injus : 0,
};



//--------------------------------------------------

const laura = {
    nombre : "Laura",
    apellido : "Antona",
    edad : 31,
    genero : "Femenino",
    tarde : 0,
    jus : 0,
    injus : 0,
}



//--------------------------------------------------

const juan = {
    nombre : "Juan",
    apellido : "Valente",
    edad : 23,
    genero : "Masculino",
    tarde : 2,
    jus : 1,
    injus : 0,
}



//--------------------------------------------------

const marcelo = {
    nombre : "Marcelo",
    apellido : "Cotti",
    edad : 25,
    genero : "Masculino",
    tarde : 1,
    jus : 2,
    injus : 1,
}



//--------------------------------------------------

const romina = {
    nombre : "Romina",
    apellido : "Conti",
    edad : 21,
    genero : "Femenino",
    tarde : 3,
    jus : 0,
    injus : 1,
}



//-------------------------------------------------- PROMEDIO

const promedio = {
    nombre:"Promedio",
    tarde : 0,
    jus : 0,
    injus : 0,
}

let docPromedio = document.querySelector("#promedios");

//-------------------------------------------------- ARRAY

const empleados = [ramiro,laura,juan,marcelo,romina];

//-------------------------------------------------- NUEVOS OBJETOS

const florencia={
    nombre : "Florencia",
    apellido : "Perez",
    edad : 24,
    genero : "Femenino",
    tarde : 2,
    jus : 1,
    injus : 0,
}



//--------------------------------------------------

const joaquin={
    nombre : "Joaquin",
    apellido : "Lugli",
    edad : 23,
    genero : "Masculino",
    tarde : 1,
    jus : 0,
    injus : 0,
}



//-------------------------------------------------- PUSH NUEVOS OBJETOS

empleados.push(florencia)
empleados.push(joaquin)

//-------------------------------------------------- FUNCIONES

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

//----- BUSCADOR

function myFunction() {
    // Declare variables
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('searchInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');

    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        (txtValue.toUpperCase().indexOf(filter) > -1) ? 
        li[i].style.display = "" : li[i].style.display = "none";
    }
}

//-------------------------------------------------- NUEVO EMPLEADO

let inputNombre = "";
let inputApellido = "";
let inputEdad = 18;
let inputGenero = "Masculino";
let tarde = 0;
let jus = 0;
let injus = 0;

let nuevoGetEmpleado = {};

selectNuevoEmpleado = document.getElementById("nuevoEmpleado")
    selectNuevoEmpleado.addEventListener("click",clickNuevoEmpleado)
        function clickNuevoEmpleado(){
            formNuevoEmpleado.innerHTML += `
                <h2>Nuevo Empleado</h2>
                <input type="text" placeholder="Nombre" id="inputNombre">
                <input type="text" placeholder="Apellido" id="inputApellido">
                <input type="text" placeholder="Edad" id="inputEdad">
                <select name="select" id="inputGenero">
                    <option value="Masculino">Masculino</option>
                    <option value="Femenino">Femenino</option>
                </select>
                <button id="submitEmpleado">Guardar</button>
            `       
            guardarNuevoEmpleado = document.getElementById("submitEmpleado")
                guardarNuevoEmpleado.addEventListener("click",clickGuardarNuevoEmpleado)
                    function clickGuardarNuevoEmpleado(){
                        
                        inputNombre = document.getElementById("inputNombre").value;
                        inputApellido = document.getElementById("inputApellido").value;
                        inputEdad = parseInt(document.getElementById("inputEdad").value);
                        inputGenero = document.getElementById("inputGenero").value;
                        tarde = 0;
                        jus = 0;
                        injus = 0;
                        
                        if (inputNombre != '' && inputApellido != '' && inputEdad >=18){
                            
                            newEmpleado = new Empleado(inputNombre,inputApellido,inputEdad,inputGenero,tarde,jus,injus);
                            empleados.push(newEmpleado);

                            localStorage.setItem(inputNombre+inputApellido, JSON.stringify(empleados[empleados.length - 1]));
                                    
                            nuevoGetEmpleado = JSON.parse(localStorage.getItem(inputNombre + inputApellido));
                            console.log(nuevoGetEmpleado);

                                (inputGenero == 'Masculino') ?
                                    planilla.innerHTML += `
                                    <li><a href="#">
                                        <div class="card" id=${nuevoGetEmpleado.nombre}>
                                            <img src="img/img_avatar.png" alt="Avatar">
                                            <div class="container"><h3><b>${nuevoGetEmpleado.nombre} ${nuevoGetEmpleado.apellido}</b></h3><p>${nuevoGetEmpleado.edad} Años</p> </div>
                                        </div>
                                    </a>`
                                :
                                    planilla.innerHTML += `
                                    <li><a href="#">
                                        <div class="card" id=${nuevoGetEmpleado.nombre}>
                                            <img src="img/img_avatar2.png" alt="Avatar">
                                            <div class="container"><h3><b>${nuevoGetEmpleado.nombre} ${nuevoGetEmpleado.apellido}</b></h3><p>${nuevoGetEmpleado.edad} Años</p> </div>
                                        </div>
                                    </a>`
                                ;

                                document.getElementById("inputNombre").value = "";
                                document.getElementById("inputApellido").value = "";
                                document.getElementById("inputEdad").value = "";

                        }else{
                            alert("Error - Faltan datos o menor de edad.")};
                    };                          
        };

// ------ NUEVO ARRAY

let nuevoArray = [];

for(var i=0;i<localStorage.length; i++) {
    buscarEmpleado = JSON.parse(localStorage.getItem(localStorage.key(i)));
    nuevoArray.push(buscarEmpleado);
}

//---------------- PROMEDIO

docPromedio.innerHTML = `
    <h2>Promedio mensual entre todos los empleados</h2>
    <h3>Llegadas tarde: ${promedio.tarde.toFixed(2)}</h3>
    <h3>Ausencias justificadas: ${promedio.jus.toFixed(2)}</h3>
    <h3>Ausencias injustificadas: ${promedio.injus.toFixed(2)}</h3>`

//------ ARRAY FINAL

let arrayFinal = empleados.concat(nuevoArray);

for(var i=0;i<arrayFinal.length; i++) {

    console.log(arrayFinal[i].nombre+arrayFinal[i].apellido);

        (arrayFinal[i].genero == 'Masculino') ?
                                            planilla.innerHTML += `
                                            <li><a href="#">
                                                <div class="card" id=${arrayFinal[i].nombre+arrayFinal[i].apellido}>
                                                    <img src="img/img_avatar.png" alt="Avatar">
                                                    <div class="container"><h3><b>${arrayFinal[i].nombre} ${arrayFinal[i].apellido}</b></h3><p>${arrayFinal[i].edad} Años</p> </div>
                                                </div>
                                            </a>`
                                        :
                                            planilla.innerHTML += `
                                            <li><a href="#">
                                                <div class="card" id=${arrayFinal[i].nombre+arrayFinal[i].apellido}>
                                                    <img src="img/img_avatar2.png" alt="Avatar">
                                                    <div class="container"><h3><b>${arrayFinal[i].nombre} ${arrayFinal[i].apellido}</b></h3><p>${arrayFinal[i].edad} Años</p> </div>
                                                </div>
                                            </a>`
        ;
}

//-------------------------------------------------- RAMIRO

selectRamiro = document.getElementById(arrayFinal[0].nombre+arrayFinal[0].apellido)
    selectRamiro.addEventListener("click",clickRamiro)
        function clickRamiro(){   
            nombre.innerHTML = `<h2>${arrayFinal[0].nombre} ${arrayFinal[0].apellido}</h2>`
            seleccionado.innerHTML= `
                                    <h3>Llegadas tarde: ${arrayFinal[0].tarde.toFixed(2)}</h3>
                                    <h3>Ausencias justificadas: ${arrayFinal[0].jus.toFixed(2)}</h3>
                                    <h3>Ausencias injustificadas: ${arrayFinal[0].injus.toFixed(2)}</h3>`
            selectRamiro.classList.toggle('borde');
        };

//-------------------------------------------------- LAURA

selectLaura = document.getElementById(arrayFinal[1].nombre+arrayFinal[1].apellido)
    selectLaura.addEventListener("click",clickLaura)
        function clickLaura(){
            nombre.innerHTML = `<h2>${arrayFinal[1].nombre} ${arrayFinal[1].apellido}</h2>`
            seleccionado.innerHTML= `
                                    <h3>Llegadas tarde: ${arrayFinal[1].tarde.toFixed(2)}</h3>
                                    <h3>Ausencias justificadas: ${arrayFinal[1].jus.toFixed(2)}</h3>
                                    <h3>Ausencias injustificadas: ${arrayFinal[1].injus.toFixed(2)}</h3>`
            selectLaura.classList.toggle('borde');
        };

//-------------------------------------------------- JUAN

selectJuan = document.getElementById(arrayFinal[2].nombre+arrayFinal[2].apellido)
    selectJuan.addEventListener("click",clickJuan)
        function clickJuan(){
            nombre.innerHTML = `<h2>${arrayFinal[2].nombre} ${arrayFinal[2].apellido}</h2>`
            seleccionado.innerHTML= `
                                    <h3>Llegadas tarde: ${arrayFinal[2].tarde.toFixed(2)}</h3>
                                    <h3>Ausencias justificadas: ${arrayFinal[2].jus.toFixed(2)}</h3>
                                    <h3>Ausencias injustificadas: ${arrayFinal[2].injus.toFixed(2)}</h3>`
            selectJuan.classList.toggle('borde');
        };

//-------------------------------------------------- MARCELO

selectMarcelo = document.getElementById(arrayFinal[3].nombre+arrayFinal[3].apellido)
    selectMarcelo.addEventListener("click",clickMarcelo)
        function clickMarcelo(){
            nombre.innerHTML = `<h2>${arrayFinal[3].nombre} ${arrayFinal[3].apellido}</h2>`
            seleccionado.innerHTML= `
                                    <h3>Llegadas tarde: ${arrayFinal[3].tarde.toFixed(2)}</h3>
                                    <h3>Ausencias justificadas: ${arrayFinal[3].jus.toFixed(2)}</h3>
                                    <h3>Ausencias injustificadas: ${arrayFinal[3].injus.toFixed(2)}</h3>`
            selectMarcelo.classList.toggle('borde');
        };

//-------------------------------------------------- ROMINA

selectRomina = document.getElementById(arrayFinal[4].nombre+arrayFinal[4].apellido)
    selectRomina.addEventListener("click",clickRomina)
        function clickRomina(){
            nombre.innerHTML = `<h2>${arrayFinal[4].nombre} ${arrayFinal[4].apellido}</h2>`
            seleccionado.innerHTML= `
                                    <h3>Llegadas tarde: ${arrayFinal[4].tarde.toFixed(2)}</h3>
                                    <h3>Ausencias justificadas: ${arrayFinal[4].jus.toFixed(2)}</h3>
                                    <h3>Ausencias injustificadas: ${arrayFinal[4].injus.toFixed(2)}</h3>`
            selectRomina.classList.toggle('borde');
        };

//-------------------------------------------------- FLORENCIA

selectFlorencia = document.getElementById(arrayFinal[5].nombre+arrayFinal[5].apellido)
    selectFlorencia.addEventListener("click",clickFlorencia)
        function clickFlorencia(){
            nombre.innerHTML = `<h2>${arrayFinal[5].nombre} ${arrayFinal[5].apellido}</h2>`
            seleccionado.innerHTML= `
                                <h3>Llegadas tarde: ${arrayFinal[5].tarde.toFixed(2)}</h3>
                                <h3>Ausencias justificadas: ${arrayFinal[5].jus.toFixed(2)}</h3>
                                <h3>Ausencias injustificadas: ${arrayFinal[5].injus.toFixed(2)}</h3>`
            selectFlorencia.classList.toggle('borde');
        };

//-------------------------------------------------- JOAQUIN

selectJoaquin = document.getElementById(arrayFinal[6].nombre+arrayFinal[6].apellido)
    selectJoaquin.addEventListener("click",clickJoaquin)
        function clickJoaquin(){
            nombre.innerHTML = `<h2>${arrayFinal[6].nombre} ${arrayFinal[6].apellido}</h2>`
            seleccionado.innerHTML= `
                                    <h3>Llegadas tarde: ${arrayFinal[6].tarde.toFixed(2)}</h3>
                                    <h3>Ausencias justificadas: ${arrayFinal[6].jus.toFixed(2)}</h3>
                                    <h3>Ausencias injustificadas: ${arrayFinal[6].injus.toFixed(2)}</h3>`
            selectJoaquin.classList.toggle('borde');
        };

let [a,b,c,d,e,f,g,h] = arrayFinal;

console.log(...arrayFinal)

spread = {
    ...arrayFinal
}
