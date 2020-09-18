import fs from 'fs';
import path from 'path';
const { promises: fsp } = fs;

// чтение - запись в файл
// const content = fs.readFile('./myfile', 'utf-8', (_error, result) => {
//   console.log(result);
// });
// fs.writeFileSync('./myfile-copy', content + ' copy');

// Возврат в асинхронном коде
// const readFileWithTrim = (filepath, cb) => {
//   fs.readFile(filepath, 'utf-8', (_error, data) => {
//     cb(null, data.trim());
//   })
// }
// readFileWithTrim('./myfile', (_error, data) => console.log(data));

// Упорядочивание асинхронных операций
// fs.readFile('./first', 'utf-8', (_error1, data1) => //считываем первый файл
//   fs.readFile('./second', 'utf-8', (_error2, data2) => //считываем второй файл
//     fs.writeFile('./new-file', `${data1}\n${data2}`, (_error3) => //записываем оба в файл
//       console.log('done'))
//   )
// );

//прочитать содержимое директории и посмотреть, кто владелец каждого файла (его uid) - синхронно
// const getFileOwners = (dirpath) => {
//   const files = fs.readdirSync(dirpath);
//   return files
//     .map((fname) => [fname, fs.statSync(path.join(dirpath, fname))])
//     .map(([fname, stat]) => ({ filename: fname, owner: stat.uid }));
// };
// console.log(getFileOwners('./'));

//прочитать содержимое директории и посмотреть, кто владелец каждого файла (его uid) - aсинхронно

// const getFileOwners = (dirpath, cb) => {
//   fs.readdir(dirpath, (_error1, filenames) => {
//     const readFileStat = (items, result = []) => {
//       if (items.length === 0) {

//      }
//    }
//  })
// };
// getFileOwners('./', (_error, data) => console.log(data));

// let a = 10;
// const id = setTimeout(() => {
//   a = 20;
//   console.log(111, 'a=' + a, id);
// }, 1000);
// console.log('a=' + a);

//Promise


// Предположим что внутри файла был текст Hexlet
// fsp
//   .readFile('./async/first', 'utf-8')
//     .then(console.log)
//     .then(() => fsp.readFile('./async/second', 'utf-8'))
//     .then(console.log)
//     .then(() => fsp.readFile('./async/new-file', 'utf-8'))
//     .then(console.log)

// Promise.resolve(123)
//   .then((x) => {
//       console.log(x);
//       // throw Error();
//     return x + 1;
//   })
//     .catch((x) => {
//         console.log( x)
//         return x + 2
//     })
//   .then((x) => {
//     console.log(x);
//     return x + 3;  
//   });

