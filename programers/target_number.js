//타겟 넘버
function solution(numbers, target) {
  var answer = 0;
  if (numbers.length <= 1) {
    return Math.abs(target) === numbers[0] ? 1 : 0;
  }
  let num = numbers[0];
  answer += solution(numbers.slice(1), target + num);
  answer += solution(numbers.slice(1), target - num);

  return answer;
}

// let numbers = [1, 1, 1, 1, 1];
// let target = 3;
// 5

let numbers = [4, 1, 2, 1];
let target = 4;
// 2

let result = solution(numbers, target);
console.log('결과:', result);
