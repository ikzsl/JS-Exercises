// const product = {
//   price: 3990,
//   options: [
//     {
//       id: 1,
//       title: '256ГБ',
//       price: 450,
//     },
//     {
//       id: 2,
//       title: '512ГБ',
//       price: 990,
//     },
//   ],
//   info: {},
// };

// const { options: [item1, { price }] } = product;

// console.log(price);

const arr = [3, 6, 8, 3, 6, 8, 1, 5, 6, 7, 9];
const sort = arr => [...arr].sort((a, b) => a - b);
sort(arr);

console.log(sort(arr));
