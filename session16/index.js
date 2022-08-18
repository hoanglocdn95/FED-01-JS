const userObject = {
  name: 'Lộc',
  age: 18,
  greeting: function () {
    console.log('this', this);
    this.age += 1;
    if (this.age < 30) {
      this.greeting();
    }
    // this {name: 'Lộc', age: 18, greeting: ƒ}​
    return `Hello ${this.name}`;
  },
};

// userObject.greeting();
// // console.log('global this', globalThis);

function testThis(e) {
  console.log({ a: this, event: e });
  // this.innerText = 'Don"t click me';
  e.target.innerText = 'Don"t click me';
}

// // testThis(); // window object​

document.querySelectorAll('button').forEach((item) => {
  item.onclick = testThis;
});

// const studentObject = {
//   name: 'student',
//   moveBy: function () {
//     console.log('moveBy this', this);
//   },
//   leaveBy: () => {
//     console.log('leaveBy this', this);
//   },
// };

// const unboundGetName = userObject.greeting.bind(studentObject);
// // const unboundGetName2 = function () {
// //   console.log('this', this);
// //   return `Hello ${this.name}`;
// // };

// // console.log(unboundGetName()); // undefined​

// // const boundGetName = unboundGetName.bind(studentObject);

// // console.log(boundGetX()); // 'Lộc'

// const testUser = testThis.bind(userObject);

// const userObject = {
//   name: 'Lộc',
// };

function greeting(a, b, c) {
  console.log('a b,c', { a, b, c });
  // console.log('this ' + a, this);
  return 'Xin chao';
}

const boundGreetingCall = greeting.apply(userObject);
// console.log(boundGreetingCall()); // 'this call', object userObject​
