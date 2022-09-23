//비밀 지도
function solution(n, arr1, arr2) {
  let answer = [];
  for (let i = 0; i < n; i++) {
    let val1 = arr1[i].toString(2).padStart(n, '0').split('');
    let val2 = arr2[i].toString(2).padStart(n, '0').split('');
    let cipher = '';
    for (let j = 0; j < n; j++) {
      val1[j] === '1' || val2[j] === '1' ? (cipher += '#') : (cipher += ' ');
    }
    answer.push(cipher);
  }
  return answer;
}

let n = 5;
let arr1 = [9, 20, 28, 18, 11];
let arr2 = [30, 1, 21, 17, 28];
//["#####","# # #", "### #", "# ##", "#####"]

let result = solution(n, arr1, arr2);
console.log('출력:', result);
