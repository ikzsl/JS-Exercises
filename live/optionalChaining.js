/*
OptionalChaining
Напишите функцию, которая принимает первым параметром объект,
вторым - цепочку свойств, по которой нужно пройти, чтобы получить значение.
Если какое-то из свойств не найдено - функция возвращает undefined.
Пример:
*/

const optionalChaining = (obj, valuesString) =>
  valuesString.split('.').reduce(
    (acc, item) => {
      acc = acc ? acc[item] : acc;
      return acc;
    },
    { ...obj }
  );

// с помощью рекурсии

// const optionalChaining = (obj, valuesString) => {
//   const [item, ...values] = valuesString.split('.');
//   const valuesStr = values.join('.');
//   const subObj = obj[item];
//   if (!values.length || !subObj) {
//     console.log(subObj);
//     return subObj;
//   } else optionalChaining(subObj, valuesStr);
// };

module.exports = optionalChaining;

function getEvenChars(str) {
  if (100 < str.length || str.length <= 1) {
    return 'неверная строка';
  }

  return str.split('').filter((item, idx) => {
    if (idx % 2 === 0) {
      return item;
    }
  });
}

console.log(getEvenChars('abcdefghijklm')); // ["b", "d", "f", "h", "j", "l"]
console.log(getEvenChars('a')); // "неверная строка"
