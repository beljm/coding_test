// 두 큐 합 같게 만들기
function solution(queue1, queue2) {
  let answer = 0;
  let q1Sum = calSum(queue1);
  let q2Sum = calSum(queue2);
  let harf = (q1Sum + q2Sum) / 2;
  let len = queue1.length;
  let index1 = 0;
  let index2 = 0;
  if (q1Sum === q2Sum) {
    return 0;
  }
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

// 두 큐 합 같게 만들기
// function solution(queue1, queue2) {
//     let arr = [...queue1, ...queue2];
//     let harf = calSum(arr) / 2;
//     let result = [];
//     let answer = -1;
//     let len = queue1.length;
//     for (let i = 0; i < arr.length; i++) {
//       let sum = 0;
//       let count = 0;
//       for (let j of arr) {
//         sum += j;
//         count++;
//         if (sum > harf) {
//           count = len * 2;
//           break;
//         }
//         if (sum === harf) {
//           break;
//         }
//       }
//       result.push(count);
//       let temp = arr.slice(0);
//       arr = [...temp.slice(1), temp[0]];
//     }
//     console.log(result);
//     for (let i = 0; i < result.length; i++) {
//       if (result[i] !== arr.length) {
//         console.log('i', result[i], i);
//         if (result[i] + (i % len) === len) {
//           console.log('11111');
//           answer === -1 || answer > i % len ? (answer = i % len) : null;
//         } else if (result[i] + (i % len) > len) {
//           console.log('22222');
//           answer === -1 || answer > result[i] - (len - (i % len)) + (i % len)
//             ? (answer = result[i] - (len - (i % len)) + (i % len))
//             : null;
//         } else {
//           console.log('33333');
//           answer === -1 || answer > result[i] + 2 * (i % len) + len
//             ? (answer = result[i] + 2 * (i % len) + len)
//             : null;
//         }
//       }
//       console.log(answer);
//     }

//     return answer;
//   }

//   const calSum = arr => {
//     let sum = arr.reduce((acc, cur) => {
//       acc += cur;
//       return acc;
//     }, 0);
//     return sum;
//   };

//good code
