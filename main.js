function main(num) {
  let a = 0,
    b = 1,
    i = 0;
  let result = 0;
  for (i; i < num; i++) {
    result = a + b;
    a = b;
    b = result;
  }
  return result;
}

module.exports = main;
