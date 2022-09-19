//콜라츠 추측
function solution(num) {
  for (let i = 0; i < 500; i++) {
    if (num === 1) return i;
    num % 2 === 0 ? (num = num / 2) : (num = num * 3 + 1);
  }
  return -1;
}

let num = 6;
//8

let result = solution(num);
console.log('출력:', result);
