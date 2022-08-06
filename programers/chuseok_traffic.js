//추석 트래픽
function solution(lines) {
  const resortedLineds = [];
  let stack = [];
  var answer = 0;
  //요청 온 시간을 추가하고, 기준으로 오름차순 정렬
  for (let i of lines) {
    const logData = i.split(' ');
    const getMSecond =
      Number(logData[2].slice(0, logData[2].length - 1)) * 1000;
    const utcEndTime = new Date(logData[0] + 'T' + logData[1]) - 0;
    const utcAskTime = new Date(logData[0] + 'T' + logData[1]) - getMSecond;
    resortedLineds.push([utcAskTime, utcEndTime]);
  }
  resortedLineds.sort((a, b) => a[0] - b[0]);

  // stack에 넣으면서 가장 숫자 큰 length확인
  for (let i of resortedLineds) {
    stack.push(i);
    stack = stack.filter(ele => ele[1] + 1000 > i[0]);
    console.log('stack:', stack);
    stack.length > answer ? (answer = stack.length) : null;
  }

  return answer;
}

// let lines = ['2016-09-15 01:00:04.001 2.0s', '2016-09-15 01:00:07.000 2s'];
//1

let lines = ['2016-09-15 01:00:04.001 2.0s', '2016-09-15 01:00:07.000 2s'];
//2

// let lines = [
//   '2016-09-15 20:59:57.421 0.351s',
//   '2016-09-15 20:59:58.233 1.181s',
//   '2016-09-15 20:59:58.299 0.8s',
//   '2016-09-15 20:59:58.688 1.041s',
//   '2016-09-15 20:59:59.591 1.412s',
//   '2016-09-15 21:00:00.464 1.466s',
//   '2016-09-15 21:00:00.741 1.581s',
//   '2016-09-15 21:00:00.748 2.31s',
//   '2016-09-15 21:00:00.966 0.381s',
//   '2016-09-15 21:00:02.066 2.62s',
// ];
//7
let result = solution(lines);
console.log('출력:', result);
