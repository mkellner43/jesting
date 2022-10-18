import { capitalize } from "../functions/capitalize";

test('Capitalize first letter of one word string', ()=> {
  expect(capitalize('hello')).toBe('Hello')
});

test("Capitalize first letter of every word in multiple word string", ()=> {
  expect(capitalize('hello there matt this works!')).toBe('Hello There Matt This Works!')
});