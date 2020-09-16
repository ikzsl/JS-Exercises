/*
getUsersInfo
Вам нужно написать функцию, которая получает массив всех пользователей и передает его в функцию коллбэк.
*/
const back = {
    1: { name: 'Alex1', age: 70 },
    2: { name: 'Alex2', age: 10 },
    3: { name: 'Alex3', age: 20 },
    4: { name: 'Alex4', age: 11 },
    5: { name: 'Alex5', age: 19 },
    6: { name: 'Alex6', age: 31 },
  };
  
  function getUsersIds(cb) {
    setTimeout(() => {
      cb(Object.keys(back))
    }, 1000 * Math.random());
  }
  
  function getUserInfo(id, cb) {
    setTimeout(() => {
      cb(back[id]);
    }, 1000 * Math.random())
  }
  
  /*
  Для получения данных вам предоставлены 2 асинхронные функции
  
  
  getUsersIds - Возвращает массив с идентификаторами пользователей
  
  getUserInfo - Возвращает данные пользователя по заданному идентификатору
  */
  getUsersIds((ids) => {
    console.log(ids); // ['id2', 'id6']
  });
  
  getUserInfo('someUserId', (userInfo) => {
    console.log(userInfo); // { name: 'Alex', age: 70 }
  });
  /*
  Функция должна вызвать callback, переданный первым агрументом и передать туда массив данных о пользователях.
  Порядок пользователей в результирующем массиве должен соответствовать порядку идентификаторов в массиве из getUsersIds
  */
  
  function getUsersInfo(cb) {
    // YOUR CODE HERE
  }
  
  /**
   * Пример использования
   */
  getUsersInfo((users) => {
    console.log(users); // [ { name: 'Alex', age: 70 }, { name: 'Elon' } ]
  });
  