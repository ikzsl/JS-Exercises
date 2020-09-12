const makeCaching = (f) => {
  var cache = 1;
  return (x) => {
    cache = f(x) + cache;
    return cache;
  };
};

const printNumber = makeCaching(x => x);
console.log(printNumber(2), printNumber(5), printNumber(1));
