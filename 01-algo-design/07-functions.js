// JS-10 - functions 
// 09/12/21

/*
Para reutilizar bloques de código
Detectar patrones y solucionarlos de una manera eficiente 

Estructura 

function nombreVariable () {

}


*/

//se crea la función
function sumar (n01, n02) {
    let suma = n01 + n02;
    //<h1> para imprimir resultado en la pantalla
    document.write('<h1>' + suma + '</h1>');
}

//se manda llamar a la función
sumar(12, 12);
sumar(32, 15);
sumar(52, 56);

/*

Podemos hacer una función con valores fijos

function sumar () {
    let n01 = 10;
    let n02 = 5;
    let suma = n01 + n02;
    document.write('<h1>' + suma + '</h1>');
}

sumar();



let n01 = 10;
let n02 = 5;
let suma = n01 + n02;
document.write('<h1>' + suma + '</h1>');

let n03 = 32;
let n04 = 62;
let suma02 = n03 + n04;
document.write('<h>' + 1suma02 '</h1>');

*/