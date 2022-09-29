//예산
function solution(d, budget) {
  let count = 0;
  d = d.sort((a, b) => a - b);
  for (let i of d) {
    budget = budget - i;
    if (budget >= 0) {
      count++;
    } else {
      break;
    }
  }
  return count;
}

let d = [1, 3, 2, 5, 4];
let budget = 9;
//3

let result = solution(d, budget);
console.log('출력:', result);
