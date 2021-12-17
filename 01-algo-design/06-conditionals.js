// JS-09 - conditional statements 
// 09/12/21 

/*
Condicionales
Se utilizan para tomar decisiones dentro de nuestro programa

Si la condición se cumple, el código se ejecutará
si es falso, el bloque de código se ignora 

if(condición) { 
    código
    código
    código
}
parseInt(prompt("Type number 1")) 
*/

//Pedir edad al usuario con pop-up
let edad = parseInt(prompt("Ingresa tu edad"));

//condicional para detectar tu grupo de edad
//si el && da falso, se salta al otro bloque
if(edad >= 18 && edad < 30) {
    document.write("Eres joven");
} else if(edad >= 30 && edad < 60) {
    document.write("Eres adulto");
} else if (edad >= 60) {
    document.write("Eres adulto mayor");
} else {
    document.write("Eres un niño");
}

//else se ejecuta si ninguna de las condiciones se cumplió




