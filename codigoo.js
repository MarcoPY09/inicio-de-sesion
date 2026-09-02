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
    let usuSesion = document.getElementById("Usuario").value;
    let contraSesion = document.getElementById("Contraseña").value;

    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i] === usuSesion && contras[i] === contraSesion) {
            alert("Bienvenido " + usuSesion);
            return;
        }
    }
    alert("Usuario o contraseña incorrectos");
}