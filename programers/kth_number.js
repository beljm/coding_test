function solution(array, commands) {
  var answer = [];
  for (let i of commands) {
    let temp = array.slice(i[0] - 1, i[1]);
    temp = temp.sort((a, b) => a - b);
    answer.push(temp[i[2] - 1]);
  }
  return answer;
}

let array = [1, 5, 2, 6, 3, 7, 4];
let commands = [
  [2, 5, 3],
  [4, 4, 1],
  [1, 7, 3],
];
//[5, 6, 3]
const result = solution(array, commands);
console.log('출력:', result);
