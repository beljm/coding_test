//오픈 채팅방
function solution(record) {
  let map = new Map();
  let log = [];
  for (let i of record) {
    const [action, uid, name] = i.split(' ');
    console.log(action, uid, name);
    if (action === 'Enter') {
      log.push(`${uid}/님이 들어왔습니다.`);
      map.set(uid, name);
    } else if (action === 'Leave') {
      log.push(`${uid}/님이 나갔습니다.`);
    } else {
      map.set(uid, name);
    }
  }
  var answer = [];
  for (let i of log) {
    const [uid, text] = i.split('/');
    answer.push(map.get(uid) + text);
  }

  return answer;
}

let record = [
  'Enter uid1234 Muzi',
  'Enter uid4567 Prodo',
  'Leave uid1234',
  'Enter uid1234 Prodo',
  'Change uid4567 Ryan',
];
//["Prodo님이 들어왔습니다.", "Ryan님이 들어왔습니다.", "Prodo님이 나갔습니다.", "Prodo님이 들어왔습니다."]
const result = solution(record);
console.log('최종 결과', result);
