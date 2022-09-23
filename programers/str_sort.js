//문자열 내 마음대로 정렬하기
function solution(strings, n) {
  return strings.sort((a, b) => {
    if (a[n] > b[n]) return 1;
    if (a[n] < b[n]) return -1;
    if (a[n] === b[n]) {
      if (a > b) return 1;
      if (a < b) return -1;
    }
  });
}

let strings = ['sun', 'bed', 'car'];
let n = 1;

// ["sun", "bed", "car"]	1	["car", "bed", "sun"]
// ["abce", "abcd", "cdx"]	2	["abcd", "abce", "cdx"]

let result = solution(strings, n);
console.log('출력', result);
