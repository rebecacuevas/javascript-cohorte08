/* Arrow functions
Función flecha
*/

// function sumar(num1, num2) {
//     return num1 + num2;
// }

// ambos son equivalentes

const sumar = (num1, num2) => {
    return num1 + num2;
}

// Pedir datos al usuario 
let num1 = parseInt(prompt("Escribe el primer valor"));
let num2 = parseInt(prompt("Escribe el segundo valor"));

// call function 
let suma = sumar(num1, num2);

// escribir output en pantalla 
document.write(`La suma de ${num1} y ${num2} es ${suma} <br>`);
