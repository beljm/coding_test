//제일 작은 수 제거하기
function solution(arr) {
  if (arr.length === 1) return [-1];
  let minimum = Math.min(...arr);
  let point = arr.indexOf(minimum);
  return [...arr.slice(0, point), ...arr.slice(point + 1, arr.length)];
}

let arr = [4, 3, 2, 1];
//[4,3,2]

let result = solution(arr);
console.log('출력:', result);

//good code
// function solution(arr) {
//   arr.splice(arr.indexOf(Math.min(...arr)), 1);
//   if (arr.length < 1) return [-1];
//   return arr;
// }
