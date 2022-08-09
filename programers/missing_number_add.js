//없는 숫자 더하기
function solution(numbers) {
  var answer = 45;
  for (let i of numbers) {
    answer -= i;
  }
  return answer;
}

// let numbers = [1, 2, 3, 4, 6, 7, 8, 0];
// 14
let numbers = [5, 8, 4, 0, 6, 7, 9];
// 6

const result = solution(numbers);
console.log('출력:', result);
