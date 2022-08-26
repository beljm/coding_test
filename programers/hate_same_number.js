//같은 숫자는 싫어
function solution(arr) {
  var answer = [];
  let cur = -1;
  for (let i of arr) {
    cur !== i ? (answer.push(i), (cur = i)) : null;
  }

  return answer;
}

// let arr = [1, 1, 3, 3, 0, 1, 1];
//[1,3,0,1]

let arr = [4, 4, 4, 3, 3];
//[4,3]

const result = solution(arr);
console.log('출력:', result);
