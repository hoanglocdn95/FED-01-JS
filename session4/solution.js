// Bài 1:
// Tạo các function theo yêu cầu dưới đây
// function hiện alert với nội dung: Hello + tên người dùng, trong đó tên người dùng được truyền từ parameter

const alertHello = (name) => alert('Hello ' + name);
// function có 3 parameter là a,b, c. function sẽ kiểm tra nếu tổng của 2 số bất kì
// lớn hơn số còn lại thì sẽ return về giá trị hiệu của 2 số bất kì đó trừ cho số còn lại

const calculateSubtract = (a, b, c) => {
  if (a + b > c) {
    return a - b - c;
  }
};

// function thông báo điểm thi trung bình và phân loại học lực học sinh.
// Điểm Toán, Lý, Hóa, Sinh, Văn, Sử, Địa, Anh sẽ được truyền từ parameter.
// điểm trung bình < 5 là học sinh yếu, 5 đến 6.5 là trung bình, 6.5 đến 8 là khá, 8 trở lên là giỏi

const noticeAveragePoint = (points) => {
  const averagePoint =
    (points.math +
      points.physic +
      points.chemistry +
      points.bio +
      points.literature +
      points.history +
      points.geography +
      points.english) /
    8;
  switch (true) {
    case averagePoint < 5:
      alert('học sinh yếu');
      break;
    case averagePoint < 6.5 && averagePoint >= 5:
      alert('học sinh trung bình');
      break;
    case averagePoint < 8 && averagePoint >= 6.5:
      alert('học sinh khá');
      break;
    case averagePoint >= 8:
      alert('học sinh giỏi');
      break;
    default:
      return;
  }
};

// Bài 2:
// Tạo ứng dụng tính tiền điện phải trả và thông báo bằng alert, yêu cầu:
// nhập số điện bằng prompt, dùng parseInt hoặc Number để convert giá trị thành number,
// nếu nhập không đúng loại dữ liệu hoặc nhỏ hơn 100, lớn hơn 2000, sẽ bắt nhập lại
// số tiền điện tính theo công thức sau,
// 150 chữ điện đầu tiên giá 3000/chữ,
// 350 chữ điện tiếp theo giá 5000/chữ, 1000 chữ điện tiếp theo giá 10000/chữ,
// từ chữ điện 1501 trở đi, giá 20000/chữ
// Ví dụ: nhập vào 1200, thì số tiền điện là sẽ 150*3000 + 350*5000 + 700*10000 = 9.200.000 đồng

const levelMoneyElectric = [3000, 5000, 10000, 20000];

const calculateElectricMoney = () => {
  let numberElectric;
  do {
    numberElectric = prompt('mơi nhập số điện ( lớn hớn hoặc bằng 100, nhỏ hơn 2000)');
    numberElectric = parseInt(numberElectric);
  } while (numberElectric < 100 || numberElectric > 2000 || isNaN(numberElectric));

  let moneyElectric;

  switch (true) {
    case numberElectric < 150:
      moneyElectric = numberElectric * levelMoneyElectric[0];
      break;
    case numberElectric < 500:
      moneyElectric = 150 * levelMoneyElectric[0] + (numberElectric - 150) * levelMoneyElectric[1];
      break;
    case numberElectric < 1500:
      moneyElectric =
        150 * levelMoneyElectric[0] +
        350 * levelMoneyElectric[1] +
        (numberElectric - 500) * levelMoneyElectric[2];
      break;
    case numberElectric > 1500:
      moneyElectric =
        150 * levelMoneyElectric[0] +
        350 * levelMoneyElectric[1] +
        1000 * levelMoneyElectric[2] +
        (numberElectric - 1500) * levelMoneyElectric[3];
      break;
    default:
      break;
  }

  console.log('calculateElectricMoney ~ moneyElectric', moneyElectric);
  alert('số tiền điện: ' + moneyElectric);
};

calculateElectricMoney();
