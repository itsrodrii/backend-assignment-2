function totalNumberOfWords(text) {
  const words = text.split(/\s+/).filter(word => word.length > 0);
  return words.length;
}

function longestWord(text) {
  const words = text.split(/\s+/);
  let longest = "";
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longest.length) {
      longest = words[i];
    }
  }
  return longest;
}

function numberOfLines(text) {
  return text.split('\n').length;
}


const fs = require('fs');
const data = fs.readFileSync(__dirname + '/../data/quotes.txt', 'utf8');

console.log('Total number of words:', totalNumberOfWords(data));
console.log('Longest word:', longestWord(data));
console.log('Number of lines:', numberOfLines(data));

module.exports = { totalNumberOfWords, longestWord, numberOfLines };
