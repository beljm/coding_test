// 두 큐 합 같게 만들기
function solution(queue1, queue2) {
  let answer = 0;
  let q1Sum = calSum(queue1);
  let q2Sum = calSum(queue2);
  let harf = (q1Sum + q2Sum) / 2;
  let len = queue1.length;
  let index1 = 0;
  let index2 = 0;
  for (let i = 0; i < len * 3; i++) {
    console.log(q1Sum, q2Sum, harf);
    if (q1Sum < harf) {
      let q2 = queue2[index2];
      q1Sum += q2;
      queue1.push(q2);
      index2++;
      answer++;
    } else if (q1Sum > harf) {
      let q1 = queue1[index1];
      q1Sum -= q1;
      queue2.push(q1);
      index1++;
      answer++;
    } else {
      return answer;
    }
  }

  return -1;
}

const calSum = arr => {
  let sum = arr.reduce((acc, cur) => {
    acc += cur;
    return acc;
  }, 0);
  return sum;
};

// let queue1 = [3, 2, 7, 2];
// let queue2 = [4, 6, 5, 1];
// 2

// let queue1 = [1, 2, 1, 2];
// let queue2 = [1, 10, 1, 2];
// 7

// let queue1 = [1, 1];
// let queue2 = [1, 5];
// -1

let queue1 = [1, 1, 1, 1, 1];
let queue2 = [1, 1, 1, 9, 1];
// -1

const result = solution(queue1, queue2);
console.log('결과:', result);

//good code
