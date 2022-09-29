//두 개 뽑아서 더하기
function solution(numbers) {
  let answer = [];
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      answer.push(numbers[i] + numbers[j]);
    }
  }
  let set = new Set(answer);
  return [...set].sort((a, b) => a - b);
}

let numbers = [5, 0, 2, 7];
// [2,1,3,4,1]	[2,3,4,5,6,7]
// [5,0,2,7]	[2,5,7,9,12]

const result = solution(numbers);
console.log('결과:', result);
