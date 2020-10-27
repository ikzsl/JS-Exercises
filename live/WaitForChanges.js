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
// НУЖНА ПОМОЩЬ?
//Пока все понятно
function waitForChanges(subscribe) {
  return new Promise((resolve) => {
    let cash = 1 ;
      setInterval(() => {
        console.log('tick');
      subscribe().then((a) => {
        if (cash !== a) {
          console.log('changed', cash, a);
          cash = a;
          resolve(cash);
        }
      });
      // НУЖНО РЕЗОЛВИТЬ ТОЛЬКО КОГДА ОТЛИЧАЕТСЯ ОТ ПРЕДЫДУЩЕГО ЗНАЧЕНИЯ
    }, 1000);
  });
}
setTimeout(() => (server = 10), 10000);

waitForChanges(subscribeToServer).then((data) => console.log(`Data was updated - ${data}`));
// Должна вывести в консоль Data was updated через 10 секунд.
