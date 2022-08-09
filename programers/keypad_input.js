//키패드 누르기

function solution(numbers, hand) {
  var answer = '';
  const keyPadCharList = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '*',
    '0',
    '#',
  ];
  const keyPadLocationList = [
    [0, 0],
    [0, 1],
    [0, 2],
    [1, 0],
    [1, 1],
    [1, 2],
    [2, 0],
    [2, 1],
    [2, 2],
    [3, 0],
    [3, 1],
    [3, 2],
  ];
  const leftBtn = [1, 4, 7];
  const rightBtn = [3, 6, 9];
  const keyPadMap = new Map();
  // 키패드 맵 생성
  for (let i = 0; i < keyPadCharList.length; i++) {
    keyPadMap.set(keyPadCharList[i], keyPadLocationList[i]);
  }
  let curLeft = '*';
  let curRight = '#';
  //거리 가까운 버튼 누르기
  for (let i of numbers) {
    //leftBtn 또는 rightBtn이면 바로 누르기
    console.log(i, '=========================');
    console.log(curLeft, curRight);
    if (leftBtn.includes(i)) {
      answer += 'L';
      curLeft = i;
      continue;
    }
    if (rightBtn.includes(i)) {
      answer += 'R';
      curRight = i;
      continue;
    }
    const leftLen = calDistance(curLeft, i, keyPadMap);
    const rightLen = calDistance(curRight, i, keyPadMap);
    console.log(leftLen, rightLen);
    if (leftLen < rightLen) {
      answer += 'L';
      curLeft = i;
      continue;
    } else if (leftLen > rightLen) {
      answer += 'R';
      curRight = i;
      continue;
    } else {
      hand === 'right'
        ? ((answer += 'R'), (curRight = i))
        : ((answer += 'L'), (curLeft = i));
    }
  }

  return answer;
}

//거리 측정 함수
const calDistance = (handChar, targetChar, keyPadMap) => {
  const handLocation = keyPadMap.get(String(handChar));
  const tagetLocation = keyPadMap.get(String(targetChar));

  let vLen = handLocation[0] - tagetLocation[0];
  let hLen = handLocation[1] - tagetLocation[1];
  return Math.abs(vLen) + Math.abs(hLen);
};

let numbers = [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5];
let hand = 'right';
//"LRLLLRLLRRL"

const result = solution(numbers, hand);
console.log('출력:', result);

//처음에 대각선 거리를 생각했는데 손은 좌우로만 움직였다....
// 유클리드 거리: 대각선 이동
// 맨하튼 거리: 좌우로만 이동
