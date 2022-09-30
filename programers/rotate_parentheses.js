//괄호 회전하기
function solution(s) {
  let map = new Map();
  map.set(')', '(');
  map.set('}', '{');
  map.set(']', '[');
  let count = 0;
  let arr = s.split('');
  for (let i = 0; i < s.length - 1; i++) {
    let stack = [];
    let tempArr = i === 0 ? arr : arr.slice(i).concat(arr.slice(0, i));
    for (let j = 0; j < tempArr.length; j++) {
      let value = tempArr[j];
      if (value === '[' || value === '{' || value === '(') {
        stack.push(value);
      } else {
        if (map.get(value) !== stack[stack.length - 1]) {
          break;
        }
        stack.pop();
      }
      j === tempArr.length - 1 ? count++ : null;
    }
  }
  return count;
}

let s = '}]()[{';
//[4,3,2]

// "[](){}"	3
// "}]()[{"	2
// "[)(]"	0
// "}}}"	0

let result = solution(s);
console.log('출력:', result);
