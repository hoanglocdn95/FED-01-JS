// Các nút bấm có thể thực hiện các hành động:
// 0, 1, 2, 3, 4, 5, 6, 7, 8, 9: nhập được số tương ứng
// +: nhập được dấu cộng
// -: nhập được dấu trừ
// /: nhập được dấu chia
// *: nhập được dấu nhân
// . biến số hiện tại đang nhập thành số thập phân, nếu chưa nhập số nào thì số đó sẽ có dạng “0, “
// =: tính và hiện ra kết quả trên màn hình
// % : tính kết quả và chuyển sang dạng phần trăm ( ví dụ 15 => 1500%)
// exp: nhập  a, khi nhập sẽ ra dấu ^ ( ví dụ 2^3)
// del: xóa từng ký tự trên màn hình
// C: xóa toàn bộ ký tự trên màn hình
// Yêu cầu:
// khi ký tự đầy màn hình, sẽ không thể nhập được nữa
// các hành vi khác sẽ mô phỏng giống với máy tính thông thường

const $ = (el) => document.querySelector(el);
const $All = (el) => document.querySelectorAll(el);

const screen = $('#screen');

const listContentScreen = [];

$All('[name=number]').forEach((item) => {
  item.onclick = (e) => {
    const valueInput = e.target.innerText;
    const textScreen = screen.innerText;
    if (valueInput === '0' && textScreen === '0') return;
    if (textScreen === '0' && valueInput !== '0') {
      return (textScreen = valueInput);
    }
    if (textScreen.length >= 25) return;
    screen.innerText += valueInput;
  };
});

$All('[name=operator]').forEach((item) => {
  item.onclick = (e) => {
    const valueInput = e.target.innerText;
    const textScreen = screen.innerText;
    if (
      textScreen[textScreen.length - 1] === '+' ||
      textScreen[textScreen.length - 1] === '-'
    )
      return;
    const stringPrefix = listContentScreen.reduce((acc, item) => {
      return acc + item;
    }, '');
    listContentScreen.push(parseInt(textScreen.replace(stringPrefix, '')));
    listContentScreen.push(valueInput);
    screen.innerText += valueInput;
  };
});

$('[name=result]').onclick = () => {
  const textScreen = screen.innerText;
  const stringPrefix = listContentScreen.reduce((acc, item) => {
    return acc + item;
  }, '');
  listContentScreen.push(parseInt(textScreen.replace(stringPrefix, '')));

  screen.innerText = listContentScreen.reduce((acc, item, index) => {
    if (index === 0) {
      return acc + item;
    } else {
      switch (item) {
        case '+':
        case '-':
          return acc;
        default:
          break;
      }
      switch (listContentScreen[index - 1]) {
        case '+':
          return acc + item;
        case '-':
          return acc - item;
        default:
          return;
      }
    }
  }, 0);
  listContentScreen = [];
};
