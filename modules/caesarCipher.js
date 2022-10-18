export const caesarCipher = (key, string) => {
  let newString = ''
  for (const char of string) {
    let code = char.charCodeAt(0)
    let base = 0
    code >= 65 && code <= 90 ? base = 65 : base = 97
    let newCode = (code - base + key) % 26 + base
    newString += String.fromCharCode(newCode)
  }
    return newString
};