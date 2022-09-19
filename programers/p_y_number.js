//문자열 내 p와 y의 개수
function solution(s) {
  let countP = 0;
  let countY = 0;
  s = s.toLowerCase();
  for (let i of s) {
    i === 'p' ? countP++ : null;
    i === 'y' ? countY++ : null;
  }
  if (countP === countY) return true;
  return false;
}

let s = 'pPoooyY';

const result = solution(s);
console.log('출력', result);
