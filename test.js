const obj = {
  a: { b: { c: 4, d: 2, e: 3 }, f: { g: 4, h: 5, c: 4, d: 2, e: 3 } },
  i: 6,
  j: 7,
  c: 7,
  d: 2,
  e: 3,
};

const flatter = (objToFlat) => {
  const flatObject = {};
  const recurFn = (obj) => {
    for (let prop in obj) {
      if (typeof obj[prop] === 'object') {
        recurFn(obj[prop]);
      } else if (flatObject.hasOwnProperty(prop)) {
        flatObject[prop] = flatObject[prop] + obj[prop];
      } else {
        flatObject[prop] = obj[prop];
      }
    }
  };
  recurFn(objToFlat);
  return flatObject;
};

console.log(flatter(obj));
