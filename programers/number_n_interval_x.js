//x만큼 간격이 있는 n개의 숫자
function solution(x, n) {
  var answer = [];
  for (let i = 0; i < n; i++) {
    answer.push(x * (answer.length + 1));
  }
  return answer;
}

let x = 2;
let n = 5;
//[2, 4, 6, 8, 10]

const result = solution(x, n);
console.log('출력:', result);
