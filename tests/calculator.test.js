import { calculator } from "../modules/calculator";

test('adds two numbers together', () => {
  expect(calculator().add(1, 3)).toBe(4)
});

test('subtracts two numbers', () => {
  expect(calculator().subtract(6, 3)).toBe(3)
});

test('divides two numbers', () => {
  expect(calculator().divide(100, 10)).toBe(10)
});

test('multiplies two numbers', () => {
  expect(calculator().multiply(10, 10)).toBe(100)
});