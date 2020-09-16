/*
FlatObject
Напишите функцию, которая возвращает новый объект,
в котором все элементы вложенных объектов были рекурсивно "подняты"(подняты = из вложенного объекта перемещены в текущий) до первого уровня.
Пример:
*/
const obj = { a: { b: { c: 1, d: 2, e: 3 }, f: { g: 4, h: 5 } }, i: 6, j: 7 };

// НАДО СДЕЛАТЬ ТО ЖЕ САМОЕ, что и во flatArray, только для объектов
//
// function flatObject(obj) {
//     return Object.keys(obj).reduce((acc, key) => {

//     if (obj[key] instanceof Object) {
//       console.log(obj[key]);
//       return flatObject(obj[key]);
//     }

//     return { ...acc, [key]: obj[key] };
//   }, {});
// }

const flatObject = (obj) => {
  const result = {};
  const flat = (obj) => {
    return Object.entries(obj).map(([key, value]) => {
      if (value instanceof Object) {
        return flat(value);
      }
      result[key] = value;
    });
  };
  flat(obj);
  return result;
};

console.log(flatObject(obj)); // { c: 1, d: 2, e: 3, g: 4, h: 5, i: 6, j: 7 };
/*
Гарантируется, что значением может быть только строка / число и что все ключи последнего уровня уникальны.
*/
// ////////////////////////////////////
function flatObject(o) {
  let obj1 = {};
  for(let prop in o) {
      if(typeof(o[prop]) === 'object') {
        obj1 = {...obj1, ...flatObject(o[prop])};
      } else {
          obj1 =  {...obj1, [prop]:o[prop]};
      }
  }
  return obj1;
}
//////////////////////////////////////////////