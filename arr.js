const input = {
    ' ': [5],
    d: [10],
    e: [1],
    H: [0],
    l: [2, 3, 9],
    o: [4, 7],
    r: [8],
    w: [6]
  };
  
const buildString = (input) => {
    const result = [];
    for (let i in input) {
        // console.log(input[i]);
        for (let j of input[i]) {
            // console.log(i, 'j = ', j);
            result[j] = i;
        }
    }
    return result.join('') || '';  
};
  
console.log(buildString(''));
  
  
  'Hello world' === buildString(input) && console.log('First Case')
  '' === buildString() && console.log('Second Case')