// const numberA = (function () {
//   let abc = 3;
//   return abc;
// })();
// console.log('numberA ~ numberA', numberA);
// var i;
let i;
for (i = 0; i < 5; i++) {
  setTimeout(() => console.log('out 1', i), 1);
  // ((a) => {
  //   let i = 10;
  //   setTimeout(() => console.log('IIFE', a), 1000);
  // })(i);
  // console.log('out 2', i);
}

// const calculate = (a, b) => {
//   const checkIsNumber = (num) => {
//     if (typeof num === 'number') return true;
//     return false;
//   };
//   if (checkIsNumber(a) && checkIsNumber(b)) return a + b;
//   return checkIsNumber;
// };

// checkIsNumber('s');

// const localStorageFeature = (key, defaultValue) => {
//   const getItem = () => JSON.parse(localStorage.getItem(key)) || defaultValue;

//   const setItem = (data) => localStorage.setItem(key, JSON.stringify(data));

//   const deleteItem = () => localStorage.removeItem(key);
//   return {
//     getItem,
//     setItem,
//     deleteItem,
//   };
// };

// const userLocal = localStorageFeature('user', '');
// console.log('userLocal', userLocal);

// userLocal.setItem('Loc');

// const a = 3;
// const asf = () => {
//   console.log('a', a);
//   const b = 4;
// };
// asf();
// console.log('b', b);

// console.log(fed); // fed is not define​

// -----------​

// console.log(fed); // fed is not define​

// fed = 'Test Hoisting';

// // -----------​

// var fed;

// console.log(fed); // fed is undefined​

// // -----------​
// var fed;
// console.log(fed); // fed is not undefined​
// const fed = 5;

// // -----------​

// console.log(fed); // fed is not undefined​

// var fed = 'Test Hoisting';
// helloWord();

// const helloWord = () => {
//   console.log('heello');
// };
