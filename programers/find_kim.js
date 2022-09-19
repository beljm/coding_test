//서울에서 김서방 찾기
function solution(seoul) {
  let index = seoul.indexOf('Kim');
  return `김서방은 ${index}에 있다`;
}

let seoul = ['Jane', 'Kim'];
//"김서방은 1에 있다"

const result = solution(seoul);
console.log('출력:', result);
