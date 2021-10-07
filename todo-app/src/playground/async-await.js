const add = (a, b) => new Promise((resolve, reject) => {
  setTimeout(() => {
    if (a < 0 || b < 0) {
      return reject('Numbers must be positive');
    }
    resolve(a + b);
  }, 3000);
});
// PROMISES
const data1 = add(4, 5);

data1.then((sum) => add(sum, 10)).then((sum2) => add(sum2, 20)).then((sum3) => {
  console.log('promise', sum3);
}).catch((e) => {
  console.log(e);
});

// AYNC-AWAIT
const data2 = async () => {
  const sum = await add(4, 5);
  const sum2 = await add(sum, 10);
  const sum3 = await add(sum2, 20);
  return sum3;
};
data2().then((result) => {
  console.log('async-await', result);
}).catch((e) => {
  console.log(e);
});
