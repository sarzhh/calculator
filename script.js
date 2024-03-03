let firstNumber = 0;
let secondNumber = 0;
let operant = '';
let previousNumber = '';
let result = 0;
const prevValue = document.querySelector('.prev-value');
const currentValue = document.querySelector('.current-value');
const deleteNumber = document.querySelector('.delete');
const clear = document.querySelector('.clear');
const numbers = document.querySelectorAll('.btn');
const operators = document.querySelectorAll('.operant');
const equal = document.querySelectorAll('.equal');

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

/*
buttons.addEventListener("click", (event) => {
   if(event.target.matches('span')){
    const displayValue = event.target.textContent;
    display.textContent += displayValue;
    display.style.fontSize = '25px';
   }
});*/

/*
numbers.forEach(number =>{
   number.addEventListener('click', () =>{
      const value = number.textContent;
      prevValue.textContent += value;
   })
});*/
let operatorClicked = false;

numbers.forEach(number =>{
   number.addEventListener('click', () => {
      const value = number.textContent;
      prevValue.textContent += value;
      
      if(!operatorClicked){
         firstNumber = prevValue.textContent;
      }

      else{
         secondNumber = prevValue.textContent;
      }
      
      operators.forEach(operator => {
         operator.disabled = false;
      });
   });
});

operators.forEach(operator => {
   operator.addEventListener('click', ()=>{
      const operatorValue = operator.textContent;
      prevValue.textContent += operatorValue;
      operant = prevValue.textContent;
      
      operatorClicked = true;
      
      operators.forEach(operator => {
         operator.disabled = true;
      });
     
   });
   
});