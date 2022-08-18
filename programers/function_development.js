//기능 개발

function solution(progresses, speeds) {
  var answer = [];
  // 남은 기간 리스트
  let day = progresses.map((ele, index) => {
    return Math.ceil((100 - ele) / speeds[index]);
  });
  // 배포
  while (day.length > 0) {
    console.log(day);
    if (day.length === 1) {
      answer.push(1);
      break;
    }
    let count = 1;
    for (let i = 1; i < day.length; i++) {
      if (day[0] >= day[i]) {
        count++;
      } else {
        day = day.slice(i);
        answer.push(count);
        break;
      }
    }
    if (count === day.length) {
      answer.push(count);
      break;
    }
  }
  return answer;
}

let progresses = [93, 30, 55];
let speeds = [1, 30, 5];
//[2, 1]

// let progresses = [95, 90, 99, 99, 80, 99];
// let speeds = [1, 1, 1, 1, 1, 1];
//[1, 3, 2]

const result = solution(progresses, speeds);
console.log('출력:', result);
