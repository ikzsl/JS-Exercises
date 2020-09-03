const findDigit = (num, nth) => {
  if (nth <= 0) {
    return -1;
  }
  //   if (num <= 0) {
  //     num = -num;
  //   }

  //   num = Math.sqrt(num * num);
  const numsArray = Math.abs(num)
    .toString()
    .split('')
    .map((a) => +a);

  return numsArray[numsArray.length - nth] || 0;
};

module.exports = findDigit;
