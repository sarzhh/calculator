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
const equal = document.querySelector('.equal');

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



const operate = (operant,firstNumber, secondNumber) => {
   let value;
   console.log("Operant:", operant);
   console.log("First Number:", firstNumber);
   console.log("Second Number:", secondNumber);
    if (operant == '+') {
       const value = add(firstNumber , secondNumber);
       return value;
    } 
     else if (operant == '-') {
        const value = subtract(firstNumber , secondNumber);
        return value;
     }
     else if (operant == 'x') {
        const value = multiply(firstNumber , secondNumber);
        return value;
     }
     else if (operant == '÷') {
        const value = divide(firstNumber , secondNumber);
        return value;
     }

     
}


let operatorClicked = false;

numbers.forEach(number =>{
   number.addEventListener('click', () => {
      
       previousNumber = number.textContent;
      prevValue.textContent += previousNumber;
      
      if(!operant){
         firstNumber = parseFloat(prevValue.textContent);
         
      }

      else {
        
         secondNumber = parseFloat(previousNumber);
         
      }
      

      operators.forEach(operator => {
         operator.disabled = false;
      });
   });
});

operators.forEach(operator => {
   operator.addEventListener('click', ()=>{
      let operatorValue = "";
      operatorValue = operator.textContent;
      operant = operator.textContent
      prevValue.textContent += operatorValue;
      previousNumber = '';
      
      operatorClicked = true;
      
      operators.forEach(operator => {
         operator.disabled = true;
      });
     
   });
   
});

equal.addEventListener('click',() =>{
   console.log("Equal button clicked");
   const result = operate(operant, firstNumber, secondNumber);
   currentValue.textContent = result;
   
});