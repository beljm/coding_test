//약수의 개수와 덧셈
function solution(left, right) {
    let answer = 0;
    for(let i = left; i <= right; i++){
        if(divisorCheck(i)) answer += i;
        else answer -= i;
    }
    return answer;
}

function divisorCheck(num){
    let count = 0;
    for(let i = 0; i <= num; i++){
        if(num % i === 0) count++
    }
    if(count % 2 === 0) return true;
    return false;
}

let left = 24;
let right = 27;
//52

let result = solution(left, right);
console.log('출력:', result);