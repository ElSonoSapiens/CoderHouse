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
const empleadosMasc=[];
const empleadosFem=[];

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

//-------------------------------------------------- PROMEDIO EN HTML

docPromedio.innerHTML = `
        <h2>Promedio mensual entre todos los empleados</h2>
        <h3>Llegadas tarde: ${promedio.tarde.toFixed(2)}</h3>
        <h3>Ausencias justificadas: ${promedio.jus.toFixed(2)}</h3>
        <h3>Ausencias injustificadas: ${promedio.injus.toFixed(2)}</h3>`

selectRamiro = document.getElementById("ramiro")
    selectRamiro.addEventListener("click",clickRamiro)
        function clickRamiro(){   
            nombre.innerHTML = `<h2>Seleccionaste a ${empleados[0].nombre} ${empleados[0].apellido}</h2>`
            seleccionado.innerHTML= `
                                    <h3>Llegadas tarde: ${ramiro.tarde.toFixed(2)}</h3>
                                    <h3>Ausencias justificadas: ${ramiro.jus.toFixed(2)}</h3>
                                    <h3>Ausencias injustificadas: ${ramiro.injus.toFixed(2)}</h3>`
            selectRamiro.style = `border: purple; border-style: solid; border-width: 0.3rem`
        };
    selectRamiro.addEventListener("dblclick",clickRamiroOf)
        function clickRamiroOf(){   
            nombre.innerHTML = `<h2>Seleccioná un empleado</h2>`
            seleccionado.innerHTML= `
                                    <h3>Llegadas tarde: </h3>
                                    <h3>Ausencias justificadas: </h3>
                                    <h3>Ausencias injustificadas: </h3>`
            selectRamiro.style = ``  
        };

//-------------------------------------------------- LAURA

selectLaura = document.getElementById("laura")
    selectLaura.addEventListener("click",clickLaura)
        function clickLaura(){
            nombre.innerHTML = `<h2>Seleccionaste a ${empleados[1].nombre} ${empleados[1].apellido}</h2>`
            seleccionado.innerHTML= `
                                    <h3>Llegadas tarde: ${laura.tarde.toFixed(2)}</h3>
                                    <h3>Ausencias justificadas: ${laura.jus.toFixed(2)}</h3>
                                    <h3>Ausencias injustificadas: ${laura.injus.toFixed(2)}</h3>`
            selectLaura.style = `border: purple; border-style: solid; border-width: 0.3rem`
        };
    selectLaura.addEventListener("dblclick",clickLauraOf)
        function clickLauraOf(){   
            nombre.innerHTML = `<h2>Seleccioná un empleado</h2>`
            seleccionado.innerHTML= `
                                    <h3>Llegadas tarde: </h3>
                                    <h3>Ausencias justificadas: </h3>
                                    <h3>Ausencias injustificadas: </h3>`
            selectLaura.style = ``        
        };

//-------------------------------------------------- JUAN

selectJuan = document.getElementById("juan")
    selectJuan.addEventListener("click",clickJuan)
        function clickJuan(){
            nombre.innerHTML = `<h2>Seleccionaste a ${empleados[2].nombre} ${empleados[2].apellido}</h2>`
            seleccionado.innerHTML= `
                                    <h3>Llegadas tarde: ${juan.tarde.toFixed(2)}</h3>
                                    <h3>Ausencias justificadas: ${juan.jus.toFixed(2)}</h3>
                                    <h3>Ausencias injustificadas: ${juan.injus.toFixed(2)}</h3>`
            selectJuan.style = `border: purple; border-style: solid; border-width: 0.3rem`
        };
    selectJuan.addEventListener("dblclick",clickJuanOf)
        function clickJuanOf(){   
            nombre.innerHTML = `<h2>Seleccioná un empleado</h2>`
            seleccionado.innerHTML= `
                                    <h3>Llegadas tarde: </h3>
                                    <h3>Ausencias justificadas: </h3>
                                    <h3>Ausencias injustificadas: </h3>`
            selectJuan.style = ``        
        };

//-------------------------------------------------- MARCELO

selectMarcelo = document.getElementById("marcelo")
    selectMarcelo.addEventListener("click",clickMarcelo)
        function clickMarcelo(){
            nombre.innerHTML = `<h2>Seleccionaste a ${empleados[3].nombre} ${empleados[3].apellido}</h2>`
            seleccionado.innerHTML= `
                                    <h3>Llegadas tarde: ${marcelo.tarde.toFixed(2)}</h3>
                                    <h3>Ausencias justificadas: ${marcelo.jus.toFixed(2)}</h3>
                                    <h3>Ausencias injustificadas: ${marcelo.injus.toFixed(2)}</h3>`
            selectMarcelo.style = `border: purple; border-style: solid; border-width: 0.3rem`
        };
    selectMarcelo.addEventListener("dblclick",clickMarceloOf)
        function clickMarceloOf(){   
            nombre.innerHTML = `<h2>Seleccioná un empleado</h2>`
            seleccionado.innerHTML= `
                                    <h3>Llegadas tarde: </h3>
                                    <h3>Ausencias justificadas: </h3>
                                    <h3>Ausencias injustificadas: </h3>`
            selectMarcelo.style = ``        
        };

//-------------------------------------------------- ROMINA

selectRomina = document.getElementById("romina")
    selectRomina.addEventListener("click",clickRomina)
        function clickRomina(){
            nombre.innerHTML = `<h2>Seleccionaste a ${empleados[4].nombre} ${empleados[4].apellido}</h2>`
            seleccionado.innerHTML= `
                                    <h3>Llegadas tarde: ${romina.tarde.toFixed(2)}</h3>
                                    <h3>Ausencias justificadas: ${romina.jus.toFixed(2)}</h3>
                                    <h3>Ausencias injustificadas: ${romina.injus.toFixed(2)}</h3>`
            selectRomina.style = `border: purple; border-style: solid; border-width: 0.3rem`
        };
    selectRomina.addEventListener("dblclick",clickRominaOf)
        function clickRominaOf(){   
            nombre.innerHTML = `<h2>Seleccioná un empleado</h2>`
            seleccionado.innerHTML= `
                                    <h3>Llegadas tarde: </h3>
                                    <h3>Ausencias justificadas: </h3>
                                    <h3>Ausencias injustificadas: </h3>`
            selectRomina.style = ``        
        };

//-------------------------------------------------- FLORENCIA

selectFlorencia = document.getElementById("florencia")
    selectFlorencia.addEventListener("click",clickFlorencia)
        function clickFlorencia(){
            nombre.innerHTML = `<h2>Seleccionaste a ${empleados[5].nombre} ${empleados[5].apellido}</h2>`
            seleccionado.innerHTML= `
                                <h3>Llegadas tarde: ${florencia.tarde.toFixed(2)}</h3>
                                <h3>Ausencias justificadas: ${florencia.jus.toFixed(2)}</h3>
                                <h3>Ausencias injustificadas: ${florencia.injus.toFixed(2)}</h3>`
            selectFlorencia.style = `border: purple; border-style: solid; border-width: 0.3rem`
        };
    selectFlorencia.addEventListener("dblclick",clickFlorenciaOf)
        function clickFlorenciaOf(){   
            nombre.innerHTML = `<h2>Seleccioná un empleado</h2>`
            seleccionado.innerHTML= `
                                    <h3>Llegadas tarde: </h3>
                                    <h3>Ausencias justificadas: </h3>
                                    <h3>Ausencias injustificadas: </h3>`
            selectFlorencia.style = ``        
        };

//-------------------------------------------------- JOAQUIN

selectJoaquin = document.getElementById("joaquin")
    selectJoaquin.addEventListener("click",clickJoaquin)
        function clickJoaquin(){
            nombre.innerHTML = `<h2>Seleccionaste a ${empleados[6].nombre} ${empleados[6].apellido}</h2>`
            seleccionado.innerHTML= `
                                    <h3>Llegadas tarde: ${joaquin.tarde.toFixed(2)}</h3>
                                    <h3>Ausencias justificadas: ${joaquin.jus.toFixed(2)}</h3>
                                    <h3>Ausencias injustificadas: ${joaquin.injus.toFixed(2)}</h3>`
            selectJoaquin.style = `border: purple; border-style: solid; border-width: 0.3rem`
        };
    selectJoaquin.addEventListener("dblclick",clickJoaquinOf)
        function clickJoaquinOf(){   
            nombre.innerHTML = `<h2>Seleccioná un empleado</h2>`
            seleccionado.innerHTML= `
                                    <h3>Llegadas tarde: </h3>
                                    <h3>Ausencias justificadas: </h3>
                                    <h3>Ausencias injustificadas: </h3>`
            selectJoaquin.style = ``        
        };

//-------------------------------------------------- NUEVO EMPLEADO

 selectNuevoEmpleado = document.getElementById("nuevoEmpleado")
    selectNuevoEmpleado.addEventListener("click",clickNuevoEmpleado)
        function clickNuevoEmpleado(){
            formNuevoEmpleado.innerHTML = `
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
                        let newEmpleado = document.getElementById("inputNombre").value + " " + document.getElementById("inputApellido").value;
                        
                        newEmpleado = new Empleado(inputNombre,inputApellido,inputEdad,inputGenero,0,0,0);
                        console.log(newEmpleado);
                        empleados.push(newEmpleado);

                        planilla.innerHTML += `
                                            <div class="card" id="newEmpleado">
                                              <img src="img/img_avatar.png" alt="Avatar">
                                              <div class="container"></div>
                                            </div>
                        `

                        let docnewEmpleado = document.querySelector("#newEmpleado .container");

                        docnewEmpleado.innerHTML = `
                            <h3><b>${newEmpleado.nombre} ${newEmpleado.apellido}</b></h3>
                            <p>${newEmpleado.edad} Años</p> 
                        `
                    

                         
                    };                      
        };
                        