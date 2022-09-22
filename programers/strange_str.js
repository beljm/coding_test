//이상한 문자 만들기
function solution(s) {
    let answer = [];
    s = s.split(' ')
    for(let i of s){
        let temp = i.split('');
        answer.push(temp.map((ele, index)=>{
            if(index%2===0) return ele.toUpperCase();
            else return ele;
        }).join(''))
    }
    
    return answer.join(' ');
}

let s = "try hello world";
// "TrY HeLlO WoRlD"

let result = solution(s);
console.log('결과:', result);