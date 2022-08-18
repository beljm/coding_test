//기능 개발

function solution(progresses, speeds) {
  var answer = [];
  // 남은 기간 리스트
  let day = progresses.map((ele, index) => {
    return Math.ceil((100 - ele) / speeds[index]);
  });
  // 배포
  while (day.length > 0) {
    // 남은 배포 1개일 경우
    if (day.length === 1) {
      answer.push(1);
      break;
    }
    // 배포 가능 탐색
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
    // 전부 배포 가능
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

// good code
// function solution(progresses, speeds) {
//     let answer = [0];
//     let days = progresses.map((progress, index) => Math.ceil((100 - progress) / speeds[index]));
//     let maxDay = days[0];

//     for(let i = 0, j = 0; i< days.length; i++){
//         if(days[i] <= maxDay) {
//             answer[j] += 1;
//         } else {
//             maxDay = days[i];
//             answer[++j] = 1;
//         }
//     }

//     return answer;
// }
