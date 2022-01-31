const add = (num1, num2) => {
    return num1 + num2;
}

const substract = (num1, num2) => {
    return num1 - num2;
}

const multiply = (num1, num2) => {
    return num1 * num2;
}

const divide = (num1, num2) => {
    return num1 /num2;
}

const showOutcome = (operation, num1, num2, result) => {
    const outcome = document.createElement('h3');
    outcome.textContent = `La ${operation} del ${num1} y el ${num2} es ${result}`;
    document.body.appendChild(outcome);
}

export {
    add, 
    substract, 
    multiply, 
    divide, 
    showOutcome
}