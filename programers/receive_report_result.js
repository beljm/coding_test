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

//good sorce
// function solution(id_list, report, k) {
//   let reports = [...new Set(report)].map(a=>{return a.split(' ')});
//   let counts = new Map();
//   for (const bad of reports){
//       counts.set(bad[1],counts.get(bad[1])+1||1)
//   }
//   let good = new Map();
//   for(const report of reports){
//       if(counts.get(report[1])>=k){
//           good.set(report[0],good.get(report[0])+1||1)
//       }
//   }
//   let answer = id_list.map(a=>good.get(a)||0)
//   return answer;
// }
