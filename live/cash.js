// написать функцию, которая возвращает сумму
// переданного числового аргумента и предыдущий результат этой функции
// если функция не вызывалась предыдущим результатом считаем 1
// Пример
// console.log(printNumber(2)); // => 3
// console.log(printNumber(5)); // => 8

// const makeCaching = (f) => {
//   var cache = 1;
//   return (x) => {
//     cache = f(x) + cache;
//     return cache;
//   };
// };

// const printNumber = makeCaching(x => x);
// console.log(printNumber(2), printNumber(5), printNumber(1));

const sum = (num) => {
  let sum = num;
  console.log(sum);

  const func = (arg) => {
    sum += arg;
    console.log(sum);
    return func;
  };
  return func;
};

sum(1)(2)(3);
