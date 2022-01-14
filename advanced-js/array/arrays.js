// Declarar arreglos

// Método 1 
const numbers = [5, 100, 420, 123, 134, 434, 2323];

// Método 2
let letters = new Array();
letters = ["a", "b", "c"];

// document.write(numbers, "\n" , letters);

// Acceder a un elemento específico de un arreglo
document.write(numbers[6]);

for(let i = 0; i < numbers.length; i++) { 
    document.write(`${numbers[i]}<br>`);

    /* 
    const number = numbers[i];
    document.write(number + '<br>');
    */
}

