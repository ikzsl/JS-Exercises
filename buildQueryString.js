const bqs = (obj) => {
    const keys = Object.keys(obj);
    
    return keys.sort().reduce((acc,key) => acc + `${key}=${obj[key]}&`, '').slice(0,-1);
} 


let a = bqs({ per: 10, page: 1 });
// page=1&per=10
let b = bqs({ param: 'all', param1: true });
// param=all&param1=true

console.log(a);
console.log(b);
console.log('-------------------------------------');