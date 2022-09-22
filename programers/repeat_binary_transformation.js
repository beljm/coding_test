//이진 변환 반복하기
function solution(s) {
    let repeat = 1;
    let count = 0;
    s = s.split('');
    let arr = s.filter((ele)=> Number(ele) !== 0)
    count += s.length - arr.length;
    while(true){
        if(arr.length <= 1){
            return [repeat, count];
        }
        ++repeat;        
        let len = arr.length;
        let temp = []
        while(len > 1){
            len%2 === 0 ? count++ : temp.push(1)
            let num = Math.floor(len/2);
            num === 1 ? temp.push(1) : null;
            len = num;    
        }
        arr = temp;
    }
}


// let s = '110010101001';
//[3,8]

// let s = '01110'
//[3, 3]

let s = '1111111';
//[4, 1];

// "110010101001"	
// "01110"	[3,3]
// "1111111"	[4,1]

let result = solution(s);
console.log('결과:', result);

//good code

// function solution(s) {
//     var answer = [0,0];
//     while(s.length > 1) {
//         answer[0]++;
//         answer[1] += (s.match(/0/g)||[]).length;
//         s = s.replace(/0/g, '').length.toString(2);
//     }
//     return answer;
// }