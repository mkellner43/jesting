export const capitalize = (string) =>{
  let arr = string.split(' ')
  let newArr = arr.map(word => word.charAt(0).toUpperCase() + word.slice(1))
  return newArr.join(' ')
}