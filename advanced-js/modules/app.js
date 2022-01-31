import { add, multiply, showOutcome } from './calculator.js';

let addition = add(10, 20);
console.log(addition);

let multOutcome = multiply(2, 10);

showOutcome('multiplicación', 2, 10, multOutcome);
