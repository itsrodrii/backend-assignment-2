const { totalNumberOfWords, longestWord, numberOfLines } = require('../src/textAnalyzer');

test('counts total words', () => {
  const text = 'This is a simple test';
  expect(totalNumberOfWords(text)).toBe(5);
});

test('finds longest word', () => {
  const text = 'cat elephant dog';
  expect(longestWord(text)).toBe('elephant');
});

test('counts number of lines', () => {
  const text = 'line one\nline two\nline three';
  expect(numberOfLines(text)).toBe(3);
});
