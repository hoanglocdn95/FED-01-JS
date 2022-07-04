// Bài 1:
// Tạo form đăng ký người dùng với các field và rule validation theo yêu cầu:
// Username: ít nhất 8 ký tự, nhiều nhất 16, chỉ chấp nhận ký tự, số và dấu _
// Name: tên thật người dùng
// Email: phải đúng format email
// password: ít nhất 8 ký tự, password phải đủ có ít nhất 1 chữ, 1 số, 1 ký tự đặc biệt
// confirm password: như trên
// birthday: đảm bảo người dùng trên 18 tuổi
// phonenumber: phải có 84 ở trước, phải có 11 chữ số
// checkbox gender: male, female,
// radio khóa học quan tâm: html, css, js, ts, react, vue, angular, node.
// select option chọn lớp: FED01 đến FED03
// có nút submit và nút reset, tất cả các trường đều required

const $ = (selector) => document.querySelector(selector);
const $All = (selector) => document.querySelectorAll(selector);

const validationRule = {
  email: {
    min: 0,
    max: 50,
    isRequired: true,
    regExPattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
  },
  birthday: {
    min: 10,
    max: 10,
    isRequired: true,
    regExPattern: '',
  },
  phoneNumber: {
    min: 10,
    max: 12,
    isRequired: true,
    regExPattern: /(84|0[3|5|7|8|9])+([0-9]{8})\b/g,
  },
  genders: {
    min: 0,
    max: 50,
    isRequired: true,
    regExPattern: '',
  },
  courses: {
    min: 0,
    max: 50,
    isRequired: true,
    regExPattern: '',
  },
  classes: {
    min: 0,
    max: 50,
    isRequired: true,
    regExPattern: '',
  },
};

document.getElementById('submit').onclick = () => {
  const email = $('#email').value;
  const birthday = $('#birthday').value;
  const classes = $('#classes').value;
  const phoneNumber = $('#phoneNumber').value;
  const genders = [...$All('[name=gender]')]
    .map((input) => {
      if (input.checked) return input.value;
    })
    .filter((item) => item);
  const courses = [...$All('[name=course]')]
    .map((input) => {
      if (input.checked) return input.value;
    })
    .filter((item) => item);

  const fieldValue = {
    email: email,
    birthday: birthday,
    classes: classes,
    phoneNumber: phoneNumber,
    genders: genders,
    courses: courses,
  };

  const arrayFieldValid = Object.keys(fieldValue).map((keyItem) => {
    console.log('arrayFieldValid ~ keyItem', keyItem);
    if (!fieldValue[keyItem] && validationRule[keyItem].isRequired)
      return { [keyItem]: false };

    if (
      fieldValue[keyItem].length < validationRule[keyItem].min ||
      fieldValue[keyItem].length > validationRule[keyItem].max
    )
      return { [keyItem]: false };

    if (validationRule[keyItem].regExPattern) {
      return {
        [keyItem]: validationRule[keyItem].regExPattern.test(
          fieldValue[keyItem]
        ),
      };
    }

    return { [keyItem]: true };
  });

  arrayFieldValid.map((item) => {
    const keyItem = Object.keys(item)[0];
    const valueItem = Object.values(item)[0];
    if (valueItem) {
      $(`#${keyItem}`).style.color = 'green';
    } else {
      $(`#${keyItem}`).style.color = 'red';
    }
  });
};

// Bài 2: (Optional)
// Tạo ứng dụng đơn xin nghỉ, có các field và rule validation theo yêu cầu:
// username: ít nhất 8 ký tự, chỉ chấp nhận ký tự, số và dấu _
// select option chọn team: giá trị từ team1 đến team4
// Textarea lý do nghỉ (Reason): nhập không quá 100 từ

const now = new Date();
const dateNow = now.getDate();
const monthNow = now.getMonth() + 1;
const yearNow = now.getFullYear();

let dateMin;
let monthMin;
let yearMin;

if (dateNow <= 3) {
  if (monthNow === 1) {
    yearMin = yearNow - 1;
    monthMin = 12;
  } else {
    monthMin = monthNow - 1;
    yearMin = yearNow;
  }
  dateMin = dateNow - 3 + 30;
} else {
  monthMin = monthNow;
  dateMin = dateNow - 3;
  yearMin = yearNow;
}

const minDate = `${yearMin}-${monthMin < 10 ? '0' + monthMin : monthMin}-${
  dateMin < 10 ? '0' + dateMin : dateMin
}`;
console.log('minDate', minDate);

$('#from').setAttribute('min', minDate);

const from = $('#from').value;
const to = $('#to').value;
new Date(from).getMilliseconds();
new Date(to).getMilliseconds();

// Nghỉ từ (Form): có thể chọn ngày quá khứ không quá ngày hiện tại 3 ngày (ví dụ hôm nay là 31/5/2022,
//  thì có thể chọn tối đa từ ngày 28/05/2022
// Nghỉ đến (To): Nếu số ngày nghỉ lớn hơn 2 ngày (ví dụ From: 28/05/2022, To: 29/05/2022 => là 2 ngày)
// thì sẽ hiện thêm label thông báo số ngày nghỉ không lương (No Paid Day),
// nếu chọn số ngày nhỏ hơn hoặc bằng 2 thì label sẽ mất
// No Paid Day: khi số ngày nghỉ lớn hơn 2, thì số ngày nghỉ - 2 sẽ được tính là ngày nghỉ không lương
// Checkbox có cần người làm thay hay không (Replacement): Nếu chọn có, sẽ hiện field Supporter,
//  nếu chọn không thì không hiện field Supporter
// Select option chọn người làm thay (Supporter): tạo ra 4 option là tên 4 người bất kì
// Có nút submit và nút reset
