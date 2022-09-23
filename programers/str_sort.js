//문자열 내 마음대로 정렬하기
function solution(strings, n) {
  let arr = [];
  for (let i of strings) {
    arr.push({ key: i[n], value: i });
  }
  arr = arr.sort((a, b) => {
    if (a.key > b.key) return 1;
    if (a.key < b.key) return -1;
    if (a.key === b.key) {
      if (a.value > b.value) return 1;
      if (a.value < b.value) return -1;
    }
  });
  return arr.map(ele => {
    return ele.value;
  });
}

let strings = ['sun', 'bed', 'car'];
let n = 1;

// ["sun", "bed", "car"]	1	["car", "bed", "sun"]
// ["abce", "abcd", "cdx"]	2	["abcd", "abce", "cdx"]

let result = solution(strings, n);
console.log('출력', result);
