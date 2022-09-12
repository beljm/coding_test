//제곱근 판별
function solution(n) {
  if (n === 1) return 1;
  for (let i = 0; i <= n / 2; i++) {
    if (n === i * i) return Math.pow(Math.sqrt(n) + 1, 2);
    if (n < i * i) break;
  }
  return -1;
}

let n = 4;
//144

let result = solution(n);
console.log('출력:', result);

//good code
// function nextSqaure(n){
//     var result = 0;
//     var n = Math.sqrt(n);
//     result = Number.isInteger(n) ? Math.pow(n+1, 2) : 'no';
//     return result;
// }
