var arrayTest = ['maria', 'melody', 'mask', 'eimi', 'fukada', 'haiten'];
// var arrayTest = [3, 4, 12, 53, 643, 354];

// arrayTest.at(3); // => 'eimi'​

// arrayTest.concat(['tokuda', 'harriet', 'cookie']);​

// // => ['maria', 'melody', 'mask', 'eimi', 'fukada', 'haiten', 'tokuda', 'harriet', 'cookie']​

// arrayTest.every((item) => item.length <= 6); // => true​

// arrayTest.fill('wibu', 2, 5); // => ['maria', 'melody', 'wibu', 'wibu', 'wibu', 'wibu']​

// arrayTest.fill('wibu', 2, -1); // => ['maria', 'melody', 'wibu', 'wibu', 'wibu', 'wibu']​

// arrayTest.filter((item) => (item.length === 4));​

// // => ['mask', 'eimi']​

// const a3 = arrayTest.map((item) => item + ' sorry thiếu map');
// console.log('arrayTest a3', a3);

// const a4 = arrayTest.reduce((accumulateItems, currentItem) => {
//   console.log('arrayTest.reduce ~ accumulateItems', { accumulateItems, currentItem });
//   return accumulateItems.concat([`${currentItem} is actor`]);
// }, []);
// console.log('arrayTest', arrayTest);
// const a4 = arrayTest.sort();
// console.log('arrayTest a4', a4);

// const ba = [4, 2, 5, 1, 3];
// console.log('ba 1', ba);

// console.log('arrayTest 1', arrayTest);
// arrayTest.sort((a, b) => {
//   console.log('a,b', { a, b });
//   if (a === 'fukada') return -1;
//   return 1;
// });
// console.log('ba 2', ba);
// console.log('arrayTest 2', arrayTest);
// arrayTest.find((item) => item.length === 8); // => unđefined​

// arrayTest.findIndex((item) => item.length === 4); // => 2​

// arrayTest.findIndex((item) => item.length === 8); // => -1​

// arrayTest.findLast((item) => item.length === 4); // => 'eimi'​

// arrayTest.findLastIndex((item) => item.length === 4); // => 3​
