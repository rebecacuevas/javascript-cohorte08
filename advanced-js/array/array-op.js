const numbers = [5, 100, 420, 123, 134, 434, 2323];

// Método 1
numbers.forEach(function (number, indice, arreglo) {
    document.write(number + '-' + indice + '<br>' + '-' + arreglo + '<br>');
});

// Método 2 
numbers.forEach((element) => {
    document.write(element + ', ');
});


// map() - crear un arreglo a partir de otro arreglo 
let num = numbers.map(function(element) {
    return element;
});

document.write('<br>' + "Hola array " + num);

let fruits = ['banana', 'apple', 'watermelon', 'kiwi', 'orange', 'mango', 'pineapple', 'avocado', 'grape', 'passion fruit', 'grapefruit', 'berries'];
document.write('<br>' + fruits + '<br>');

// no se crea un nuevo arreglo, las modificaciones afectarán a ambos arreglos
// apunta a la misma dirección de memoria, si algo se cambia, ambos se cambiarán
let fruits2 = fruits;
document.write('<br>' + fruits2 + '<br>');


// agregar un elemento al array

// fruits2.push('pera'); 
fruits.push('pear');


// así se duplica un arreglo pero este ya es independiente del original 
let fruits3 = fruits.map(function(elemento) {
    return elemento;
    // para arreglos con int se puede usar un - return elemento * 2 - para multiplicar cada elemento y guardar esos valores en el nuevo array 
    // para descuentos - return elemento * 0.9 - 
})

document.write(fruits3);


// includes () - confirma si un elemento está o no en el array
document.write('<br>' + numbers.includes('hola') + '<br>');


// filter () - filtra los elementos y los almacena en un nuevo array
let evenNum = numbers.filter((elemento) => {
    if (elemento % 2 == 0) {
        return true;
    } else {
        return false;
    }
}); 

document.write('<br>' + evenNum + '<br>');

// sort() - ordena de manera ascendente tomando la primera cifra de cada elemento
document.write('<br>' + evenNum.sort() + '<br>');

// reverse() - invierte el orden de los elementos de un arreglo
document.write('<br>' + evenNum.reverse() + '<br>');


// Ejemplo de includes() con películas
let movies = ['El Silencio de los Inocentes', 'Harry Potter', 'Cars', 'Shrek', 'Hannibal', 'James Bond'];

let moviesFilter = movies.filter((movie) => {
    if(movie.includes('i') == true) {
        return true;
    }
});

document.write('<br>' + moviesFilter + '<br>');

// La siguiente línea de código se puede utilizar en lugar del if 
// return movie.includes('b');

// find() - encuentra el primer elemento que contenga el parámetro deseado 
let movieFound = movies.find((elemento) => {
    return elemento.includes('ann');
});

document.write('<br>' + movieFound + '<br>');


// Ejemplo con sort() - no usarlo porque realmente no ordena y porque muta al array original 
const profit = [6500, 3500, 10300, 2000, 10230, 23940];
document.write(profit.sort());  

