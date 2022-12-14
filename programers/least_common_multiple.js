//최소 공배수
function solution(arr) {
  let lcm = Math.max(...arr);
  let count = 1;
  while (arr.filter(ele => (lcm * count) % ele === 0).length !== arr.length) {
    count++;
  }
  return lcm * count;
}

let arr = [2, 6, 8, 14];
// [2,6,8,14]	168
// [1,2,3]	6
const result = solution(arr);
console.log('출력:', result);
