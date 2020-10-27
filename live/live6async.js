/*
WaitForChanges
Напишите функцию, которая принимает асинхронную функцию и вызывает ее раз в секунду,
и если ответ изменился(сравнивать с помощью ===) - возвращает новое значение.
Функция принимает первым параметром функцию, которая не принимает агрументов и возвращает промис.
Пример:
*/
let server = 1;

function subscribeToServer() {
  return new Promise((resolve) =>
    setTimeout(() => resolve(server), Math.random() * 1000)
  );
}

function waitForChanges(subscribe) {

}

setTimeout(() => (server = 10), 4000);

waitForChanges(subscribeToServer).then(() => console.log('Data was updated'));
// Должна вывести в консоль Data was updated через 10 секунд.







