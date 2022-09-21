//문자열 다루기 기본
function solution(s) {
  if (s.length !== 4 && s.length !== 6) return false;
  for (let i of s.split('')) {
    if (!Number.isInteger(Number(i))) return false;
  }
  return true;
}

// let s = '2e34';
//flase

let s = '1234';
//true

let result = solution(s);
console.log('출력', result);
