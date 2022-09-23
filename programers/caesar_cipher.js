//시저 암호
function solution(s, n) {
  let ciphertext = [];
  s = s.split('');
  for (let i of s) {
    let temp = i.charCodeAt();
    if (i !== ' ') {
      if (temp <= 90) {
        temp += n;
        temp > 90 ? (temp -= 26) : null;
      } else {
        temp += n;
        temp > 122 ? (temp -= 26) : null;
      }
    }
    ciphertext.push(String.fromCharCode(temp));
  }
  return ciphertext.join('');
}

let s = 'a B z';
let n = 4;
//"BC"

let result = solution(s, n);
console.log('출력:', result);

//a 97
//z 122
//A 65
//Z 90
// console.log('Z'.charCodeAt());
// String.fromCharCode
