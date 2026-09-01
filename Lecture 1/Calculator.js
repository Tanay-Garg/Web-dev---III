const args = process.argv.slice(2);

const operation = args[0];

const num1 = Number(args[1]);
const num2 = Number(args[2]);


if (isNaN(num1) || isNaN(num2)) {
  console.log("Pls enter valid numbers!");
  console.log("Example: node calculator.js add 10 5");
} else {
  
  
  if (operation === "add") {
    console.log("Result:", num1 + num2);
  } 
  else if (operation === "subtract") {
    console.log("Result:", num1 - num2);
  } 
  else if (operation === "multiply") {
    console.log("Result:", num1 * num2);
  } 
  else if (operation === "divide") {
    if (num2 === 0) {
      console.log("Error: Cannot divide by zero!");
    } else {
      console.log("Result:", num1 / num2);
    }
  } 
  else {
    console.log("Invalid operation!");
    console.log("Please use one of: add, sub, multiply, divide");
  }
  
}