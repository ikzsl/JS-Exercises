// 1. Рассчитать сумму натуральных чисел до n

// ----рекурсивно------
// const sum = (n) => {
//     if (n === 0) return 0;
//     return sum(n - 1) + n;
// }

// ----итеративно------
// const sum = (n) => {
//   if (n === 0) return 0;
//   let sum = 0;
//   while (n > 0) {
//     sum += n;
//     n -= 1;
//   }
//   return sum;
// };

// console.log(sum(10));
/////////////////////////////////

// 2. Рассчитать факториал из n. Напоминание! = 1 * 2 * ... * n

// const factorial = (n) => {
//   if (n <= 1) {
//     return 1;
//   }
//   return n * factorial(n - 1);
// };

// const factorial = (n) => {
//   let res = 1;
//   while (n >= 1) {
//     res *= n;
//     n -= 1;
//   }
//   return res;
// };

// console.log(factorial(5));

// Fibonacci

// const fibo = (n) => {
//   if (n === 0) {
//     return 0;
//   }
//   if (n === 1) {
//     return 1;
//   }

//   return fibo(n - 1) + fibo(n - 2);
// };

// const fibo = (n) => {
//     if (n < 2) {
//         return n;
//     }
//   let n0 = 0;
//   let n1 = 1;
//   let res;
//     while (n > 1) {
//         res = n0 + n1;
//         n0 = n1;
//         n1 = res;
//         n -= 1;
//     }
//     return res;
// };

// console.log(fibo(3));

// Рассчитать сумму элементов массива чисел

// const sum = (arr) => {
//   let res;
//   if (!arr.length) {
//     return 0;
//   }
//   [res, ...subArr] = arr;

//   return res + sum(subArr);
// };

// const sum = (arr) => {
//   let res = 0;
//   while (arr.length) {
//     res += arr.pop();
//   }
//   return res;
// };


const sum = (arr) => arr.reduce((acc, x)=> acc + x);

console.log('sum', sum([3, 5, 1, 66, 32, -1, 0]));
