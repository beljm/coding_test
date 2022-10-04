//튜플
function solution(s) {
  let answer = [];
  let transS = s.split(/},{|{{|}}/g);
  transS.sort((a, b) => a.length - b.length);
  // .slice(1, s.length - 1)
  for (let i of transS) {
    let tempArr = i.split(',');
    tempArr = tempArr.filter(ele => !answer.includes(Number(ele)));
    i !== '' ? answer.push(Number(tempArr[0])) : null;
  }
  return answer;
}

let s = '{{2},{2,1},{2,1,3},{2,1,3,4}}';

// "{{2},{2,1},{2,1,3},{2,1,3,4}}"	[2, 1, 3, 4]
// "{{1,2,3},{2,1},{1,2,4,3},{2}}"	[2, 1, 3, 4]
// "{{20,111},{111}}"	[111, 20]
// "{{123}}"	[123]
// "{{4,2,3},{3},{2,3,4,1},{2,3}}"	[3, 2, 4, 1]

const result = solution(s);
console.log('최종 결과', result);
