/* código síncrono */
let variableSincrona;
variableSincrona = 10 * 3;
console.log(variableSincrona);

/* código asíncrono */
let variableAsincrona;
setTimeout(() => {
    variableAsincrona = 10 * 3; // condición 
    console.log(variableAsincrona);
}, 2000); // tiempo en que la condición se ejecutará[milisegundos]

console.log(variableAsincrona);
