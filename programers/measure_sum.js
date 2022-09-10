//약수의 합
function solution(n) {
    let sum = 0
    for(let i = 1; i <= Math.sqrt(n); i++){
        if(n % i === 0){
            let temp = Math.floor(n/i);
            if(i === temp) sum += i;
            else{
                sum += i;
                sum += Math.floor(n/i);
            }
        }
    }
    return sum;
}

let n = 12
//28

const result = solution(n);
console.log('결과:', result);