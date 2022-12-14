import { capitalize } from "../modules/capitalize";

test('Capitalize first letter of one word string', ()=> {
  expect(capitalize('hello')).toBe('Hello')
});

test("Capitalize first letter of every word in multiple word string", ()=> {
  expect(capitalize('hello there matt this works!')).toBe('Hello There Matt This Works!')
});

test('only works with strings', () => {
  expect(capitalize(9)).toBe('invalid input')
})