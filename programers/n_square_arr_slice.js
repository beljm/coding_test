//n^2 배열 자르기
function solution(n, left, right) {
  let leftShare = Math.floor(left / n);
  let leftRest = left % n;
  let rightShare = Math.floor(right / n);
  let rightRest = right % n;

  if (n === 1) return [1];
  let oneDArr = [];
  for (let i = leftShare + 1; i <= rightShare + 1; i++) {
    for (let j = 0; j < i; j++) {
      oneDArr.push(i);
    }
    for (let k = i + 1; k <= n; k++) {
      oneDArr.push(k);
    }
  }
  return oneDArr.slice(leftRest, oneDArr.length + 1 - n + rightRest);
}

let n = 4;
let left = 7;
let right = 14;

// 3	2	5	[3,2,2,3]
// 4	7	14	[4,3,3,3,4,4,4,4]

const result = solution(n, left, right);
console.log('출력:', result);
