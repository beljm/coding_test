//로또의 최고 순위와 최저 순위
function solution(lottos, win_nums) {
  var answer = [];
  let zeroCount = 0;
  let collectNum = 0;
  let rank = 6;
  for (let i of lottos) {
    //0 갯수 확인
    if (i === 0) {
      zeroCount++;
    }
    //0이 아니면 당첨 번호인지 확인
    else {
      win_nums.includes(i) ? collectNum++ : null;
    }
  }
  //0 없이 나온 등수에 0갯수만큼 최고는+ 최저는-
  if (collectNum > 1) {
    rank = 7 - collectNum;
  }
  rank - zeroCount <= 0 ? answer.push(1) : answer.push(rank - zeroCount); // 최고
  answer.push(rank); // 최저

  return answer;
}

// const lottos = [44, 1, 0, 0, 31, 25];
// const win_nums = [31, 10, 45, 1, 6, 19];
//result = 	[3, 5];

// const lottos = [0, 0, 0, 0, 0, 0];
// const win_nums = [38, 19, 20, 40, 15, 25];
//result = 	[1, 6];

const lottos = [45, 4, 35, 20, 3, 9];
const win_nums = [20, 9, 3, 45, 4, 35];
//result = 	[1, 1];

const result = solution(lottos, win_nums);
console.log('결과:', result);

//good code==============================
// function solution(lottos, win_nums) {
//     const rank = [6, 6, 5, 4, 3, 2, 1];

//     let minCount = lottos.filter(v => win_nums.includes(v)).length;
//     let zeroCount = lottos.filter(v => !v).length;

//     const maxCount = minCount + zeroCount;

//     return [rank[maxCount], rank[minCount]];
// }
