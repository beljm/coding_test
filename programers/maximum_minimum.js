//최대값과 최솟값
function solution(s) {
  let arr = s.split(' ');
  let maximum = arr[0];
  let minimum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    maximum < Number(arr[i])
      ? (maximum = arr[i])
      : minimum > Number(arr[i])
      ? (minimum = arr[i])
      : null;
  }
  return `${minimum} ${maximum}`;
}

// let s = '1 2 3 4';
//"1 4"

let s = '-1 -2 -3 -4';
//"-4 -1"

const result = solution(s);
console.log('결과:', result);
