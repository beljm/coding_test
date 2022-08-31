//짝지어 제거하기
function solution(s) {
  let stack = [];
  for (let i of s) {
    if (stack.length === 0) {
      stack.push(i);
    } else {
      if (stack[stack.length - 1] === i) {
        stack.pop();
      } else {
        stack.push(i);
      }
    }
  }
  return stack.length > 0 ? 0 : 1;
}

// let s = 'baabaa';
//1
let s = 'cdcd';
//0

let result = solution(s);
console.log('결과:', result);
