//음양 더하기
function solution(absolutes, signs) {
  var answer = 0;
  for (let i = 0; i < absolutes.length; i++) {
    signs[i] === true ? (answer += absolutes[i]) : (answer -= absolutes[i]);
  }
  return answer;
}

let absolutes = [1, 2, 3];
let signs = [false, false, true];

const result = solution(absolutes, signs);
console.log('출력:', result);
