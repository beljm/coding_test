//예상 대진표
function solution(n, a, b) {
  let count = 0;
  while (a !== b) {
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
    count++;
  }
  return count;
}

let n = 8;
let a = 4;
let b = 7;
//8	4	7	3

const result = solution(n, a, b);
console.log('출력:', result);
