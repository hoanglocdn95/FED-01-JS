const testPromise = (time) => {
  return new Promise((resolve) =>
    setTimeout(() => resolve(`time: ${time}`), time)
  );
};

const testAsyncAwait = async () => {
  const a = await testPromise(1000);

  const b = await testPromise(2000);

  const c = await testPromise(3000);

  const d = await testPromise(4000);

  return [a, b, c, d];
};

testAsyncAwait().then((res) => {
  console.log(res);
});
