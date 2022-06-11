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

//-------------------------------------------------- NUEVO EMPLEADO con Toastify

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
                            // console.log(nuevoGetEmpleado);

                                if (inputGenero == 'Masculino') {
                                    planilla.innerHTML += `
                                    <li><a href="#">
                                        <div class="card" id=${nuevoGetEmpleado.nombre}>
                                            <img src="img/img_avatar.png" alt="Avatar">
                                            <div class="container"><h3><b>${nuevoGetEmpleado.nombre} ${nuevoGetEmpleado.apellido}</b></h3><p>${nuevoGetEmpleado.edad} Años</p> </div>
                                        </div>
                                    </a>`

                                    Toastify({
                                        text: "Nuevo empleado creado",
                                        duration: 5000,
                                        close: true,
                                        gravity: "top", // `top` or `bottom`
                                        position: "right", // `left`, `center` or `right`
                                        stopOnFocus: true, // Prevents dismissing of toast on hover
                                        style: {
                                            background: "linear-gradient(to right, #4c8daf, #275d71)",
                                        },
                                        onClick: function(){} // Callback after click
                                    }).showToast();

                                }else{

                                    planilla.innerHTML += `
                                    <li><a href="#">
                                        <div class="card" id=${nuevoGetEmpleado.nombre}>
                                            <img src="img/img_avatar2.png" alt="Avatar">
                                            <div class="container"><h3><b>${nuevoGetEmpleado.nombre} ${nuevoGetEmpleado.apellido}</b></h3><p>${nuevoGetEmpleado.edad} Años</p> </div>
                                        </div>
                                    </a>`

                                    Toastify({
                                        text: "Nueva empleada creada",
                                        duration: 5000,
                                        close: true,
                                        gravity: "top", // `top` or `bottom`
                                        position: "right", // `left`, `center` or `right`
                                        stopOnFocus: true, // Prevents dismissing of toast on hover
                                        style: {
                                            background: "linear-gradient(to right, #8dc251, #587d38)",
                                        },
                                        onClick: function(){} // Callback after click
                                    }).showToast();
                                };

                                document.getElementById("inputNombre").value = "";
                                document.getElementById("inputApellido").value = "";
                                document.getElementById("inputEdad").value = "";

                        }else{
                            alert("Error - Faltan datos o menor de edad.")};
                    };                          
        };

// ------ NUEVO ARRAY

let nuevoArray = [];

for( i=0;i<localStorage.length; i++) {
    buscarEmpleado = JSON.parse(localStorage.getItem(localStorage.key(i)));
    nuevoArray.push(buscarEmpleado);
}

//------ ARRAY FINAL

let arrayFinal = empleados.concat(nuevoArray);

for( i=0;i<arrayFinal.length; i++) {

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
};

//-------------------------------------------------- RAMIRO

document.getElementById(arrayFinal[0].nombre+arrayFinal[0].apellido).addEventListener("click", function(event){   
    event.preventDefault();        
    nombre.innerHTML = `<h2>${arrayFinal[0].nombre} ${arrayFinal[0].apellido}</h2>`
            seleccionado.innerHTML= `
                                    <h3>Llegadas tarde: ${arrayFinal[0].tarde.toFixed(2)}</h3>
                                    <h3>Ausencias justificadas: ${arrayFinal[0].jus.toFixed(2)}</h3>
                                    <h3>Ausencias injustificadas: ${arrayFinal[0].injus.toFixed(2)}</h3>`
            document.getElementById(arrayFinal[0].nombre+arrayFinal[0].apellido).classList.toggle('borde');
            
        });

// //-------------------------------------------------- LAURA

document.getElementById(arrayFinal[1].nombre+arrayFinal[1].apellido).addEventListener("click", function(event){   
    event.preventDefault();
    nombre.innerHTML = `<h2>${arrayFinal[1].nombre} ${arrayFinal[1].apellido}</h2>`
    seleccionado.innerHTML= `
                            <h3>Llegadas tarde: ${arrayFinal[1].tarde.toFixed(2)}</h3>
                            <h3>Ausencias justificadas: ${arrayFinal[1].jus.toFixed(2)}</h3>
                            <h3>Ausencias injustificadas: ${arrayFinal[1].injus.toFixed(2)}</h3>`
    document.getElementById(arrayFinal[1].nombre+arrayFinal[1].apellido).classList.toggle('borde');
    
});

// //-------------------------------------------------- JUAN

document.getElementById(arrayFinal[2].nombre+arrayFinal[2].apellido).addEventListener("click", function(event){   
    event.preventDefault();
    nombre.innerHTML = `<h2>${arrayFinal[2].nombre} ${arrayFinal[2].apellido}</h2>`
    seleccionado.innerHTML= `
                            <h3>Llegadas tarde: ${arrayFinal[2].tarde.toFixed(2)}</h3>
                            <h3>Ausencias justificadas: ${arrayFinal[2].jus.toFixed(2)}</h3>
                            <h3>Ausencias injustificadas: ${arrayFinal[2].injus.toFixed(2)}</h3>`
    document.getElementById(arrayFinal[2].nombre+arrayFinal[2].apellido).classList.toggle('borde');
    
});

// //-------------------------------------------------- MARCELO

document.getElementById(arrayFinal[3].nombre+arrayFinal[3].apellido).addEventListener("click", function(event){   
    event.preventDefault();
    nombre.innerHTML = `<h2>${arrayFinal[3].nombre} ${arrayFinal[3].apellido}</h2>`
    seleccionado.innerHTML= `
                            <h3>Llegadas tarde: ${arrayFinal[3].tarde.toFixed(2)}</h3>
                            <h3>Ausencias justificadas: ${arrayFinal[3].jus.toFixed(2)}</h3>
                            <h3>Ausencias injustificadas: ${arrayFinal[3].injus.toFixed(2)}</h3>`
    document.getElementById(arrayFinal[3].nombre+arrayFinal[3].apellido).classList.toggle('borde');
    
});

// //-------------------------------------------------- ROMINA

document.getElementById(arrayFinal[4].nombre+arrayFinal[4].apellido).addEventListener("click", function(event){   
    event.preventDefault();
    nombre.innerHTML = `<h2>${arrayFinal[4].nombre} ${arrayFinal[4].apellido}</h2>`
    seleccionado.innerHTML= `
                            <h3>Llegadas tarde: ${arrayFinal[4].tarde.toFixed(2)}</h3>
                            <h3>Ausencias justificadas: ${arrayFinal[4].jus.toFixed(2)}</h3>
                            <h3>Ausencias injustificadas: ${arrayFinal[4].injus.toFixed(2)}</h3>`
    document.getElementById(arrayFinal[4].nombre+arrayFinal[4].apellido).classList.toggle('borde');
    
});

// //-------------------------------------------------- FLORENCIA

document.getElementById(arrayFinal[5].nombre+arrayFinal[5].apellido).addEventListener("click", function(event){   
    event.preventDefault();        
    nombre.innerHTML = `<h2>${arrayFinal[5].nombre} ${arrayFinal[5].apellido}</h2>`
        seleccionado.innerHTML= `
                                <h3>Llegadas tarde: ${arrayFinal[5].tarde.toFixed(2)}</h3>
                                <h3>Ausencias justificadas: ${arrayFinal[5].jus.toFixed(2)}</h3>
                                <h3>Ausencias injustificadas: ${arrayFinal[5].injus.toFixed(2)}</h3>`
        document.getElementById(arrayFinal[5].nombre+arrayFinal[5].apellido).classList.toggle('borde');
        
    });

// //-------------------------------------------------- JOAQUIN

document.getElementById(arrayFinal[6].nombre+arrayFinal[6].apellido).addEventListener("click", function(event){   
    event.preventDefault();
    nombre.innerHTML = `<h2>${arrayFinal[6].nombre} ${arrayFinal[6].apellido}</h2>`
    seleccionado.innerHTML= `
                            <h3>Llegadas tarde: ${arrayFinal[6].tarde.toFixed(2)}</h3>
                            <h3>Ausencias justificadas: ${arrayFinal[6].jus.toFixed(2)}</h3>
                            <h3>Ausencias injustificadas: ${arrayFinal[6].injus.toFixed(2)}</h3>`
    document.getElementById(arrayFinal[6].nombre+arrayFinal[6].apellido).classList.toggle('borde');
    
});

//-------------------------------------------------- SELECCIÓN NUEVOS EMPLEADOS

for( x=7; x<arrayFinal.length; x++) {
    document.getElementById(arrayFinal[x].nombre+arrayFinal[x].apellido).addEventListener("click", function(event){  
        event.preventDefault(); 
        alert("Hola si pinchaste acá");
        // // nombre.innerHTML = `<h2>${arrayFinal[x].nombre} ${arrayFinal[x].apellido}</h2>`
        // seleccionado.innerHTML= `
        //                         <h3>Llegadas tarde: ${arrayFinal[x].tarde.toFixed(2)}</h3>
        //                         <h3>Ausencias justificadas: ${arrayFinal[x].jus.toFixed(2)}</h3>
        //                         <h3>Ausencias injustificadas: ${arrayFinal[x].injus.toFixed(2)}</h3>`
        for( x=7; x<arrayFinal.length; x++) {
        document.getElementById(arrayFinal[x].nombre+arrayFinal[x].apellido).classList.toggle('borde');
        };
        
    });
}

    //-------------------------------------------------- FUNCIONES
    
let promTardeFinal = 0;
    function promTarde(){
        for (i=0; i<arrayFinal.length; i++){
            promedio.tarde = (arrayFinal[i].tarde) + promedio.tarde;
            };
        console.log (promedio.tarde);
        promTardeFinal = promedio.tarde/i
            console.log (promTardeFinal);
    };
promTarde();

let promJusFinal = 0;
    function promJus(){
        for (i=0; i<arrayFinal.length; i++){
            promedio.jus = (arrayFinal[i].jus) + promedio.jus;
            };
        console.log (promedio.jus);
        promJusFinal = promedio.jus/i
            console.log (promJusFinal);
    };
promJus();

let promInjusFinal = 0;
    function promInjus(){
        for (i=0; i<arrayFinal.length; i++){
            promedio.injus = (arrayFinal[i].injus) + promedio.injus;
            };
        console.log (promedio.injus);
        promInjusFinal = promedio.injus/i
            console.log (promInjusFinal);
    };
promInjus();

//---------------- PROMEDIO

docPromedio.innerHTML = `
    <h2>Promedio mensual<br>todos los empleados</h2>
    <h3>Llegadas tarde: ${promTardeFinal.toFixed(2)}</h3>
    <h3>Ausencias justificadas: ${promJusFinal.toFixed(2)}</h3>
    <h3>Ausencias injustificadas: ${promInjusFinal.toFixed(2)}</h3>`


// let [a,b,c,d,e,f,g,h] = arrayFinal;

// console.log(...arrayFinal)

// spread = {
//     ...arrayFinal
// }

// Hola diego como estas, bueno te comento lo que esta pasando y tenes que corregir, a ver si te puedo tirar un centro

// 1-Tenemos que corregir que cuando apretes la card no se te vaya para arriba porque no es una buena experiencia de usuario, para eso te recomiendo que en la linea 324 y en la de cada card que seleccionas le pases el parametro dentro de la funcion evento y en la linea 339 declares event.preventDefault(); (esto) aca te paso documentacion cualquier cosa 

// https://developer.mozilla.org/es/docs/Web/API/Event/preventDefault

// 2-Cuando agrego a una persona, no te marca la ausencia, llegadas tardes ni nada porque ese dato no lo estas pidiendo, si fuera vos lo trataria de agregar pero no es necesario (sino para hacerlo mas completo)

// 3-Para poder arreglar tu problema, tenes que usar lo primero en la linea correspondiente (eso te lo dejo a vos) pero es un prevent Default, si no te llega a salir me avisas y lo vemos juntos