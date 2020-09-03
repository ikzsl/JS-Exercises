const descendingOrder = (n) => {
  return Number(n
    .toString()
    .split('')
    .map((a) => +a)
    .sort((a, b) => b - a)
    .join(''));
}

module.exports = descendingOrder;

// ----------- slice ---------------
// var txt = "I can eat bananas all day";
// var x = txt.slice(10, 17);
// console.log(x)
//--------------------------------------

// сумма квадратных корней
// для всех чётных чисел целочисленного массива
// const sqSum = (arr) => arr
//     .filter(a => !(a % 2))
//     .map(a => Math.sqrt(a))
//     .reduce((a, b) => a + b, 0);
// console.log( sqSum([1, 4, 3, 0, 4, 5, 4]))

// ------fibonacci---------
// Напишите функцию, которая возвращает n - ую запись в последовательности,
// где n — это число, которое вы передаёте в качестве аргумента функции.
// const fibonacci = (num) => {
//     const fib = [0, 1];
//     while (fib.length <= num) {
//         fib.push(fib[fib.length-1]+fib[fib.length - 2]);
//     }
//     return fib[num];
// }

// рекурсивно
// const fibonacci = (num) => {
//   if (num < 2) {
//     return num;
//   }
//   return fibonacci(num - 1) + fibonacci(num - 2);
// };

// console.log(fibonacci(3));
