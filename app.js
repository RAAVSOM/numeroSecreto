let numeroSecreto = 0;
let intentos = 0;
let numeroSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function intentoDeUsuario(){
    let numeroDelUsuario = parseInt(document.getElementById('inputNum').value);
    if(numeroDelUsuario === numeroSecreto){
        asignarTextoElemento('h1',"Felicidades has acertado");
        asignarTextoElemento('p', `acertaste en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`);
        document.querySelector('#reiniciar').removeAttribute('disabled');
    }else{
        if(numeroSecreto > numeroDelUsuario){
            asignarTextoElemento('h1', "Intenta otra vez");
            asignarTextoElemento('p', "el numero secreto es mayor");
        }else{
            asignarTextoElemento('h1', "Intenta otra vez");
            asignarTextoElemento('p', "el numero secreto es menor");
        }
        limpiarCaja();
        intentos ++;
    }  
}

function reiniciarJuego() {
    limpiarCaja();
    inicializar();
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

function limpiarCaja(){
    document.querySelector('#inputNum').value = '';
}

function generarNumero(numMax){
    let numeroGenerado = Math.floor(Math.random() * numMax) + 1;
    if(numeroSorteados.length >= numeroMaximo){
        asignarTextoElemento('h1', "Juego Finalizado");
        asignarTextoElemento('p', "ya se han sorteado todos los numeros, recarga la pagina");
        document.querySelector('#inputNum').setAttribute('disabled', 'true');
    }else{
        if(numeroSorteados.includes(numeroGenerado)){
            return generarNumero(numMax);
        }else{
            numeroSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
        
    }
}

function inicializar() {
    asignarTextoElemento('h1', "Adivina el numero");
    asignarTextoElemento('p', "intenta adivinar el numero aleatorio entre 1 y 10");
    numeroSecreto = generarNumero(numeroMaximo);
    intentos = 1;
}

inicializar();
