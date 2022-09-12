//짝수와 홀수
function solution(num) {
    return num % 2 === 0 ? "Even" : "Odd";
}

let num = 3;

const result = solution(num);
console.log('출력:', result);