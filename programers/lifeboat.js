//구명보트
function solution(people, limit) {
  people = people.sort((a, b) => b - a);
  let count = 0;
  let fpoint = 0;
  let bpoint = people.length - 1;
  while (people.length > 0) {
    if (fpoint >= bpoint) {
      fpoint === bpoint ? count++ : null;
      break;
    }
    if (people[fpoint] + people[bpoint] > limit) {
      fpoint++;
      count++;
    } else {
      fpoint++;
      bpoint--;
      count++;
    }
  }
  return count;
}

let people = [70, 50, 80, 50];
let limit = 100;

// [70, 50, 80, 50]	100	3
// [70, 80, 50]	100	3

const result = solution(people, limit);
console.log('출력:', result);
