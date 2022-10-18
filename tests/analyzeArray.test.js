import { analyzeArray } from "../modules/analyzeArray";

test('returns object containing average, length, max, and min', () => {
  expect(analyzeArray([1,2,3,4,5,6])).toEqual({
    "average": 4,
    "length": 6,
    "max": 6,
    "min": 1
  })
});

test('returns object containing average, length, max, and min', () => {
  expect(analyzeArray([20,24,304,14,35,66])).toEqual({
    "average": 77,
    "length": 6,
    "max": 304,
    "min": 14
  })
});

test('returns object containing average, length, max, and min', () => {
  expect(analyzeArray([3500, 75, 243, 188, 99, 909, 1004, 12, 5, 16, 86])).toEqual({
    "average": 558,
    "length": 11,
    "max": 3500,
    "min": 5
  })
});
