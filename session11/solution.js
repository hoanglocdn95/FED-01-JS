// Bài 1
// tạo ứng dụng đơn giản list học viên, yêu cầu:
// tạo form nhập thông tin có các field: cmnd, name, birthday, phoneNumber
// khi bấm nút submit, list học viên sẽ hiện dạng list table, và dữ liệu được lưu ở localStorage
// khi mở trang, nếu trong localStorage có dữ liệu, sẽ show dữ liệu ra màn hình
// nếu nhập student có cmnd giống với 1 student đã được lưu trong localStorage
// thì sẽ update thông tin student đó với thông tin mới

const $ = (el) => document.querySelector(el);

const admins = [
  { name: 'admin', password: 'Aa@123456' },
  { name: 'admin2', password: 'admin123admin' },
];

const keyLocal = 'listStudent';
const getDataLocalStorage = (key) =>
  JSON.parse(localStorage.getItem(key)) || [];

const setDataLocalStorage = (key, data) =>
  localStorage.setItem(key, JSON.stringify(data));

let listStudent = getDataLocalStorage(keyLocal);

setDataLocalStorage('admins', admins);

const displayStudents = () => {
  let row = '';
  let tableStudent = '';
  listStudent.map((item) => {
    row = `<tr>
      <td>${item.cmnd}</td>
      <td>${item.name}</td>
      <td>${item.birthday}</td>
      <td>${item.phoneNumber}</td>
    </tr>`;
    tableStudent = tableStudent + row;
  });
  $('#dataStudent').innerHTML = tableStudent;
};

const isLogin = () => {
  const isLogged = getDataLocalStorage('isLogged');
  if (isLogged.length !== 0) {
    $('#formStudents').style.display = 'block';
    $('#layout').style.display = 'none';
  }
};

isLogin();
displayStudents();

$('#submit').onclick = (e) => {
  e.preventDefault();
  const cmnd = $('#cmnd').value;
  const name = $('#name').value;
  const birthday = $('#birthday').value;
  const phoneNumber = $('#phoneNumber').value;
  const indexStudent = listStudent.findIndex((item) => item.cmnd === cmnd);
  if (indexStudent < 0) {
    listStudent.push({
      cmnd: cmnd,
      name: name,
      birthday: birthday,
      phoneNumber: phoneNumber,
    });
  } else {
    listStudent.splice(indexStudent, 1, {
      cmnd: cmnd,
      name: name,
      birthday: birthday,
      phoneNumber: phoneNumber,
    });
  }

  setDataLocalStorage(keyLocal, listStudent);
  displayStudents();
};

$('#login').onclick = () => {
  const id = $('#id').value;
  const password = $('#password').value;
  const isLoginSuccess =
    admins.filter((item) => item.name === id && item.password === password)
      .length > 0;
  if (!isLoginSuccess) return alert('Login failed');
  if (isLoginSuccess) {
    $('#formStudents').style.display = 'block';
    $('#layout').style.display = 'none';
    setDataLocalStorage('isLogged', isLoginSuccess);
  }
};

$('#logout').onclick = () => {
  localStorage.removeItem('isLogged');
  $('#formStudents').style.display = 'none';
  $('#layout').style.display = 'flex';
};

// Bài 2
// update ứng dụng bài 1, thêm chức năng login và logout, với các yêu cầu:
// lưu dữ liệu của tài khoản trong localStorage với key là admin, dữ liệu
// [
//   {name:'admin’, password:'Aa@123456’},
//   {name:'admin2’, password:'admin123admin'}
// ]
// Khi vào trang, sẽ hiện modal đăng nhập, modal chỉ tắt khi đăng nhập thành công
// Có nút đăng xuất ở góc màn hình
// khi người dùng tắt trang nhưng chưa đăng xuất thì khi mở lại trang thì không cần đăng nhập lại.
