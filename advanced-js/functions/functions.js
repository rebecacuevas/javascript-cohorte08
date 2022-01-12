/* Función
    Bloque de código reutilizable
    Puede tener o no parámetros de entrada
    Puede devolver o no un valor
*/

function sumar(num1, num2) {
    // Operaciones o código a ejecutar
    // el return debe ser la última instrucción de la función, lo demás ya no se ejecutará 
    return num1 + num2;
}

let num1 = parseInt(prompt("Escribe el primer valor"));
let num2 = parseInt(prompt("Escribe el segundo valor"));
let suma = sumar(num1, num2);

//template string
//habilitan uso de texto + ejecución de código JS ${} 
//se pueden usar etiquetas de HTML
document.write(`La suma de ${num1} y ${num2} es ${suma} <br>`);
//código equivalente con concatenación
// document.write('La suma de ' + num1 + ' y ' + num2 + ' es ' + suma);
