//멀쩡한 사각형

function solution(w, h) {
  var answer = 0;
  for (let i = 1; i < w; i++) {
    answer += Math.floor((h * i) / w);
  }
  return answer * 2;
}

let w = 8;
let h = 12;
//80
const result = solution(w, h);
console.log('출력:', result);
