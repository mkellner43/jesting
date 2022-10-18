export const calculator = () => {
  function add(num1, num2){
    let sum = num1 + num2
    return sum
  }
  function subtract(num1, num2){
    let result = num1 - num2
    return result
  }
  function divide(num1, num2){
    let result = num1 / num2
    return result
  }
  function multiply(num1, num2){
    let product = num1 * num2
    return product
  }
  return {
    add,
    subtract,
    divide,
    multiply
  }
}