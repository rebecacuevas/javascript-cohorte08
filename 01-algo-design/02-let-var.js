// JS-05 - variables - var vs let 
// 09/12/21

//declarar variables con var - function scoped
var number = 200;
console.log(number);

if(true) {
    var number = 50;
    console.log(number);
}

console.log(number);

//declarar variables con let - block scoped
var phrase = "Bootcamp Java";
console.log(phrase);

if (true) {
    let phrase = "Cohorte 8";
    console.log(phrase);
    //let eagle = "bald";  
}

console.log(phrase);
//esta variable no existe fuera del condicional, no se puede imprimir 
//console.log(eagle);


