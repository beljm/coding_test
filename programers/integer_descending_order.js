//정수 내림차순으로 배치하기
function solution(n) {
  return Number(
    String(n)
      .split('')
      .sort((a, b) => b - a)
      .join(''),
  );
}

let n = 118372;
//873211

const result = solution(n);
console.log('출력:', result);
