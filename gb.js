/*
moveToStart
Реализуйте функцию moveToStart, которая принимает массив и число n.
Функция должна переставить n элементов массива из конца в начало.
Если второй аргумент больше или равен
длине массива, то должен быть возвращен новый массив, порядок
элементов которого совпадает с изначальным.
Функция должна возвращать новый массив, а не мутировать старый.
Примеры:
*/
// function moveToStart(arr, count) {
//     if (arr.length <= count) {
//         return [...arr];
//     }
//     const arr2 = arr.slice(-count);
//     console.log("arr2", arr2)
//     const arr1 = arr.slice(0, arr.length - count);
//     console.log("arr1", arr1)
//     const result = [...arr2, ...arr1]
//     return result;
//   }
  
//   console.log(moveToStart([1, 2, 3, 4, 5], 4)); // [3, 4, 5, 1, 2]
  
//   console.log(moveToStart([1, 2, 3, 4, 5], 3)); // [3, 4, 5, 1, 2]
  
// console.log(moveToStart([1, 2, 3, 4, 5], 10)); // [1, 2, 3, 4, 5]

// console.log(moveToStart([1, 2, 3, 4, 5, 9, 8, 4], 2)); // [1, 2, 3, 4, 5]