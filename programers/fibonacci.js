//피보나치
function solution(n) {
    return fibo(n)%1234567;
}

function fibo(v) {
    let bottom_up = [];
    bottom_up[0] = 0;
    bottom_up[1] = 1;
    bottom_up[2] = 1;
    for (let i = 3; i <= v; i++) {
        bottom_up[i] = (bottom_up[i-1]%1234567 + bottom_up[i-2]%1234567);
    }
    return bottom_up[v];
}
let n = 5;
//

const result = solution(n);
console.log('출력:', result);

//good code
// function fibonacci(n) {
//     var a = 0, b = 1, f = 1;
//     for (var i = 2; i <= n; i++) {
//       f = a + b;
//       a = b;
//       b = f;
//     }
//     return f;
//   }