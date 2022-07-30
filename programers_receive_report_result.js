function solution(id_list, report, k) {
  //정지 되는 인원 찾기
  const reportList = Array(id_list.length).fill([]);
  for (let i of report) {
    const splitData = i.split(' ');
    const repoter = splitData[0];
    const repored = splitData[1];

    id_list.forEach((element, index) => {
      if (repored === element) {
        if (!reportList[index].includes(repoter)) {
          reportList[index] = [...reportList[index], repoter];
        }
      }
    });
  }

  var answer = Array(id_list.length).fill(0);
  let result = [];
  reportList.forEach(ele => {
    if (ele.length >= k) {
      result = [...result, ...ele];
    }
  });
  id_list.forEach((ele, index) => {
    let count = 0;
    for (let i of result) {
      if (ele === i) {
        count++;
      }
    }
    answer[index] = count;
  });
  return answer;
}

const id_list = ['con', 'ryan']; //이용자 배열
const report = ['ryan con', 'ryan con', 'ryan con', 'ryan con']; // 신고한 이용자의 ID 정보가 담긴 배열
const k = 3; // 정지 기준 신고 횟수

// const id_list = ['muzi', 'frodo', 'apeach', 'neo']; //이용자 배열
// const report = [
//   'muzi frodo',
//   'apeach frodo',
//   'frodo neo',
//   'muzi neo',
//   'apeach muzi',
// ]; // 신고한 이용자의 ID 정보가 담긴 배열
// const k = 2; // 정지 기준 신고 횟수

const result = solution(id_list, report, k);
console.log(result);
