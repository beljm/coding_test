//실패율
function solution(N, stages) {
  let challenger = stages.length;
  let current = Array(N).fill(0);
  let failrate = [];

  for (let i of stages) {
    if (i <= N) {
      current[i - 1] += 1;
    }
  }
  for (let i = 0; i < current.length; i++) {
    failrate.push({ num: i + 1, rate: current[i] / challenger });
    challenger -= current[i];
  }
  failrate.sort((a, b) => {
    return b.rate - a.rate;
  });

  return failrate.map(ele => {
    return ele.num;
  });
}

let N = 5;
let stages = [2, 1, 2, 6, 2, 4, 3, 3];
//[3,4,2,1,5]

const result = solution(N, stages);
console.log('출력:', result);
