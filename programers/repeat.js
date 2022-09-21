//수박수박수?
function solution(n) {
  let answer = '';
  while (n >= 2) {
    n -= 2;
    answer += '수박';
  }
  if (n === 1) {
    answer += '수';
  }
  return answer;
}

let n = 3;
//"수박수"

// let n = 4;
//"수박수박"

let result = solution(n);
console.log('결과:', result);
