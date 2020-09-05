// const optionalChaining = (obj, valuesString) => {
//   const [item, ...values] = valuesString.split('.');
//   const valuesStr = values.join('.');
//   const subObj = obj[item];
//   if (!values.length || !subObj) {
//     console.log(subObj);
//     return subObj;
//   } else optionalChaining(subObj, valuesStr);
// };

/*
OptionalChaining
Напишите функцию, которая принимает первым параметром объект,
вторым - цепочку свойств, по которой нужно пройти, чтобы получить значение.
Если какое-то из свойств не найдено - функция возвращает undefined.
Пример:
*/

const obj = {
  a: {
    b: {
      c: {
        d: 'Привет!',
      },
    },
  },
};

const optionalChaining = (obj, valuesString) => {
  const [item, ...values] = valuesString.split('.');
  const valuesStr = values.join('.');
  const subObj = obj[item];
  if (!values.length || !subObj) {
    console.log(subObj);
    return subObj;
  } else optionalChaining(subObj, valuesStr);
};

optionalChaining(obj, 'a.b.c.d'); // Привет
optionalChaining(obj, 'a.b.c'); // { d: 'Привет' }
optionalChaining(obj, 'a.b.c.d.e'); // undefined
optionalChaining(obj, 'a.c.d'); // undefined
optionalChaining(obj, 'b.d.a'); // undefined

const database = {
  english: 'Welcome',
  czech: 'Vitejte',
  danish: 'Velkomst',
  dutch: 'Welkom',
  estonian: 'Tere tulemast',
  finnish: 'Tervetuloa',
  flemish: 'Welgekomen',
  french: 'Bienvenue',
  german: 'Willkommen',
  irish: 'Failte',
  italian: 'Benvenuto',
  latvian: 'Gaidits',
  lithuanian: 'Laukiamas',
  polish: 'Witamy',
  spanish: 'Bienvenido',
  swedish: 'Valkommen',
  welsh: 'Croeso',
};
