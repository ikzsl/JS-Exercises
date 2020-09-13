// написать функцию, которая выводит в консоль английский алфавит до заданной буквы
// для вывода в консоль использовать функцию print

function print(a) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(a);
      resolve();
    }, Math.random() * 5);
  });
}
const letters = async (count) => {
  for (let i = 65; i < count + 65; i += 1) {
    await print(String.fromCharCode(i));
  }
};
letters(17);
