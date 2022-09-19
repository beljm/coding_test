//두 정수 사이의 합
function solution(a, b) {
  let temp = 0;
  let sum = 0;
  a > b ? ((temp = b), (b = a), (a = temp)) : null;
  while (a <= b) {
    sum += a;
    a++;
  }
  return sum;
}

let a = 3;
let b = 5;

let result = solution(a, b);
console.log('결과:', result);

//good code
// function adder(a, b){
//     var result = 0
//     //함수를 완성하세요

//     return (a+b)*(Math.abs(b-a)+1)/2;
// }
