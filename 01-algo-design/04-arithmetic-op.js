// JS-07 - Arithmetic operators 
// 09/12/21

/*
Operadores aritmeticos para hacer operaciones

+ para sumar o concatenar, dependiendo del tipo de dato
- restar
* multiplicar dos números
/ dividir dos números
% obtener el residuo de una operación

//suma
//todo lo que entre por prompt JS lo tomará como texto, entonces lo concatena, no lo suma
//solo pasa en el caso de la suma, en otras operaciones JS hace la conversión en forma automática

const number01 = prompt("Type number 1");
const number02 = prompt("Type number 2");
*/

//parseo o conversión de datos
//para convertir datos del prompt a número
//didáctico, no se usa en la industria para pedir datos al cliente

const number01 = parseInt(prompt("Type number 1"));
const number02 = parseInt(prompt("Type number 2"));

const addition = number01 + number02;  

console.log(addition);

//la consola se usa para buscar errores y examinar el proceso en el navegador

//multiplicación
const number03 = prompt("Type number 3");
const number04 = prompt("Type number 4");

const mult = number03 * number04;

console.log(mult);

//restar
const number05 = prompt("type number 5");
const number06 = prompt("Type number 6");

const minus = number05 - number06;

console.log(minus);

//dividir
const number07 = prompt("type number 7");
const number08 = prompt("type number 8");

const division = number07 / number08;

console.log(division);

//residuo
const number09 = prompt("type number 9");
const number10 = prompt("type number 10");

const rem = number09 % number10;

console.log(rem);

//parseInt() para convertir strings a números

/*

operadores logicos

&& AND y
|| OR o
! NOT o 

*/
