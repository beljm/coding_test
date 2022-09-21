//문자열 내림차순으로 배치하기
function solution(s) {
  let arr = s.split('');
  arr.sort((a, b) => {
    if (a < b) return 1;
    if (a > b) return -1;
  });
  return arr.join('');
}
let s = 'Zbcdefg';
// "gfedcbZ"

const result = solution(s);
console.log('출력:', result);
