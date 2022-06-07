// var userInfo = {
//   name: 'Eimi Fukada',
//   age: 25,
//   job: 'actor',
// };

// userInfo.age = 18;
// console.log('userInfo 1', userInfo);

// Object.freeze(userInfo);

// userInfo.name = 'Thuận';
// console.log('userInfo 2', userInfo);

const shopData = {
  corgiShop: {
    address: '29 Lê Quang Sung',
    chargedOf: 'Lộc',
    phoneNumber: 935964949,

    products: [
      { sku: 10001, name: 'sản phẩm 1', price: 10 },
      { sku: 10002, name: 'sản phẩm 2', price: 100 },
    ],
  },

  huskyShop: {
    address: '29 Quang Trung',
    chargedOf: 'Lộc 2',
    phoneNumber: 9359622234,

    products: [
      { sku: 10001, name: 'sản phẩm 3', price: 10 },
      { sku: 10002, name: 'sản phẩm 2', price: 100 },
    ],
  },
  shibaShop: {
    address: '29 Lê lợi',
    chargedOf: 'Lộc 3',
    phoneNumber: 9344622234,

    products: [
      { sku: 10001, name: 'sản phẩm 2', price: 10 },
      { sku: 10002, name: 'sản phẩm 5', price: 100 },
    ],
  },
};
console.log(shopData);
console.log(Object.entries(shopData));
const listShop = Object.entries(shopData).map((itemShop) => {
  const nameShop = itemShop[0];
  const valueShop = itemShop[1];
  valueShop.nameShop = nameShop;
  return valueShop;
});
console.log('listShop ~ listShop', listShop);

const shopDataArray = Object.entries(shopData).map((itemShop) => {
  const nameShop = itemShop[0];
  const valueShop = itemShop[1];
  valueShop.nameShop = nameShop;
  itemShop[0] = valueShop.phoneNumber;
  console.log({ a: itemShop[0], b: itemShop[1] });
  return [itemShop[0], itemShop[1]];
});
const shopDataKeyPhoneNumber = Object.fromEntries(shopDataArray);
