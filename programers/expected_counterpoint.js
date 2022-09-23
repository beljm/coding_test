//예상 대진표
function solution(n, a, b) {
  let count = 1;
  for (let i = 0; i < Math.log2(n); i++) {
    if (Math.abs(a - b) === 1 && Math.max(a, b) % 2 === 0) {
      return count;
    } else {
      a = Math.ceil(a / 2);
      b = Math.ceil(b / 2);
      count++;
    }
  }
}

let n = 8;
let a = 4;
let b = 7;
//8	4	7	3

const result = solution(n, a, b);
console.log('출력:', result);
