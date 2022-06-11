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

let docRamiro = document.querySelector("#ramiro .container");

docRamiro.innerHTML = `
    <h3><b>${ramiro.nombre} ${ramiro.apellido}</b></h3>
    <p>${ramiro.edad} Años</p>`

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

let docLaura = document.querySelector("#laura .container");

docLaura.innerHTML = `
    <h3><b>${laura.nombre} ${laura.apellido}</b></h3>
    <p>${laura.edad} Años</p>`

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

let docJuan = document.querySelector("#juan .container");

docJuan.innerHTML = `
    <h3><b>${juan.nombre} ${juan.apellido}</b></h3>
    <p>${juan.edad} Años</p> `

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

let docMarcelo = document.querySelector("#marcelo .container");

docMarcelo.innerHTML = `
    <h3><b>${marcelo.nombre} ${marcelo.apellido}</b></h3>
    <p>${marcelo.edad} Años</p> `

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

let docRomina = document.querySelector("#romina .container");

docRomina.innerHTML = `
    <h3><b>${romina.nombre} ${romina.apellido}</b></h3>
    <p>${romina.edad} Años</p> `

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

let docFlorencia = document.querySelector("#florencia .container");

docFlorencia.innerHTML = `
    <h3><b>${florencia.nombre} ${florencia.apellido}</b></h3>
    <p>${florencia.edad} Años</p> `

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

let docjoaquin = document.querySelector("#joaquin .container");

docjoaquin.innerHTML = `
    <h3><b>${joaquin.nombre} ${joaquin.apellido}</b></h3>
    <p>${joaquin.edad} Años</p>  `

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

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
        } else {
        li[i].style.display = "none";
        }
    }
}

//-------------------------------------------------- NUEVO EMPLEADO

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
                    <option value="masculino">Masculino</option>
                    <option value="femenino">Femenino</option>
                </select>
                <button id="submitEmpleado">Guardar</button>
            `       
            guardarNuevoEmpleado = document.getElementById("submitEmpleado")
                guardarNuevoEmpleado.addEventListener("click",clickGuardarNuevoEmpleado)
                    function clickGuardarNuevoEmpleado(){
                        
                        let inputNombre = document.getElementById("inputNombre").value;
                        let inputApellido = document.getElementById("inputApellido").value;
                        let inputEdad = parseInt(document.getElementById("inputEdad").value);
                        let inputGenero = document.getElementById("inputGenero").value;
                        let tarde = 0;
                        let jus = 0;
                        let injus = 0;
                        
                    
                        newEmpleado = new Empleado(inputNombre,inputApellido,inputEdad,inputGenero,tarde,jus,injus);
                        empleados.push(newEmpleado);

                        localStorage.setItem(inputNombre+inputApellido, JSON.stringify(empleados[empleados.length - 1]));
                                
                        nuevoGetEmpleado = JSON.parse(localStorage.getItem(inputNombre + inputApellido));
                        console.log(nuevoGetEmpleado);

                        if (inputGenero == 'masculino'){
                            planilla.innerHTML += `
                            <li><a href="#">
                                <div class="card" id=${nuevoGetEmpleado.nombre}>
                                    <img src="img/img_avatar.png" alt="Avatar">
                                    <div class="container"><h3><b>${nuevoGetEmpleado.nombre} ${nuevoGetEmpleado.apellido}</b></h3><p>${nuevoGetEmpleado.edad} Años</p> </div>
                                </div>
                            </a>`
                        }else{
                            planilla.innerHTML += `
                            <li><a href="#">
                                <div class="card" id=${nuevoGetEmpleado.nombre}>
                                    <img src="img/img_avatar2.png" alt="Avatar">
                                    <div class="container"><h3><b>${nuevoGetEmpleado.nombre} ${nuevoGetEmpleado.apellido}</b></h3><p>${nuevoGetEmpleado.edad} Años</p> </div>
                                </div>
                            </a>`
                        };

                        select = document.getElementById(nuevoGetEmpleado.nombre)
                            select.addEventListener("click",nuevoEmpleado)
                                function nuevoEmpleado(){
                                    nombre.innerHTML = `<h2>${nuevoGetEmpleado.nombre} ${nuevoGetEmpleado.apellido}</h2>`
                                    seleccionado.innerHTML = `
                                                            <h3>Llegadas tarde: ${tarde}</h3>
                                                            <h3>Ausencias justificadas: ${jus}</h3>
                                                            <h3>Ausencias injustificadas: ${injus}</h3>`
                                    select.classList.toggle('borde');
                                };

                        document.getElementById("inputNombre").value = "";
                        document.getElementById("inputApellido").value = "";
                        document.getElementById("inputEdad").value = "";
                    };                          
        };

//-------------------------------------------------- RAMIRO

selectRamiro = document.getElementById("ramiro")
    selectRamiro.addEventListener("click",clickRamiro)
        function clickRamiro(){   
            nombre.innerHTML = `<h2>${empleados[0].nombre} ${empleados[0].apellido}</h2>`
            seleccionado.innerHTML= `
                                    <h3>Llegadas tarde: ${ramiro.tarde.toFixed(2)}</h3>
                                    <h3>Ausencias justificadas: ${ramiro.jus.toFixed(2)}</h3>
                                    <h3>Ausencias injustificadas: ${ramiro.injus.toFixed(2)}</h3>`
            selectRamiro.classList.toggle('borde');
        }
localStorage.setItem('ramiro', JSON.stringify(ramiro));

//-------------------------------------------------- LAURA

selectLaura = document.getElementById("laura")
    selectLaura.addEventListener("click",clickLaura)
        function clickLaura(){
            nombre.innerHTML = `<h2>${empleados[1].nombre} ${empleados[1].apellido}</h2>`
            seleccionado.innerHTML= `
                                    <h3>Llegadas tarde: ${laura.tarde.toFixed(2)}</h3>
                                    <h3>Ausencias justificadas: ${laura.jus.toFixed(2)}</h3>
                                    <h3>Ausencias injustificadas: ${laura.injus.toFixed(2)}</h3>`
            selectLaura.classList.toggle('borde');
        };
localStorage.setItem('laura', JSON.stringify(laura));

//-------------------------------------------------- JUAN

selectJuan = document.getElementById("juan")
    selectJuan.addEventListener("click",clickJuan)
        function clickJuan(){
            nombre.innerHTML = `<h2>${empleados[2].nombre} ${empleados[2].apellido}</h2>`
            seleccionado.innerHTML= `
                                    <h3>Llegadas tarde: ${juan.tarde.toFixed(2)}</h3>
                                    <h3>Ausencias justificadas: ${juan.jus.toFixed(2)}</h3>
                                    <h3>Ausencias injustificadas: ${juan.injus.toFixed(2)}</h3>`
            selectJuan.classList.toggle('borde');
        };
localStorage.setItem('juan', JSON.stringify(juan));

//-------------------------------------------------- MARCELO

selectMarcelo = document.getElementById("marcelo")
    selectMarcelo.addEventListener("click",clickMarcelo)
        function clickMarcelo(){
            nombre.innerHTML = `<h2>${empleados[3].nombre} ${empleados[3].apellido}</h2>`
            seleccionado.innerHTML= `
                                    <h3>Llegadas tarde: ${marcelo.tarde.toFixed(2)}</h3>
                                    <h3>Ausencias justificadas: ${marcelo.jus.toFixed(2)}</h3>
                                    <h3>Ausencias injustificadas: ${marcelo.injus.toFixed(2)}</h3>`
            selectMarcelo.classList.toggle('borde');
        };
localStorage.setItem('marcelo', JSON.stringify(marcelo));

//-------------------------------------------------- ROMINA

selectRomina = document.getElementById("romina")
    selectRomina.addEventListener("click",clickRomina)
        function clickRomina(){
            nombre.innerHTML = `<h2>${empleados[4].nombre} ${empleados[4].apellido}</h2>`
            seleccionado.innerHTML= `
                                    <h3>Llegadas tarde: ${romina.tarde.toFixed(2)}</h3>
                                    <h3>Ausencias justificadas: ${romina.jus.toFixed(2)}</h3>
                                    <h3>Ausencias injustificadas: ${romina.injus.toFixed(2)}</h3>`
            selectRomina.classList.toggle('borde');
        };
localStorage.setItem('romina', JSON.stringify(romina));

//-------------------------------------------------- FLORENCIA

selectFlorencia = document.getElementById("florencia")
    selectFlorencia.addEventListener("click",clickFlorencia)
        function clickFlorencia(){
            nombre.innerHTML = `<h2>${empleados[5].nombre} ${empleados[5].apellido}</h2>`
            seleccionado.innerHTML= `
                                <h3>Llegadas tarde: ${florencia.tarde.toFixed(2)}</h3>
                                <h3>Ausencias justificadas: ${florencia.jus.toFixed(2)}</h3>
                                <h3>Ausencias injustificadas: ${florencia.injus.toFixed(2)}</h3>`
            selectFlorencia.classList.toggle('borde');
        };
localStorage.setItem('florencia', JSON.stringify(florencia));

//-------------------------------------------------- JOAQUIN

selectJoaquin = document.getElementById("joaquin")
    selectJoaquin.addEventListener("click",clickJoaquin)
        function clickJoaquin(){
            nombre.innerHTML = `<h2>${empleados[6].nombre} ${empleados[6].apellido}</h2>`
            seleccionado.innerHTML= `
                                    <h3>Llegadas tarde: ${joaquin.tarde.toFixed(2)}</h3>
                                    <h3>Ausencias justificadas: ${joaquin.jus.toFixed(2)}</h3>
                                    <h3>Ausencias injustificadas: ${joaquin.injus.toFixed(2)}</h3>`
            selectJoaquin.classList.toggle('borde');
        };
localStorage.setItem('joaquin', JSON.stringify(joaquin));

//---------------- PROMEDIO

docPromedio.innerHTML = `
    <h2>Promedio mensual entre todos los empleados</h2>
    <h3>Llegadas tarde: ${promedio.tarde.toFixed(2)}</h3>
    <h3>Ausencias justificadas: ${promedio.jus.toFixed(2)}</h3>
    <h3>Ausencias injustificadas: ${promedio.injus.toFixed(2)}</h3>`
