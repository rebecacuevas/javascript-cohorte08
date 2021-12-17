// JS-15 - Loops - while, do while, for 
// 13/12/21

//ciclos, bucles o loops

/*
while 

let condición = 1;    --> valor inicial, en el que queremos que comience nuestro ciclo
while(condición) {
    bloque de código
    modificación al valor inicial --> muy importante, sin ella el bucle sería infinito, error de cilcado
}

Mientras la condición sea verdadera, el ciclo seguirá ejecutándose

*/

//let condición = 1;

//while(condición <= 10) { 
  //  console.log(condición);
    //condición = condición + 1;
    //condición++;
//}

//variable++  --> incrementar una unidad al valor de la variable --> variable + 1
//variable--  --> disminuir una unidad al valor de la variable --> variable - 1

//do while

let numero = 1;

do {
    console.log(numero);
    numero++;
} while(numero <= 10);

// while comprueba y luego ejecuta
// do-while ejecuta y luego comprueba 


//for 
//utiliza un contador 
//
//
for(let control = 1; control <= 10; control++) {
    console.log("HEEE MAAAAN");
}


const foodie = ["Tamalitos", "Taquitos dorados", "Sopecitos"];
for(let i = 0; i < foodie.length; i++) {
    console.log(foodie[i]);
}