//폰켓몬
function solution(nums) {
  var answer = 0;
  const array = Array(nums.length).fill(0);
  for (let i of nums) {
    array[i] += 1;
  }
  const validArray = array.filter(ele => ele !== 0);
  console.log(nums, validArray);
  return nums.length / 2 < validArray.length
    ? nums.length / 2
    : validArray.length;
}

// let nums = [3, 1, 2, 3];
//2
// let nums = [3, 3, 3, 2, 2, 4];
//3
let nums = [3, 3, 3, 2, 2, 2];
//2

const result = solution(nums);
console.log('최종 결과', result);

//good code
// function solution(nums) {
//     const max = nums.length / 2;
//     const arr = [...new Set(nums)];

//     return arr.length > max ? max : arr.length
//   }
