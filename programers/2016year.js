//2016년
function solution(a, b) {
  let temp = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  let date = new Date(2016, a - 1, b);
  return temp[date.getDay()];
}

let a = 5;
let b = 24;

// 5	24	"TUE"

let result = solution(a, b);
console.log('출력:', result);
