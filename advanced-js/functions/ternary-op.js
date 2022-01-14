/* Operador ternarios 
(condición) ? se ejecuta si es verdadero : se ejecuta si es falso;

adecuado para cuando solo tenemos una decisión
*/

let edad = 32;


// Método 1

// (edad >= 18) ? document.write("Eres mayor de edad") : document.write("Eres menor de edad");


// Método 2

// let question = (edad >= 18) 
//     ? "Eres mayor de edad"
//     : "Eres menor de edad";


// Método 3 
// let askQuestion = `Tengo ${edad} años y soy ${(edad >= 18) ? document.write("Eres mayor de edad") : document.write("Eres menor de edad")}`;

// document.write(question);

let day = 5;

// if(day === 0) {
//     document.write("Hoy es domingo");
// } else if(day === 1) {
//     document.write("Hoy es lunes");
// } else if(day === 2) {
//     document.write("Hoy es martes");
// } else if(day === 3) {
//     document.write("Hoy es miércoles");
// } else if(day === 4) {
//     document.write("Hoy es jueves");
// } else if(day === 5) {
//     document.write("Hoy es viernes");
// } else{
//     document.write("Eso no es un día");
// }

// Switch - case 
/*
switch (variable a evaluar){
    case valor:
        -código a ejecutar-
    break;
    case valor:
        -código a ejecutar-
    break;
    default:
        -código a ejecutar si sale de las opciones-
    break;
}
*/

switch(day) {
    case 0:
        document.write("Hoy es domingo");
    break;
    case 1:
        document.write("Hoy es lunes");
    break;
    case 2:
        document.write("Hoy es martes");
    break;
    case 3:
        document.write("Hoy es miércoles");
    break;
    case 4:
        document.write("Hoy es jueves");
    break;
    case 5:
        document.write("Hoy es viernes");
    break;
    case 6:
        document.write("Hoy es sábado");
    break;
    default:
        document.write("Esto no es un día");
    break;      
}

let coupon = "Golden";
let discount;

switch(coupon) {
    case "Bronze":
        discount = 5;
    break;
    case "Silver":
        discount = 10;
    break;
    case "Golden":
        discount = 15;
    break;
    default:
        document.write("Tu cupón no es válido");
    break;
}

document.write(discount);