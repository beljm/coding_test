//3번 뒤집기
function solution(n) {
  return parseInt(n.toString(3).split('').reverse().join(''), 3);
}

let n = 45;
//7

const result = solution(n);
console.log('최종 결과', result);
