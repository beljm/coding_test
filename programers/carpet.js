//카펫
function solution(brown, yellow) {
  let h = 2;
  let sum = brown + yellow;
  while (h++) {
    let v = sum / h;
    if (Number.isInteger(v) && h >= v && (h - 2) * (v - 2) === yellow) {
      break;
    }
  }
  return [h, sum / h];
}

let brown = 24;
let yellow = 24;
//"BC"

let result = solution(brown, yellow);
console.log('출력:', result);
