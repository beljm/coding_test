//문자열 압축

function solution(s) {
  let answer = s.length;

  for (let i = 1; i <= s.length / 2; i++) {
    let str = '';
    let count = 1;
    let tempStr = s.substr(0, i);

    for (let j = i; j <= s.length; j += i) {
      let nextStr = s.substr(j, i);

      if (tempStr === nextStr) {
        count += 1;
      } else {
        if (count === 1) str = str + tempStr;
        else str = str + count + tempStr;

        count = 1;
        tempStr = nextStr;
      }
    }
    if (count === 1) str = str + tempStr;
    else str = str + count + tempStr;
    answer = Math.min(answer, str.length);
  }

  return answer;
}

let s = 'aabbaccc';
// let s = 'ababcdcdababcdcd';
// let s = 'abcabcdede';
// let s = 'abcabcabcabcdededededede';
// let s = 'xababcdcdababcdcd';

let result = solution(s);
console.log('문자열의 길이:', result);
