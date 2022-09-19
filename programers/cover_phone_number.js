//핸드폰 번호 가리기
function solution(phone_number) {
  let cover_number = Array(phone_number.length).fill('*');
  for (let i = phone_number.length - 4; i < phone_number.length; i++) {
    cover_number[i] = phone_number[i];
  }
  return cover_number.join('');
}

// let phone_number = '01033334444';
//"*******4444"

let phone_number = '027778888';
//"*****8888"

let result = solution(phone_number);
console.log('출력:', result);
