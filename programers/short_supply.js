//부족한 금액 계산기
function solution(price, money, count) {
    let total = price * (count*(1+count)/2);
    let cul = total - money;
    return cul <= 0 ? 0 : cul;
}

let price = 3;
let money = 20;
let count = 4;
//10

let result = solution(price, money, count);
console.log('출력:', result);