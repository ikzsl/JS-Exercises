import fs from 'fs';

fs.readFile('./directory', 'utf-8', (err, data) => {
  // Любые ошибки чтения файла: доступ, отсутствие файла, директория вместо файла
  // null неявно приводится к false, поэтому достаточно такой проверки, 
  // любой другой ответ трактуется как true
  if (err) {
    console.log('error!');
    return; // guard expression
  }

  console.log('finished!')
});

