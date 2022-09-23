//점프와 순간이동
function solution(n) {
  let least = 1;
  while (n !== 1) {
    if (n == 2) break;
    else if (n % 2 === 0) n /= 2;
    else {
      n = (n - 1) / 2;
      least++;
    }
  }
  return least;
}

let n = 5000;

// 5	2
// 6	2
// 5000	5

const result = solution(n);
console.log('출력:', result);

//good code
// const solution = (n) => n.toString(2).match(/1/g).length;
