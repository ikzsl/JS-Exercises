const fetch = require('node-fetch');
// const promise = new Promise((resolve, reject) => {
//     throw new Error('some error');
//   setTimeout(() => {
//     if (true) {
//       resolve('promise complited');
//     } else {
//       reject();
//     }
//   }, 1000);
// });

// promise.then((data) => console.log(data)).catch((error) => console.log(error));

fetch('https://jsonplaceholder.typicode.com/posts/')
  .then((res) => res.json())
  .then((data) => console.log(data[0].title))
  .catch(() => console.log('some error'));

