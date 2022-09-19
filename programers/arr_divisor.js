// 나누어 떨어지는 숫자 배열
function solution(arr, divisor) {
  var answer = [];
  for (let i of arr) {
    i % divisor === 0 ? answer.push(i) : null;
  }
  if (answer.length === 0) return [-1];
  answer.sort((a, b) => a - b);
  return answer;
}

let arr = [5, 9, 7, 10];
let divisor = 5;
//[5, 10]

let result = solution(arr, divisor);
console.log('출력:', result);

//good code
// function solution(arr, divisor) {
//     var answer = arr.filter(v => v%divisor == 0);
//     return answer.length == 0 ? [-1] : answer.sort((a,b) => a-b);
// }
