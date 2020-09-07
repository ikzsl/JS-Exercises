/*
OptionalChaining
Напишите функцию, которая принимает первым параметром объект,
вторым - цепочку свойств, по которой нужно пройти, чтобы получить значение.
Если какое-то из свойств не найдено - функция возвращает undefined.
Пример:
*/

const optionalChaining = (obj, valuesString) => {
  const result = valuesString.split('.').reduce((acc, item) => {    
    acc = acc ? acc[item] : acc;
    return acc;   
  }, { ...obj }); 
  return result;
};

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
