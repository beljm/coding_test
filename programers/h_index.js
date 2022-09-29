//H-index
function solution(citations) {
  for (let i = citations.length; i > 0; i--) {
    if (citations.filter(ele => ele >= i).length === i) return i;
  }
  return 0;
}

let citations = [1, 4];

// [3, 0, 6, 1, 5]	3

const result = solution(citations);
console.log('출력:', result);

//good code
// function solution(citations) {
//   citations = citations.sort(sorting);
//   var i = 0;
//   while (i + 1 <= citations[i]) {
//     i++;
//   }
//   return i;

//   function sorting(a, b) {
//     return b - a;
//   }
// }
