// const obj = { asd: 22 };
// const a = Object.create(null);
// console.log(a);

// let People = function (name) {
//   this.name = name;
// };

// People.prototype.getAbility = function () {
//   return this.name + ' can to walk';
// };

// let man = new People('Rick');
// let man2 = new People('Sam');

// console.log('man', man.name);
// console.log('man', man.getAbility());
// console.log('man2', man2.getAbility());

// console.log(Object.getOwnPropertyNames(People.prototype));
// const mike = {
//   friends: [
//     {
//       name: 'Anna',
//       avatar: {
//         url: 'urllllll',
//       },
//     },
//   ],
// };

// let res;

// if (!mike.friends[0] || !mike.friends[0].avatar.url) {
//   res = 'noDataUrl';
// } else {
//   res =  mike.friends[0].avatar.url;
// }
// console.log('result', res);

// const a = {};
// const b = { key: 'b' };
// const c = { key: 'c' };

// a[b] = 'hype';
// a[c] = 'antihype';

// console.log('a[b]', a[b]);

// new Promise(function (res, rej) {
//     throw new Error('errrrrrr')
// })

// const arrayWithZeros = [0, 10, 0, 1, 2, 3, 0, 0, 4, 0];

// const f_ckZeros = (arr) => arr.sort((a, b) => b - 1);

// console.log(Math.max(...arrayWithZeros));

// for (let i = 0; i < 10; i++) {
//     setTimeout(function () {
//         console.log(i);
//     }, 1000)
// }

// let a = 1;

// function foo() {
//     console.log(a);
// }

// function foo2() {
//    let a = 2;
//     foo();
// }

// foo2();

// var userService = {
//   currentFilter: 'active',
//   users: [{ name: 'Alex', status: 'active' }],

//   getFilteredUsers: function () {
//     return this.users.filter((user) => user.status === this.currentFilter);
//   },
// };

// console.log( userService.getFilteredUsers());

// Promise.resolve(12)
//   .then((p) => p * 2)
//   .then((p) => Promise.reject(p / 2))
//   .catch((p) => p + 2)
//   .catch((p) => p + 2)
//   .then((p) => {
//     console.log(p);
//   });

var findLatestWeight = function (weights, i = weights.length - 1) {
  const cur = weights.length - 1 === i;

  if (i === 0) return weights[0];

  weights.sort((a, b) => a - b);
  weights[i - 1] =
    weights[i] === weights[i - 1] ? 0 : weights[i] - weights[i - 1];

  return findLatestWeight(weights, i - 1);
};

console.time('Execution time took');
let a1 = findLatestWeight([
  2,
  2,
  2,
  3,
  4,
  5,
  3,
  5,
  7,
  3,
  4,
  154,
  7,
  4,
  1,
  8,
  1,
]);
console.timeEnd('Execution time took');
console.log("a1", a1)
