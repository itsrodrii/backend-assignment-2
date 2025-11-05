const { sumNumbers, highestNumber, lowestNumber, averageNumber } = require('../src/numberProcessor');

test('calculates sum', () => {
  expect(sumNumbers([1, 2, 3])).toBe(6);
});

test('finds highest', () => {
  expect(highestNumber([1, 9, 5])).toBe(9);
});

test('finds lowest', () => {
  expect(lowestNumber([4, 2, 8])).toBe(2);
});

test('calculates average', () => {
  expect(averageNumber([2, 4, 6])).toBe(4);
});
