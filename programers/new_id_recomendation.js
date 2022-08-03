//신규 아이디 추천

function solution(new_id) {
  // 1단계 new_id의 모든 대문자를 대응되는 소문자로 치환합니다.
  const lowerId = new_id.toLowerCase();
  // 2단계 new_id에서 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자를 제거합니다.
  const filtedScId = lowerId.replace(/[^a-z1-9-_.]/g, '');
  console.log('특수문자 제거됨', filtedScId);
  // 3단계 new_id에서 마침표(.)가 2번 이상 연속된 부분을 하나의 마침표(.)로 치환합니다.
  const filtedDotId = filtedScId.replace(/\.{2,}/g, '.');
  console.log('점 중복 제거됨', filtedDotId);
  // 4단계 new_id에서 마침표(.)가 처음이나 끝에 위치한다면 제거합니다.
  let filtedFistDotId = filtedDotId.replace(/^\.|\.$/g, '');
  console.log('첫/끝 점 제거됨', filtedFistDotId);
  // 5단계 new_id가 빈 문자열이라면, new_id에 "a"를 대입합니다.
  filtedFistDotId === '' ? (filtedFistDotId = 'a') : null;
  console.log('빈 문자열이면 a 대입', filtedFistDotId);
  // 6단계 new_id의 길이가 16자 이상이면, new_id의 첫 15개의 문자를 제외한 나머지 문자들을 모두 제거합니다.
  // 만약 제거 후 마침표(.)가 new_id의 끝에 위치한다면 끝에 위치한 마침표(.) 문자를 제거합니다.

  filtedFistDotId = filtedFistDotId.slice(0, 15);
  console.log('15개 빼고 제거', filtedFistDotId, filtedFistDotId.length);

  filtedFistDotId = filtedFistDotId.replace(/\.$/, '');
  console.log('제거 후 마지막이 .이면, .제거', filtedFistDotId);
  // 7단계 new_id의 길이가 2자 이하라면, new_id의 마지막 문자를 new_id의 길이가 3이 될 때까지 반복해서 끝에 붙입니다.
  while (filtedFistDotId.length < 3) {
    filtedFistDotId += filtedFistDotId[filtedFistDotId.length - 1];
  }

  console.log('길이 2 이하면, 길이 3까지 마지막 문자 추가', filtedFistDotId);
  var answer = filtedFistDotId;
  return answer;
}

const new_id = '...!@BaT#*..y.abcdefghijklm';

const result = solution(new_id);
console.log('결과:', result);

//good code =============================
// function solution(new_id) {
//     const answer = new_id
//         .toLowerCase() // 1
//         .replace(/[^\w-_.]/g, '') // 2
//         .replace(/\.+/g, '.') // 3
//         .replace(/^\.|\.$/g, '') // 4
//         .replace(/^$/, 'a') // 5
//         .slice(0, 15).replace(/\.$/, ''); // 6
//     const len = answer.length;
//     return len > 2 ? answer : answer + answer.charAt(len - 1).repeat(3 - len);
// }
