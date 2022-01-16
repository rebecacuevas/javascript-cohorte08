// Creamos una cadena 
let chain = 'Hola';
console.log(chain);

// Creamos un objeto cadena
let chain2 = new String('Bye');
console.log(chain2);

// Crear array vacío
let arrayOne = new Array();
console.log(arrayOne);

console.log(chain.toLowerCase().includes('a'));

// cohersión - JS convierte en automático un tipo de dato en otro

/* Funcion que recibe una palabra  y la regresa invertida*/
// let palabra = "Hola Mundo";
// let arreglo = palabra.split("");


// console.log(arreglo);


// console.log(arreglo.reverse());

function invertirPalabra(cadena) {
    let arreglo = cadena.split("");
    arreglo.reverse();
    let cadenaInvertida = arreglo.join("");
    return console.log(cadenaInvertida);
}

invertirPalabra("Generation"); 
