// 크레인 인형뽑기
function solution(board, moves) {
  let bucket = [];
  var answer = 0;
  //크레인 움직여 뽑기
  for (let i of moves) {
    // 뽑기 및 중복 삭제
    console.log(i, 'test==============');
    for (let j = 0; j < board.length; j++) {
      if (board[j][i - 1] !== 0) {
        console.log(
          '마지막 데이터 새로운 데이터',
          bucket[bucket.length - 1],
          board[j][i - 1],
        );
        if (bucket.length === 0) {
          bucket.push(board[j][i - 1]);
          board[j][i - 1] = 0;
        } else {
          bucket[bucket.length - 1] === board[j][i - 1]
            ? (bucket.pop(), answer++)
            : bucket.push(board[j][i - 1]);
          board[j][i - 1] = 0;
        }
        break;
      }
    }
    console.log(board[0]);
    console.log(board[1]);
    console.log(board[2]);
    console.log(board[3]);
    console.log(board[4]);
    console.log('버켓', bucket, answer);
  }
  return answer * 2;
}

let board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];
let moves = [1, 5, 3, 5, 1, 2, 1, 4];
// 4

const result = solution(board, moves);
console.log('출력:', result);
