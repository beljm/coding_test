//가운데 글자 가져오기
function solution(s) {
  return s.length % 2 === 0
    ? s.slice(s.length / 2 - 1, s.length / 2 + 1)
    : s[Math.round(s.length / 2 - 1)];
}

// let s = 'abcde';
//"c"

let s = 'qwer';
//"we"

const result = solution(s);
console.log('출력:', result);

//good code
// function solution(s) {
//   return s.slice(
//     s.length / 2 - 1,
//     s.length % 2 === 0 ? s.length / 2 + 1 : s.length / 2,
//   );
// }
