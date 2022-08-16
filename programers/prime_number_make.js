//소수 만들기
function solution(nums) {
  var answer = 0;

  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        console.log(nums[i], nums[j], nums[k]);
        if (checkPrime(nums[i] + nums[j] + nums[k])) answer++;
      }
    }
  }

  return answer;
}

const checkPrime = num => {
  console.log(num);
  for (let i = 2; i <= num / 2; i++) {
    if (num % i === 0) return false;
  }
  return true;
};

// let nums = [1, 2, 3, 4];
//1

let nums = [1, 2, 7, 6, 4];
//4

const result = solution(nums);
console.log('최종 결과', result);
