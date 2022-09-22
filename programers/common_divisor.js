//최대 공약수와 최소 공배수
// function solution(n, m) {
//     return [calMin(n, m), calMax(n, m)];
// }

// function calMin(n, m) {
//     let temp = 0;
//     n > m ? null : (temp = m, m = n, n = temp);
//     console.log(n, m)
//     return m > 0 ? calMin(m, n%m) : n;
// }

// function calMax(n, m){
//     let count = Math.max(n, m);
//     while(count%n !== 0 && count%m !== 0){
//         count++;
//     }
//     return count;
// }

let n = 3;
let m = 12;
//[3, 12]

let result = solution(n, m);
console.log('출력:', result);

//good code
function solution(a, b) {
    var r;
    for(var ab= a*b;r = a % b;a = b, b = r){}
    return [b, ab/b];
}