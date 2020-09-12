// function print(a) {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         console.log(a);
//         resolve();
//       }, Math.random() * 5);
//     });
//   }
//   const letters = async (count) => {
//     for (let i = 65; i < count + 65; i += 1) {
//       await print(String.fromCharCode(i));
//     }
//   };
//   letters(17);

// написать функцию, которая возвращает сумму
// переданного числового аргумента и предыдущий результат этой функции
// если функция не вызывалась предыдущим результатом считаем 1
// Пример
// console.log(printNumber(2)); // => 3
// console.log(printNumber(5)); // => 8

let f = (x) =>  x;

const makeCaching = (f) => {
  let cache = {};

  return  (x) => {
    if (!(x in cache)) {
      cache[x] = f(x);
    }
    return cache[x];
  };
}

f = makeCaching(f);

// let a = f(1);
// let b = f(1);
// console.log(a == b); // true (значение закешировано)

// b = f(2);
// console.log(a, b); // false, другой аргумент => другое значение



console.log(f(2), f(3), f(4)); // false, другой аргумент => другое значение

// console.log(printNumber(1));
// console.log(printNumber(3));
// console.log(printNumber(1));
// console.log(printNumber(1));
