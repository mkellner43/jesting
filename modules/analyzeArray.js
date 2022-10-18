export const analyzeArray = (array) => {
  function average(){
    let unrounded =  array.reduce((sum, num) => sum + num, 0 ) / array.length;
    return Math.round(unrounded)
  }
  function min(){
    let unrounded = Math.min(...array)
    return Math.round(unrounded)
  }
  function max(){
    let unrounded = Math.max(...array)
    return Math.round(unrounded)
  }
  function length(){
    return array.length
  }
  return {
      average: average(),
      min: min(),
      max: max(),
      length: length() 
   }
}