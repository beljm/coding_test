// 최소 직사각형
function solution(sizes) {
  let maxLen = 0;
  let minLen = 0;
  for (let i of sizes) {
    let tempMaxLen = Math.max(...i);
    let tempMinLen = Math.min(...i);
    if (maxLen >= tempMaxLen && minLen >= tempMinLen) {
      continue;
    } else {
      maxLen < tempMaxLen ? (maxLen = tempMaxLen) : null;
      minLen < tempMinLen ? (minLen = tempMinLen) : null;
    }
  }
  return maxLen * minLen;
}

let sizes = [
  [60, 50],
  [30, 70],
  [60, 30],
  [80, 40],
];
//4000

const result = solution(sizes);
console.log('결과:', result);
