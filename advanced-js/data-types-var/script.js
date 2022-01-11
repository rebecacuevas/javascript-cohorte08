let nombre = "Carlos";
let edad = 32;
let empleado = true;
let varNull = null;
let varUndefined;

console.log(typeof(nombre)); //string
console.log(typeof(edad)); // number
console.log(typeof(empleado)); // boolean
console.log(typeof(varNull)); // null
console.log(typeof(varUndefined)); // undefined

console.log(varNull === varUndefined);
console.log('1' === 1);
console.log(0 === false);

console.log(typeof(10 + 10)); // number
console.log(typeof('10'+ true)); // string
// siempre que se concatene con strings, el valor será un strin

//convertir a numero
console.log(parseInt('12'));

//convertir a string
let num = 10;
console.log(num.toString());