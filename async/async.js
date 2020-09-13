import fs from 'fs';
import path from 'path';

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

const getFileOwners = (dirpath, cb) => {
  fs.readdir(dirpath, (_error1, filenames) => {
    const readFileStat = (items, result = []) => {
      if (items.length === 0) {
       
     }
   }
 })
};
getFileOwners('./', (_error, data) => console.log(data));
