// 2 Data Type, Operator
// Primitive và Reference
const number = 45;
const arrayNumber = [3, 5, 6];
arrayNumber.push(2);
arrayNumber[1] = 10;
console.log('arrayNumber', arrayNumber);

// /, %,
// null ? 'a' : 0;
// 3 ** 2;

// 3 Conditional Statement

// if else
// switch
// for
// while do

// switch (false) {
//   case name === 'Yui hatano':
//     alert('ố dè');
//     break;
//   case name !== 'Thuận':
//     alert('xin là xin vĩnh biệt');
//     break;
//   default:
//     break;
// }

// for (let i = 10; i > 0; i -= 2) {
//   console.log(i);
// }

// const isGay = true;
// const nameUser = null;

// if (!nameUser) {
//   console.log(+isGay);
// }

// 4 Function

function dienTich(a, b) {
  return a * b;
}

const dienTich2 = (a, b) => a * b;

// 5 String, Number, Date, Math

const nameA = 'Thành';
const nameB = 'Toàn';
console.log('hello ' + nameA + '. Minh la ' + nameB);
// 6 + 7 Array, Object

const arr1 = [2, 4, 4, 1, 5, 21, 6, 3];
console.log('arr1 1 ', arr1);

arr1.sort((a, b) => (a === 5 ? 1 : -1));
console.log('arr1 2 ', arr1);

const product = {
  products: [
    { sku: 10001, name: 'sản phẩm 1', price: 10 },
    { sku: 10002, name: 'sản phẩm 2', price: 100 },
  ],
};

const r = product['products']['0']['name'];
console.log('r', r);

// 8 DOM và BOM

// dom event onclick

// 9 Array 2 Dimension

// Prototype
// OOP #nameUser

// 10 Form control
// 11 Web Storage
localStorage.setItem('user', JSON.stringify(user));
JSON.parse(localStorage.getItem('user')) || null;

// 12 ES6 + ...
// ...
// destructuring
// ??
// ?.
