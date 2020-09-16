/*
Flat
Реализуйте функцию flat, которая преобразовывает многомерный массив
в одномерный. Первым аргументом функция должна принимать массив, а
вторым - глубину вложенности, до которой функция будет разворачивать
массив. Если глубина <= 0, то возвращается копия массива с исходной
вложенностью. Чтобы развернуть массив полностью, в функцию может быть
передано значение Infinity. Второй аргумент гарантированно будет
числом (и не NaN).
Для более подробной информации можете обратиться к документации по
Array.flat. Ваша функция должна работать идентично.
Функция всегда должна возвращать новый массив и не должна
мутировать исходный.
Пример:
*/
const data = [
  [[1, 2, [3, [6, 3, 3, 3]]], 4, 5],
  [6, 7],
];

const flat = (arr, depth) => {
  if (depth === 0) {
    return [...arr];
  }

  let res = [...arr];

  if (depth === Infinity && res.some((item) => item instanceof Array)) {
    res = arr.reduce((acc, val) => acc.concat(val), []);
    return flat(res, Infinity);
  }

  if (depth > 0 && depth !== Infinity) {
    res = arr.reduce((acc, val) => acc.concat(val), []);
    return flat(res, depth - 1);
  }



  return res;


};

// const flat = (arr, count) => {
// const arrayFlatted = [];
// if (count === Infinity) {
// arr.forEach((item) => item instanceof Array ? flat(item, Infinity) : arrayFlatted.push(item));
// return arr.reduce((acc, item) => {return item instanceof Array ? flat(item, Infinity) : [...acc, item]}, []);
// }
// return arrayFlatted;
// };

console.log(flat(data, 1)); // [1, 2, 3, 4, 5, 6, 7]
console.log(flat(data, Infinity)); // [1, 2, 3, 4, 5, 6, 7]
console.log(flat(data, 3)); // [[1, 2, 3], 4, 5, 6, 7];
console.log(flat(data, 2)); // [1, 2, 3, 4, 5, 6, 7];
console.log(flat(data, 0)); // [[[1, 2, [3, [6, 3, 3, 3]]], 4, 5],[6, 7],];

console.log('_____________________________________________________');

/*
Реализуйте функцию flat, которая преобразовывает многомерный массив
в одномерный. Первым аргументом функция должна принимать массив, а
вторым - глубину вложенности, до которой функция будет разворачивать
массив. Если глубина <= 0, то возвращается копия массива с исходной
вложенностью. Чтобы развернуть массив полностью, в функцию может быть
передано значение Infinity. Второй аргумент гарантированно будет
числом (и не NaN).
Для более подробной информации можете обратиться к документации по
Array.flat. Ваша функция должна работать идентично.
Функция всегда должна возвращать новый массив и не должна
мутировать исходный.
Пример:
*/
const data = [
  [[1, 2, 3], 4, 5],
  [6, 7], 
]
function flat(arr) {
  // YOUR CODE HERE
}
console.log(
  flat(data, Infinity)
); // [1, 2, 3, 4, 5, 6, 7]
console.log(
  flat(data, 1)
); // [[1, 2, 3], 4, 5, 6, 7];
console.log(
  flat(data, 2)
); // [1, 2, 3, 4, 5, 6, 7];
