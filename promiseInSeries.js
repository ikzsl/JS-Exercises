/*
PromisesInSeries
Напишите функцию, которая принимает массив асинхронных функций и
последовательно(следующая начинается, когда закончилась предыдущая) вызывает их, передавая в аргументы результат вызова предыдущей функции.
Пример:
*/
// const firstPromise = () =>
//   new Promise((resolve) => setTimeout(() => resolve(300)), 300);

// const secondPromise = (a) =>
//   new Promise((resolve) => setTimeout(() => resolve(a + 200)), 200);

// const thirdPromise = (b) =>
//   new Promise((resolve) => setTimeout(() => resolve(b ** 2)), 100);

// ///////////////////////////////////////

// const promisesInSeries = (promises) => {
//   return new Promise((resolve) => {
//     const result = 0;

//     promises.forEach(async (promise) => {
//       const res = await promise();
//       console.log(res, 'result');
//       result += res;
//     });

//     resolve(result);
//   });
// };
// ////////////////////////////////////////////

// promisesInSeries([firstPromise, secondPromise, thirdPromise]).then(console.log);
// (300 + 200) ** 2 = 250 000

/*
PromisesInSeries
Напишите функцию, которая принимает массив асинхронных функций и
последовательно(следующая начинается, когда закончилась предыдущая) вызывает их,
 передавая в аргументы результат вызова предыдущей функции.
Пример:
*/
const firstPromise = () =>
  new Promise((resolve) => setTimeout(() => resolve(300)), 300);

const secondPromise = (a) =>
  new Promise((resolve) => setTimeout(() => resolve(a + 200)), 200);

const thirdPromise = (b) =>
  new Promise((resolve) => setTimeout(() => resolve(b ** 2)), 100);

function promisesInSeries(promises) {
  let res = Promise.resolve();
  console.log("res", res)
  
  promises.forEach((item) => {
    res = res.then(item);
  });
  return res;
}

promisesInSeries([firstPromise, secondPromise, thirdPromise]).then(console.log);
// (300 + 200) ** 2 = 250 000

// firstPromise()
//   .then((a) => secondPromise(a))
//   .then((a) => thirdPromise(a))
//   .then(console.log);
