/*
В функцию передается массив слов, а также искомое слово. Необходимо вернуть
правду, если такое слово можно составить из того паззла что передали внутрь
функции, ложь, если такое слово невозможно составить.
Правила состававления слова: 
1. Направления от букв должны быть влево, вправо, вниз, вверх. Переходить с 
одного конца слова в другой конец запрещено (например в слове 'RFIDTCL' нельзя 
с буквы "R" перейти на букву "L").
2. В слове все символы должны быть уникальны, то есть нельзя из паззла 
использовать одну и ту же букву на том же самом месте.
*/

function findWord(puzzle, word) {
  word.split('').forEach((item, i) => {
    puzzle.forEach((row, idxRow) => {
      if (row.includes(item)) {
        console.log(item);
        row.split('').forEach((letter, idxLetter) => {
        });
      }
    });
  });
}

const puzzle = ['ANGULAR', 'REDNCAE', 'RFIDTCL', 'AGNEGSA', 'YTIRTSP'];

console.log(findWord(puzzle, 'ANGULAR')); // true (первая строка)
console.log(findWord(puzzle, 'REACT')); // true (начиная справа сверху)
console.log(findWord(puzzle, 'ARRAY')); // true (первая колонка)
console.log(findWord(puzzle, 'UNDEFINED')); // true
console.log(findWord(puzzle, 'RED')); // true
console.log(findWord(puzzle, 'STRING')); // true
console.log(findWord(puzzle, 'CLASS')); // true
console.log(findWord(puzzle, 'FUNCTION')); // false
console.log(findWord(puzzle, 'NULL')); // false
