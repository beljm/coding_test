//모의고사
function solution(answers) {
  const num1 = [1, 2, 3, 4, 5];
  const num2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const num3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  var answer = [];
  let score = [];
  score.push(checkScore(answers, num1));
  score.push(checkScore(answers, num2));
  score.push(checkScore(answers, num3));
  let maxValue = Math.max(...score);
  console.log('max', maxValue);
  for (let i = 0; i < score.length; i++) {
    if (score[i] === maxValue) {
      answer.push(i + 1);
    }
  }

  return answer.sort((a, b) => a - b);
}

const checkScore = (answer, n) => {
  let score = 0;
  let count = 0;
  for (let i of answer) {
    i === n[count % n.length] ? score++ : null;
    count++;
  }
  return score;
};

// let answers = [1, 2, 3, 4, 5];
//[1]

let answers = [1, 3, 2, 4, 2];
//[1,2,3]

const result = solution(answers);
console.log('출력:', result);
