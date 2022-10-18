export const reverseString = (string) => {
  let result = typeof string === 'string' ? string.split('').reverse().join('') : "invalid input";
  return result
}