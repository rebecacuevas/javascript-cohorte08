// JS-14 - Last week review 
// 13/12/21

//Array 
const food = ['Quesadillas', 'Tortas', 'Milanesas'];
console.log(food);

/*
push - agrega elemento al final
pop - quitar elmemento del final
shift - quitar elemento al principio
unshift - agregar elemento al principio
*/
food.push('Pastel');
console.log(food);

food.unshift('Tacos');
console.log(food);

// forEach - ayudar a realizar una acción por cada elemento del array
//de manera automática
//solo muestra elementos del arreglo enlistados 
food.forEach(function(el) {
    console.log(el);
})

const numbers = [2, 5, 10, 39, 20, 10];
numbers.forEach(function(el) {
    let add = el + 1;
    console.log(add);
})

//Mentoría Lia
//ejercicio para rellenar un arreglo a partir de una función
const arr = [];

function suma(num){
    let sumNum = num + 1;
    return arr.push(sumNum);
    // return arr.unshift(sumNum); - imprimiría los resultados al revés, como si fuera árabe o hebreo 
}

//mandar llamar a la función 
suma(1);
suma(10);
suma(2);
suma(6);
suma(5);

//imprimir resultado en consola
console.log(arr);

