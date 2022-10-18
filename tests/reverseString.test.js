import { reverseString } from '../modules/reverseString';

test('reverses one word string', () => {
  expect(reverseString('hello')).toBe('olleh')
});

test('reverses multiple word string', () => {
  expect(reverseString('hello there buddy')).toBe('yddub ereht olleh')
});

test('only works with strings', () => {
  expect(reverseString(9)).toBe('invalid input')
});