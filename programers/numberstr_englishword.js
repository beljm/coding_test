//숫자 문자열과 영단어
function solution(s) {
  const englishWord = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];
  for (let i = 0; i < englishWord.length; i++) {
    const exp = new RegExp(englishWord[i], 'g');
    s = s.replace(exp, i);
  }
  console.log(s);
  var answer = Number(s);
  return answer;
}

// const s = 'one4seveneight';
// const s = '23four5six7';
// const s = '2three45sixseven';
const s = '123';

const result = solution(s);
console.log('출력:', result);
