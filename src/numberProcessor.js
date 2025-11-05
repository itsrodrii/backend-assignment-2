const fs = require('fs');

const data = fs.readFileSync(__dirname + '/../data/sample-numbers.txt', 'utf8');
const lines = data.split('\n');
const numbers = [];

for (let i = 0; i < lines.length; i++) {
  const line = lines[i].trim();
  if (line.length > 0) {
    numbers.push(parseFloat(line));
  }
}

function sumNumbers(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

function highestNumber(numbers) {
  let highest = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > highest) {
      highest = numbers[i];
    }
  }
  return highest;
}

function lowestNumber(numbers) {
  let lowest = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < lowest) {
      lowest = numbers[i];
    }
  }
  return lowest;
}

function averageNumber(numbers) {
  if (numbers.length === 0) return 0;
  return sumNumbers(numbers) / numbers.length;
}

console.log('Sum of numbers:', sumNumbers(numbers));
console.log('Highest number:', highestNumber(numbers));
console.log('Lowest number:', lowestNumber(numbers));
console.log('Average number:', averageNumber(numbers));

module.exports = { sumNumbers, highestNumber, lowestNumber, averageNumber };
