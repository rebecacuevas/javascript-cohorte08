/* Crear un arreglo con 20 números. Mostrar en HTML la suma de dichos números y el promedio. */

// Salarios de un grupo de 20 personas 
const num = [25000, 14000, 7500, 3200, 8200, 20000, 6500, 4100, 5000, 15000, 12200, 35000, 7300, 4100, 7460, 34500, 23240, 23949, 42442, 54643];

let add = 0;

for(let i = 0; i < num.length; i++) {
    add += num[i];
}

document.write('En conjunto, el grupo genera '+ add + ' al mes' + '<br>');

let mean = add / num.length;

document.write('El salario promedio es ' + mean);