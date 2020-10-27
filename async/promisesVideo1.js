const WRING_OUT_TIME = 100;
const SQUATTING_TIME = 100;

function wringOut(count) {
  return new Promise((resolve, reject) => {
    if (count > 100) {
      reject(new Error('mnogo -11111111111111111'));
    }
    setTimeout(() => {
      resolve(count);
    }, count * WRING_OUT_TIME);
  });
}

function squattingOut(count) {
  return new Promise((resolve, reject) => {
    if (count > 1000) {
      reject(new Error('mnogo-22222222222222222222'));
    }
    setTimeout(() => {
      resolve(count);
    }, count * SQUATTING_TIME);
  });
}

// console.log('nachali otjimanija');
// wringOut(10)
//   .then((a) => {
//     console.log(`отжались ${a} раз`);
//     return squattingOut(2000);
//   })
//   .then((a) => console.log(`присели ${a} раз`))
//   .catch((err) => console.log(err.message));

async function myTraining() {
  try {
    console.log('начали отжимания');
    const a = await wringOut(10);
    console.log(`отжались ${a} раз`);

    console.log('начали приседания');
    const b = await squattingOut(20);
      console.log(`присели ${b} раз`);
      return true;
  } catch (err) {
      console.log(err.message);
      return false;
  }
}

myTraining().then(console.log);
