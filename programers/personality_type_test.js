//성격 유형 검사
function solution(survey, choices) {
  let character = [0, 0, 0, 0];
  let one = ['R', 'T'];
  let two = ['C', 'F'];
  let three = ['J', 'M'];
  let four = ['A', 'N'];
  for (let i = 0; i < survey.length; i++) {
    let count = 0;
    if (one.includes(survey[i][0])) {
      one[0] === survey[i][0]
        ? (count += choices[i] - 4)
        : (count += 4 - choices[i]);
      character[0] += count;
    } else if (two.includes(survey[i][0])) {
      two[0] === survey[i][0]
        ? (count += choices[i] - 4)
        : (count += 4 - choices[i]);
      character[1] += count;
    } else if (three.includes(survey[i][0])) {
      three[0] === survey[i][0]
        ? (count += choices[i] - 4)
        : (count += 4 - choices[i]);
      character[2] += count;
    } else {
      console.log(four[0], survey[i][0], choices[i]);
      four[0] === survey[i][0]
        ? (count += choices[i] - 4)
        : (count += 4 - choices[i]);
      character[3] += count;
    }
  }
  console.log(character);
  var answer = '';
  character[0] <= 0 ? (answer += one[0]) : (answer += one[1]);
  character[1] <= 0 ? (answer += two[0]) : (answer += two[1]);
  character[2] <= 0 ? (answer += three[0]) : (answer += three[1]);
  character[3] <= 0 ? (answer += four[0]) : (answer += four[1]);
  return answer;
}

let survey = ['AN', 'CF', 'MJ', 'RT', 'NA'];
let choices = [5, 3, 2, 7, 5];
//"TCMA"

const result = solution(survey, choices);
console.log('최종 결과', result);

//good code
// function solution(survey, choices) {
//   let answer = '';
//   const obj = {
//     R: 0,
//     T: 0,
//     C: 0,
//     F: 0,
//     J: 0,
//     M: 0,
//     A: 0,
//     N: 0,
//   };

//   const aplph = survey.map((v, i) => {
//     if (choices[i] > 4) obj[v.substring(1, 2)] += choices[i] - 4;
//     if (choices[i] < 4) obj[v.substring(0, 1)] += 4 - choices[i];
//   });

//   obj['R'] >= obj['T'] ? (answer += 'R') : (answer += 'T');
//   obj['C'] >= obj['F'] ? (answer += 'C') : (answer += 'F');
//   obj['J'] >= obj['M'] ? (answer += 'J') : (answer += 'M');
//   obj['A'] >= obj['N'] ? (answer += 'A') : (answer += 'N');

//   return answer;
// }
