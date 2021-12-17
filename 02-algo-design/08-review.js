// JS-11 - Review
// 10/12/21

/*
condicionales 

Estructura ciclo if-else
if(condicion) {
    bloque
} else if() {
    bloque
} else {
    bloque 
}

funciones 
bloques de código reutilizable, son como una máquina especializada en una tarea

Estructura
function nombre(parametros) {
    return 
}
nombre(argumentos);

*/

//función
//la variable let jugo solo existe dentro de la función
function fruitProcessor(manzanas, naranjas) {
    let jugo = "Jugo fresco de " + manzanas + " manzanas y " + naranjas + " naranjas.";
    //sin return no nos regresaría una respuesta
    return jugo;
}

//invocar a la función 
//la invocación podemos almacenarla dentro de una variable 
let appleJuice = fruitProcessor(4, 0);
console.log(appleJuice);

let laranjaJuice = fruitProcessor(0, 5);
console.log(laranjaJuice); 