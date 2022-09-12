//자연수 뒤집어 배열로 만들기
function solution(n) {
  let arr = String(n).split('');
  arr.reverse();
  return arr.map(ele => Number(ele));
}

let n = 12345;
//[5,4,3,2,1]

let result = solution(n);
console.log('출력:', result);
