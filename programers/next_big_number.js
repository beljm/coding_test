//다음 큰 숫자
function solution(n) {
  let count = 1;
  let nTo2 = n.toString(2);
  let oneCount = nTo2.split('').filter(ele => ele === '1').length;
  while (count != 0) {
    if (
      (n + count)
        .toString(2)
        .split('')
        .filter(ele => ele === '1').length === oneCount
    ) {
      return n + count;
    }
    count++;
  }
}

let n = 78;
//83

const result = solution(n);
console.log('출력:', result);
