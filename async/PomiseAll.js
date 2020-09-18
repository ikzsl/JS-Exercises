/*
PromiseAll
Напишите асинхронную функцию, которая принимает массив промисов и
возвращает массив результатов вызова этих промисов.
Пример:
*/

const firstPromise = new Promise((resolve) =>
  setTimeout(() => resolve(300), 300)
);

const secondPromise = new Promise((resolve) =>
  setTimeout(() => resolve(200), 200)
);

const thirdPromise = new Promise((resolve) =>
  setTimeout(() => resolve(100), 100)
);

// const promiseAll = (promises) => {
//   return Promise.all(promises);
// }

const promiseAll = (promises) => {
  let acc = Promise.resolve();
  const res = [];
  promises.forEach((pr, i) => {
    acc
      .then(() => pr)
      .then((a) => {
        res[i] = a;
      });
  });
  console.log(res, acc);
  return res;
};

// promiseAll([firstPromise, secondPromise, thirdPromise]).then(console.log);
// [300, 200, 100]

const all = (promises) => {
  return new Promise((resolve) => {
    const arr = [];
    let pending = promises.length; 

    for (let i = 0; i < promises.length; i += 1) {
      promises[i].then((result) => {
        arr[i] = result;
        pending -= 1;
        if (pending === 0) resolve(arr);
      });
    }
  });
};

all([firstPromise, secondPromise, thirdPromise]).then(console.log);

// // Testing
// function soon(val) {
//   return new Promise(function (success) {
//     setTimeout(function () {
//       success(val);
//     }, Math.random() * 500);
//   });
// }
// all([soon(1), soon(2), soon(3)]).then(function (array) {
//   console.log('This should be [1, 2, 3]:', array);
// });
// // => [1, 2, 3]
