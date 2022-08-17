//완주하지 못한 선수

function solution(participant, completion) {
  participant.sort();
  completion.sort();
  for (let i = 0; i < completion.length; i++) {
    if (participant[i] !== completion[i]) {
      return participant[i];
    }
  }
  return participant[participant.length - 1];
}

let participant = ['leo', 'kiki', 'eden'];
let completion = ['eden', 'kiki'];
//leo

// let participant = ['marina', 'josipa', 'nikola', 'vinko', 'filipa'];
// let completion = ['josipa', 'filipa', 'marina', 'nikola'];
//vinko

// let participant = ['mislav', 'stanko', 'mislav', 'ana'];
// let completion = ['stanko', 'ana', 'mislav'];
//mislav

const result = solution(participant, completion);
console.log('최종 결과', result);
