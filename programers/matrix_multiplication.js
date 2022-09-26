//행렬 곱셈
function solution(arr1, arr2) {
  let answer = [];
  for (let i = 0; i < arr1.length; i++) {
    let tempArr = [];
    for (let k = 0; k < arr2[0].length; k++) {
      let temp = 0;
      for (let j = 0; j < arr2.length; j++) {
        temp += arr1[i][j] * arr2[j][k];
      }
      tempArr.push(temp);
    }
    answer.push(tempArr);
  }
  return answer;
}

let arr1 = [
  [2, 3, 2],
  [4, 2, 4],
  [3, 1, 4],
];
let arr2 = [
  [5, 4, 3],
  [2, 4, 1],
  [3, 1, 1],
];

//   [[1, 4], [3, 2], [4, 1]]	[[3, 3], [3, 3]]	[[15, 15], [15, 15], [15, 15]]
//   [[2, 3, 2], [4, 2, 4], [3, 1, 4]]	[[5, 4, 3], [2, 4, 1], [3, 1, 1]]	[[22, 22, 11], [36, 28, 18], [29, 20, 14]]

const result = solution(arr1, arr2);
console.log('결과:', result);
