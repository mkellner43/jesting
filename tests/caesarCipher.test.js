import { caesarCipher } from "../modules/caesarCipher";

test('key shifts value by correct number of letter', () => {
  expect(caesarCipher(1, 'a')).toBe('b')
});

test('is able to wrap from z to a', () => {
  expect(caesarCipher(1, 'z')).toBe('a')
});

test('works with uppercase letter', () => {
  expect(caesarCipher(1, 'A')).toBe('B')
});

test('works with punctuation', () => {
  expect(caesarCipher(4, '!,?-.')).toBe('YJ]KL')
})

test('works with very key > 26', () => {
  expect(caesarCipher(155, 'hello')).toBe('gdkkn')
})
