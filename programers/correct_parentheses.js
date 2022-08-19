// 올바른 괄호
function solution(s) {
  const stack = [];
  for (let i of s) {
    if (i === '(') {
      stack.push(i);
    } else {
      if (stack.length <= 0) {
        return false;
      }
      stack.pop();
    }
  }

  return stack.length === 0 ? true : false;
}

// let s = '()()';
//true
// let s = '(())()';
//true
// let s = ')()(';
//false
let s = '(()(';
//false
let result = solution(s);
console.log('출력:', result);
