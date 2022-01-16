// Hacer funcional para el usuario el siguiente algoritmo

// Funcion que recibe una palabra  y la regresa invertida

    // function invertirPalabra(cadena) {
    //     let arreglo = cadena.split("");
    //     arreglo.reverse();
    //     let cadenaInvertida = arreglo.join("");
    //     return console.log(cadenaInvertida);
    // }

    // invertirPalabra("Generation"); 
    
// Mi versión del algoritmo 

// Creo la función, misma que está unida con el botón del doc HTML gracias a la propiedad onclick()
function reverseWord() {
    // Creo variable para almacenar la palabra que el usuario ingrese, misma que recupero con getElementbyId
    let word = document.getElementById("word").value;
    // console.log(word);

    // Creo variable para almacenar la palabra separada letra a letra
    let pieces = word.split("");
    // console.log(pieces);

    // Creo variable para almacenar las letras en reversa
    let reverse = pieces.reverse()
    // console.log(reverse);

    // Creo variable para almacenar la nueva palabra
    let reverseWord = reverse.join("");

    // Mando imprimir resultado en la página 
    // El id "new" pertenece a un párrafo vacío del doc HTML
    // Con .innerHTML mando el output de la función directo al doc HTML, además concateno una frase que ayude al usuario con la función 
    document.getElementById("new").innerHTML = "Tu palabra al revés es: <br>" + reverseWord; 
}




