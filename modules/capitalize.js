export const capitalize = (string) =>{
  if(typeof string !== 'string'){
    return 'invalid input'
  }
  let arr = string.split(' ')
  let newArr = arr.map(word => word.charAt(0).toUpperCase() + word.slice(1))
  return newArr.join(' ')
}