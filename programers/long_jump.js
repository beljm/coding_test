//멀리뛰기
function solution(n) {
  return cal(n) % 1234567;
}

function cal(_n) {
  let memo = [];
  memo[0] = 0;
  memo[1] = 1;
  memo[2] = 2;
  for (let i = 3; i <= _n; i++) {
    memo[i] = (memo[i - 1] % 1234567) + (memo[i - 2] % 1234567);
  }
  return memo[_n];
}
let n = 4;
// 4	5
// 3	3

const result = solution(n);
console.log('출력:', result);
