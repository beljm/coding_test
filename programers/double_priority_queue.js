//이중 우선순위 큐
function solution(operations) {
    let dpq = [];
    for(let i of operations){
        let ask = i[0]
        if(ask === 'I'){
            dpq.push(Number(i.slice(2)))
            dpq.sort((a,b) => b-a)
        }else{
            if(dpq.length > 0){
                i[2] === '-' ? dpq.pop() : dpq = dpq.slice(1);
            }
        }
    }
    return dpq.length > 0 ? [dpq[0], dpq[dpq.length-1]] : [0, 0]
}

let operations = ["I -45", "I 653", "D 1", "I -642", "I 45", "I 97", "D 1", "D -1", "I 333"];


// ["I 16", "I -5643", "D -1", "D 1", "D 1", "I 123", "D -1"]	[0,0]
// ["I -45", "I 653", "D 1", "I -642", "I 45", "I 97", "D 1", "D -1", "I 333"]	[333, -45]

const result = solution(operations);
console.log('출력:', result);
