//Program for simple calculator
let result;
//Input to be used for calculation
const num1 = parseFloat(prompt("Enter first number: "));
const operator = prompt("Enter operator: ");
const num2 = parseFloat(prompt("Enter second number: ");
// Switch statement to do calculation
switch (operator) {
case '+' :
    result = num1 + num2;
    break;
case '-' :
    result = num1 - num2;
    break;
case '*' :
    result = num1 * num2;
    break;
case '/' :
    result = num1 / num2;
    break;
default :
    console.log("Please enter a valid operator.");
    break;
}
