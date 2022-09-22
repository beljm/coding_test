//숫자의 표현
function solution(n) {
    let count = 1;
    for(let i = 1; i < n; i++){
        calnm(i, n) ? count++ : null
    }
    return count;
}

function calnm(start, target){
    let result = false;
    for(let i = start; i<target; i++){
        if((i-start+1)*(start+i)/2 === target) return true;
        if((i-start+1)*(start+i)/2 > target) return false;
    }
    return result;        
}

let n = 15;
//4

const result = solution(n);
console.log('출력:', result);

//good code
// function expressions(num) {
//     var answer = 0;

//   for(var i=1; i<=num; i++) {
//     if (num%i == 0 && i%2 == 1)
//       answer++
//   }
//     return answer;
// }