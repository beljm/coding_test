//하샤드수
function solution(x) {
  let arr = String(x).split('');
  let sum = 0;
  for (let i of arr) {
    sum += Number(i);
  }
  return x % sum === 0 ? true : false;
}

// let x = 10;
//true

// let x = 12;
//true

// let x = 11;
//false

let x = 13;
//false

const result = solution(x);
console.log('출력:', result);
