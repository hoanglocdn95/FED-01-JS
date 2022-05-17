// Bài 1:
// Khai báo 8 biến có đủ các kiểu dữ liệu sau với kiểu dữ liệu cho sẵn, đặt tên tùy ý nhưng phải tuân thủ convention ở slide 1:
// Number: 23
// String: 'FED01’
// Boolean: true
// Null: null
// Undefined: undefined
// Array: [3,4,8,2,4,7,1]
// Object: {name: 'tên’, age: 18, gender: 'female’}
// Function: () => { alert('đây là function’) }

var number23 = 23;
let stringName = 'FED01';
const booleanTrue = true;
var nullValue = null;
var undefinedValue = undefined;
var arrayNumber = [3, 4, 8, 2, 4, 7, 1];
let objectUser = { name: 'tên', age: 18, gender: 'female' };
const functionAlert = () => {
  alert('đây là function');
};

// Bài 2: Sử dụng operator, prompt, alert để thực hiện các yêu cầu sau:
// a)
// sử dụng các toán tử để tính số tiền nhận được trong 3 năm nếu 1 tháng
// bỏ đều đặn vào tài khoản tiết kiệm được 2 triệu, lãi suất 1 năm là 6%. Sau đó dùng alert thông báo
// b)
// Dùng Prompt để nhập tên của bạn, sử dụng alert để hiện dòng chữ 'Hello’ + tên của bạn + ', hôm nay là ngày’ + new Date()
// Dùng prompt để nhập môn học bạn yêu thích:
// nếu đó là 'công nghệ thông tin’ thì sẽ hiện ra alert thông báo true

const FIXED_MONEY = 2000000;
const INTEREST_RATE = 0.06;
const NUMBER_INTEREST = 12;
let numberYear = 3;

const futureMoney =
  FIXED_MONEY * (1 + INTEREST_RATE / NUMBER_INTEREST) ** (NUMBER_INTEREST * numberYear);

alert('số tiền kiếm được: ' + futureMoney + ' đồng');
// -------------

const username = prompt('Tên của bạn là:', 'Unknown');

alert('Hello ' + username + ', hôm nay là ngày ' + new Date());

const favoriteSubject = prompt('môn học yêu thích');

favoriteSubject === 'công nghệ thông tin' ? alert(true) : null;
