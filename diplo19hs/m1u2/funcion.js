let pantalla = document.getElementById('pantalla')
function agregarNumero(numero) {
    pantalla.value += numero
}
function reset(c) {
    pantalla.value = c
}
function borrar() {
    let valorActual = pantalla.value
    pantalla.value = valorActual.slice(0, -1)
}

let primerNumero = null
let operacion = null


function sumar() {
    primerNumero = Number(pantalla.value);
    operacion = "+"
    pantalla.value = ""
}

function restar() {
    primerNumero = Number(pantalla.value);
    operacion = "-"
    pantalla.value = ""
}

function multiplicar() {
    primerNumero = Number(pantalla.value);
    operacion = '*'
    pantalla.value = ''
}

function calcular() {
    const segundoNumero = Number(pantalla.value);
    let resultado;

    switch (operacion) {
        case '+':
            resultado = primerNumero + segundoNumero;
            break;

        case '-':
            resultado = primerNumero - segundoNumero;
            break;

        case '*':
            resultado = primerNumero*segundoNumero;
            break;

        default:
            resultado = 'operacion invalida';
    }
    pantalla.value = resultado; // Mostrar resultado en pantalla

}