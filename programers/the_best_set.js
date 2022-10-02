//최고의 집합
function solution(n, s) {
  if (s === 1 || s < n) return [-1];
  let base = Math.floor(s / n);
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(base);
  }
  for (let i = 0; i < s % n; i++) {
    arr[i] = arr[i] + 1;
  }
  return arr.sort((a, b) => a - b);
}

let n = 2;
let s = 50;

// 2	9	[4, 5]
// 2	1	[-1]
// 2	8	[4, 4]

const result = solution(n, s);
console.log('최종 결과', result);
