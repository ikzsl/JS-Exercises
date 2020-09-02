// ----------- slice ---------------
// var txt = "I can eat bananas all day";
// var x = txt.slice(10, 17);
// console.log(x)
//--------------------------------------

// сумма квадратных корней
// для всех чётных чисел целочисленного массива

const sqSum = (arr) => arr
    .filter(a => !(a % 2))
    .map(a => Math.sqrt(a))
    .reduce((a, b) => a + b, 0);
    
console.log( sqSum([1, 4, 3, 0, 4, 5, 4]))
