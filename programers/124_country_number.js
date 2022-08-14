// 124 나라의 숫자

function solution(n) {
  var answer = '';
  while (n > 0) {
    answer = matchNum(n % 3) + answer;
    n = parseInt((n - 1) / 3);
  }
  return answer;
}

const matchNum = n => {
  if (n === 0) return 4;
  else return n;
};

// let n = 1;
//1

// let n = 2;
//2

// let n = 3;
//4

let n = 4;
//11

let result = solution(n);
console.log('출력:', result);
