//평균 구하기
function solution(arr) {
  let sum = arr.reduce((acc, ele) => {
    acc += ele;
    return acc;
  });
  return sum / arr.length;
}

let arr = [1, 2, 3, 4];
//2.5

let result = solution(arr);
console.log('출력:', result);
