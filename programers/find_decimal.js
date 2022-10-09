//소수 찾기
function solution(n) {
    let arr = new Array(n+1).fill(true)
    arr[0] = false;
    arr[1] = false;

    for(let i=2; i <= n; i++){
        if(arr[i] === false) continue;

        for(let j = 2; j <= n / i; j++){
            arr[i*j] = false;
        }
    }
    return arr.filter((ele)=>{ if(ele === true) return ele}).length;
}
//true: 소수 false: 소수 아님

let n = 5;
//

const result = solution(n);
console.log('출력:', result);