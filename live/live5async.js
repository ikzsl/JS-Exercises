/*
getUsersInfo
Вам нужно написать функцию, которая получает массив всех пользователей и передает его в функцию коллбэк.
*/
const back = {
  man: { name: 'Alex1', age: 70 },
  hop: { name: 'Alex2', age: 10 },
  tra: { name: 'Alex3', age: 20 },
  jhhh: { name: 'Alex4', age: 11 },
  jjsjs: { name: 'Alex5', age: 19 },
  jggjgj: { name: 'Alex6', age: 31 },
};

function getUsersIds(cb) {
  setTimeout(() => {
    cb(Object.keys(back));
  }, 1000 * Math.random());
}

function getUserInfo(id, cb) {
  setTimeout(() => {
    cb(back[id]);
  }, 1000 * Math.random());
}

/*
  Для получения данных вам предоставлены 2 асинхронные функции  
  getUsersIds - Возвращает массив с идентификаторами пользователей  
  getUserInfo - Возвращает данные пользователя по заданному идентификатору
  */
// getUsersIds((ids) => {
//   console.log(ids); // ['id2', 'id6']
// });

// getUserInfo('someUserId', (userInfo) => {
//   console.log(userInfo); // { name: 'Alex', age: 70 }
// });

/*
  Функция должна вызвать callback, переданный первым агрументом и передать туда массив данных о пользователях.
  Порядок пользователей в результирующем массиве должен соответствовать порядку идентификаторов в массиве из getUsersIds
  */

/**
 * Пример использования
 */

function getUsersInfo(cb) {
  let counter = 0;
  const res = [];
  return getUsersIds((ids) =>
    ids.forEach((a, i) => {
      return getUserInfo(a, (b) => {
        res[i] = b;
        counter += 1;
        if (counter === ids.length) {
          return cb(res);
        }
      });
    })
  );
}

// function getUsersInfo(cb) {
//   const initPromise = Promise.resolve([]);

//   getUsersIds((ids) =>
//     ids.reduce((acc, a, i) => {
//       const newAcc = acc.then(
//         () => getUserInfo(a, (b) => {
//           acc.push(b);
        
//         })
//       );
//       return newAcc;
//     }, initPromise)
//   );
// }

getUsersInfo((users) => {
  console.log(users); // [ { name: 'Alex1', age: 70 }, { name: 'Alex2', age: 10 } ... ]
});

// ((q)=>console.log(q))('erwetwg kajgfh jhgsajaad');
