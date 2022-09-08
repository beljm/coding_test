//나머지가 1이 되는 수 찾기
function solution(n) {
  for (let i = 0; i < n; i++) {
    if (n % i === 1) return i;
  }
}

let n = 10;
//3

let result = solution(n);
console.log('결과:', result);
