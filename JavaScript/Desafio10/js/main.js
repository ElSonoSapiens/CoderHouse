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

//-------------------------------------------------- ARRAY EMPLEADOS

const empleados = [
  {
    id: 1,
    nombre: "Ramiro",
    apellido: "Perez",
    edad: 27,
    genero: "Masculino",
    tarde: 2,
    jus: 1,
    injus: 0,
  },
  {
    id: 2,
    nombre: "Laura",
    apellido: "Antona",
    edad: 31,
    genero: "Femenino",
    tarde: 0,
    jus: 0,
    injus: 0,
  },
  {
    id: 3,
    nombre: "Juan",
    apellido: "Valente",
    edad: 23,
    genero: "Masculino",
    tarde: 2,
    jus: 1,
    injus: 0,
  },
  {
    id: 4,
    nombre: "Marcelo",
    apellido: "Cotti",
    edad: 25,
    genero: "Masculino",
    tarde: 1,
    jus: 2,
    injus: 1,
  },
  {
    id: 5,
    nombre: "Romina",
    apellido: "Conti",
    edad: 21,
    genero: "Femenino",
    tarde: 3,
    jus: 0,
    injus: 1,
  },
  {
    id: 6,
    nombre: "Florencia",
    apellido: "Perez",
    edad: 24,
    genero: "Femenino",
    tarde: 2,
    jus: 1,
    injus: 0,
  },
  {
    id: 7,
    nombre: "Joaquin",
    apellido: "Lugli",
    edad: 23,
    genero: "Masculino",
    tarde: 1,
    jus: 0,
    injus: 0,
  },
];

//-------------------------------------------------- EMPLEADOS ALOJADOS EN LOCALSTORAGE

Object.keys(localStorage).forEach(function (key) {
  const nuevoEmpleado = {
    id: empleados.length + 1,
    ...JSON.parse(localStorage.getItem(key)),
  };
  empleados.push(nuevoEmpleado);
});

//-------------------------------------------------- BUSCADOR

function buscador() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("searchInput");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName("li");

  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    txtValue.toUpperCase().indexOf(filter) > -1
      ? (li[i].style.display = "")
      : (li[i].style.display = "none");
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

selectNuevoEmpleado = document.getElementById("nuevoEmpleado");
selectNuevoEmpleado.addEventListener("click", clickNuevoEmpleado);
function clickNuevoEmpleado() {
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
            `;
  guardarNuevoEmpleado = document.getElementById("submitEmpleado");
  guardarNuevoEmpleado.addEventListener("click", clickGuardarNuevoEmpleado);
  function clickGuardarNuevoEmpleado() {
    inputNombre = document.getElementById("inputNombre").value;
    inputApellido = document.getElementById("inputApellido").value;
    inputEdad = parseInt(document.getElementById("inputEdad").value);
    inputGenero = document.getElementById("inputGenero").value;
    tarde = 0;
    jus = 0;
    injus = 0;

    if (inputNombre != "" && inputApellido != "" && inputEdad >= 18) {
      newEmpleado = new Empleado(
        inputNombre,
        inputApellido,
        inputEdad,
        inputGenero,
        tarde,
        jus,
        injus
      );
      empleados.push({ id: empleados.length + 1, ...newEmpleado });

      localStorage.setItem(
        inputNombre + inputApellido,
        JSON.stringify(empleados[empleados.length - 1])
      );

      nuevoGetEmpleado = JSON.parse(
        localStorage.getItem(inputNombre + inputApellido)
      );

      Toastify({
        text:
          inputGenero == "Masculino"
            ? "Nuevo empleado creado"
            : "Nueva empleada creada",
        duration: 5000,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background:
            inputGenero == "Masculino"
              ? "linear-gradient(to right, #4c8daf, #275d71)"
              : "linear-gradient(to right, #8dc251, #587d38)",
        },
        onClick: function () {}, // Callback after click
      }).showToast();
      clearBox();
      watcherPush();
      promTarde();
      promJus();
      promInjus();
      watcherProm();
      watcherClick();
      document.getElementById("inputNombre").value = "";
      document.getElementById("inputApellido").value = "";
      document.getElementById("inputEdad").value = "";
    } else {
      alert("Error - Faltan datos o menor de edad.");
    }
  }
}
function clearBox() {
  planilla.innerHTML = "";
}
function watcherPush() {
  empleados.forEach((empleado) => {
    empleado.genero == "Masculino"
      ? (planilla.innerHTML += `
                                <li><a href="#">
                                    <div class="card" id=${empleado.id}>
                                        <img src="img/img_avatar.png" alt="Avatar">
                                        <div class="container"><h3><b>${empleado.nombre} ${empleado.apellido}</b></h3><p>${empleado.edad} Años</p> </div>
                                    </div>
                                </a>`)
      : (planilla.innerHTML += `
                                <li><a href="#">
                                    <div class="card" id=${empleado.id}>
                                        <img src="img/img_avatar2.png" alt="Avatar">
                                        <div class="container"><h3><b>${empleado.nombre} ${empleado.apellido}</b></h3><p>${empleado.edad} Años</p> </div>
                                    </div>
                                </a>`);
  });
}
watcherPush();

//-------------------------------------------------- SELECCIÓN NUEVOS EMPLEADOS

const watcherClick = () => {
  empleados.forEach((empleado) => {
    document
      .getElementById(empleado.id)
      .addEventListener("click", function (event) {
        event.preventDefault();
        nombre.innerHTML = `<h2>${empleado.nombre} ${empleado.apellido}</h2>`;
        seleccionado.innerHTML = `
																<h3>Llegadas tarde: ${empleado.tarde.toFixed(2)}</h3>
																<h3>Ausencias justificadas: ${empleado.jus.toFixed(2)}</h3>
																<h3>Ausencias injustificadas: ${empleado.injus.toFixed(2)}</h3>`;
        document.getElementById(empleado.id).classList.toggle("borde");
      });
  });
};
watcherClick();

//-------------------------------------------------- PROMEDIO

const promedio = {
  nombre: "Promedio",
  tarde: 0,
  jus: 0,
  injus: 0,
};

let docPromedio = document.querySelector("#promedios");

//-------------------------------------------------- FUNCIONES PROMEDIO

function promTarde() {
  let count = 0;
  empleados.forEach((empleado) => {
    count = empleado.tarde + count;
  });
  promedio.tarde = count / empleados.length;
}
promTarde();

function promJus() {
  let count = 0;
  empleados.forEach((empleado) => {
    count = empleado.jus + count;
  });
  promedio.jus = count / empleados.length;
}
promJus();

function promInjus() {
  let count = 0;
  empleados.forEach((empleado) => {
    count = empleado.injus + count;
  });
  promedio.injus = count / empleados.length;
}
promInjus();

//---------------- WATCH PROMEDIO

function watcherProm() {
  docPromedio.innerHTML = `
    <h2>Promedio mensual<br>todos los empleados</h2>
    <h3>Llegadas tarde: ${promedio.tarde.toFixed(2)}</h3>
		<h3>Ausencias justificadas: ${promedio.jus.toFixed(2)}</h3>
		<h3>Ausencias injustificadas: ${promedio.injus.toFixed(2)}</h3>`;
}
watcherProm();
