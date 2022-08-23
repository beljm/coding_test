//체육복
function solution(n, lost, reserve) {
  let self = [];
  lost.sort();
  reserve.sort();
  for (let i of lost) {
    console.log(i);
    if (reserve.includes(i)) {
      self.push(i);
    }
  }
  for (let i of self) {
    lost.splice(lost.indexOf(i), 1);
    reserve.splice(reserve.indexOf(i), 1);
  }
  console.log(lost, reserve);
  console.log('==========');
  lost = lost.filter(ele => {
    console.log(reserve);
    if (reserve.includes(ele - 1)) {
      console.log(ele - 1, reserve.indexOf(ele - 1), '-');
      reserve.splice(reserve.indexOf(ele - 1), 1);
      return false;
    }
    if (reserve.includes(ele + 1)) {
      console.log(ele + 1, reserve.indexOf(ele + 1), '+');
      reserve.splice(reserve.indexOf(ele + 1), 1);
      return false;
    }

    return true;
  });
  console.log('==========');
  console.log(n, lost, lost.length);
  return n - lost.length;
}

// let n = 5;
// let lost = [2, 4];
// let reserve = [1, 3, 5];
// 5

let n = 5;
let lost = [1, 2, 4, 5];
let reserve = [2, 3, 4];
// 5
const result = solution(n, lost, reserve);
console.log('최종 결과', result);
