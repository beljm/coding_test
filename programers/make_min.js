//최솟값 만들기
function solution(A, B) {
  A = A.sort((a, b) => a - b);
  B = B.sort((a, b) => b - a);
  let minSum = 0;
  for (let i = 0; i < A.length; i++) {
    minSum += A[i] * B[i];
  }
  return minSum;
}

// let A = [1, 4, 2];
// let B = [5, 4, 4];
// 29

let A = [1, 2];
let B = [3, 4];
// 10

const result = solution(A, B);
console.log('결과:', result);
