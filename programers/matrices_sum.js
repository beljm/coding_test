//행렬 덧셈
function solution(arr1, arr2) {
    let answer = [];
    for(let i = 0; i < arr1.length; i++){
        let arr = [];
        for(let j = 0; j < arr1[i].length; j++){
            arr.push(arr1[i][j]+arr2[i][j])
        }
        answer.push(arr);
    }    
    return answer;
}

let arr1 = [[1,2],[2,3]];
let arr2 = [[3,4],[5,6]];

const result = solution(arr1, arr2);
console.log('결과:', result);

//good code
// function sumMatrix(A,B){
//     return A.map((a,i) => a.map((b, j) => b + B[i][j]));
// }