const add = (a , b) => {
    const sum = a + b;
    return sum;
}


const subtract = (a , b) => {
    const difference = a - b;
    return difference;
}


const multiply = (a , b) => {
    const product = a * b;
    return product;
}


const divide = (a , b) => {
    const quotient = a / b;
    return quotient;
}


const firstNumber = '';
const operator = '';
const secondNumber = '';

const operate = (operator,firstNumber, lastNumber) => {
   
    if (operator == 'add') {
       const value = add(firstNumber , lastNumber);
       return value;
    } 
     else if (operator == 'subtract') {
        const value = subtract(firstNumber , lastNumber);
        return value;
     }
     else if (operator == 'multiply') {
        const value = multiply(firstNumber , lastNumber);
        return value;
     }
     else if (operator == 'divide') {
        const value = divide(firstNumber , lastNumber);
        return value;
     }

     
}
console.log(operate('multiply', 4 , 2));

