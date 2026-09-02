let usuarios = ["Anthony", "Cesar", "Revolorio"]
let contras = ["6767", "1234", "4321"]
let i = 0

function validarRegistro() {
let usuIngresar = document.getElementById("Usuario").value
let contraIngresar = document.getElementById("Contraseña").value

for (i = 0; i < usuarios.length; i++) {
    if (usuarios[i] == usuIngresar) {
        alert("Este usuario ya ha sido ingresado")
        return
    }
}

usuarios.push(usuIngresar)
contras.push(contraIngresar)
alert("Has ingresado correctamente")

}
function iniciarSesion() {
    var usuIngresado = document.getElementById("Usuario").value;
    var passIngresado = document.getElementById("Contraseña").value;
    var mensaje = document.getElementById("mensaje");

    // variable para saber si si esta en la lista
    var encontrado = false;

    // bucle para ir buscando uno por uno
    for (var i = 0; i < usuarios.length; i++) {
        // me fijo si se llama igual y si la contraseña le atina
        if (usuarios[i] === usuIngresado && contrasenas[i] === passIngresado) {
            encontrado = true; // si es este
            break; // me salgo del bucle
        }
    }

    // si si lo encontro le digo bienvenido y si no pues no
    if (encontrado) {
        mensaje.style.color = "green";
        mensaje.innerHTML = "¡Bienvenido " + usuIngresado + "!";
    } else {
        mensaje.style.color = "red";
        mensaje.innerHTML = "Usuario o contraseña incorrectos";
    }
}