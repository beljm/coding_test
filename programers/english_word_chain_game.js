//영어 끝말잇기
function solution(n, words) {
  let preWord = [];
  let count = 1;
  preWord.push(words[0]);
  for (let i = 1; i < words.length; i++) {
    count++;
    let prechar = preWord[preWord.length - 1].split('').pop();
    if (words[i][0] !== prechar || preWord.includes(words[i])) {
      return [(i % n) + 1, Math.ceil(count / n)];
    }
    preWord.push(words[i]);
  }
  return [0, 0];
}

let n = 3;
let words = [
  'tank',
  'kick',
  'know',
  'wheel',
  'land',
  'dream',
  'mother',
  'robot',
  'tank',
];
//-2

const result = solution(n, words);
console.log('출력:', result);
