//캐쉬
function solution(cacheSize, cities) {
    let cache = [];
    let count = 0;
    if(cacheSize===0){
        return cities.length * 5;
    }
    for(let i of cities){
        let lowerI = i.toLowerCase();
        if(cache.includes(lowerI)){
            let dataIndex = cache.indexOf(lowerI);
            let temp = cache[dataIndex];
            cache.splice(dataIndex, 1);
            cache.push(temp);
            count += 1;
        }else{
            if(cache.length >= cacheSize){
                cache = cache.slice(1);  
            }
            cache.push(lowerI); 
            count += 5;
        }
        
    }
    return count;
}
let cacheSize = 3;
let cities = ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Jeju", "Pangyo", "Seoul", "NewYork", "LA"];
//50

let result = solution(cacheSize, cities);
console.log('출력:', result);
