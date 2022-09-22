//jadencase 문자열 만들기
function solution(s) {
    let arr = [];
    s = s.split(' ');
    for(let i of s){
        arr.push(i.slice(0, 1).toUpperCase() + i.toLowerCase().slice(1, i.length));
    }
    return arr.join(' ');
}

let s = "3people unFollowed me";
//"3people Unfollowed Me"

// let s = "for the last week";
//"For The Last Week"

const result = solution(s);
console.log('출력:', result);