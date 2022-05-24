// Bài 1
const typeValueEmployee = (contentPrompt, isNumber, arrayCase) => {
  let isValid = false;
  do {
    value = prompt(contentPrompt);
    if (arrayCase) {
      switch (value) {
        case arrayCase[0]:
        case arrayCase[1]:
        case arrayCase[2]:
        case arrayCase[3]:
          isValid = true;
          break;
        default:
          isValid = false;
      }
    } else {
      if (value) {
        isValid = true;
        console.log('typeValueEmployee ~ isValid', isValid);
        if (isNumber && !isNaN(+value)) {
          isValid = true;
        }
        if (isNumber && isNaN(+value)) {
          isValid = false;
        }
      } else {
        isValid = false;
      }
    }
  } while (!isValid);

  return value;
};

// const nameEmployee = typeValueEmployee('Type Name of Employee');
// const levelEmployee = typeValueEmployee(
//   'Type Level of Employee (Fresher, Junior, Middle, Senior)',
//   false,
//   ['Fresher', 'Junior', 'Middle', 'Senior']
// );
// const titleEmployee = typeValueEmployee(
//   'Type Title of Employee (Member, Trainer ,Teamlead, PM)',
//   false,
//   ['Member', 'Trainer', 'Teamlead', 'PM']
// );
// const workYearEmployee = +typeValueEmployee('Type work years of Employee', true);

const EMPLOYEE_CRITERIA = {
  level: {
    Fresher: {
      text: 'Fresher',
      salary: 8000000,
    },
    Junior: {
      text: 'Junior',
      salary: 10000000,
    },
    Middle: {
      text: 'Middle',
      salary: 15000000,
    },
    Senior: {
      text: 'Senior',
      salary: 20000000,
    },
  },
  title: {
    Member: {
      text: 'Member',
      salary: 0,
    },
    Trainer: {
      text: 'Trainer',
      salary: 1000000,
    },
    Teamlead: {
      text: 'Teamlead',
      salary: 3000000,
    },
    PM: {
      text: 'PM',
      salary: 8000000,
    },
  },
};

debugger;

let employeeSalary = 0;

switch (levelEmployee) {
  case EMPLOYEE_CRITERIA.level.Fresher.text:
    employeeSalary += EMPLOYEE_CRITERIA.level.Fresher.salary;
    break;
  case EMPLOYEE_CRITERIA.level.Junior.text:
    employeeSalary += EMPLOYEE_CRITERIA.level.Junior.salary;
    break;
  case EMPLOYEE_CRITERIA.level.Middle.text:
    employeeSalary += EMPLOYEE_CRITERIA.level.Middle.salary;
    break;
  case EMPLOYEE_CRITERIA.level.Senior.text:
    employeeSalary += EMPLOYEE_CRITERIA.level.Senior.salary;
    break;
  default:
    break;
}

switch (titleEmployee) {
  case EMPLOYEE_CRITERIA.title.Member.text:
    employeeSalary += EMPLOYEE_CRITERIA.title.Member.salary;
    break;
  case EMPLOYEE_CRITERIA.title.Trainer.text:
    employeeSalary += EMPLOYEE_CRITERIA.title.Trainer.salary;
    break;
  case EMPLOYEE_CRITERIA.title.Teamlead.text:
    employeeSalary += EMPLOYEE_CRITERIA.title.Teamlead.salary;
    break;
  case EMPLOYEE_CRITERIA.title.PM.text:
    employeeSalary += EMPLOYEE_CRITERIA.title.PM.salary;
    break;
  default:
    break;
}

if (workYearEmployee > 8) {
  employeeSalary += 4000000;
  if (
    levelEmployee === EMPLOYEE_CRITERIA.level.Senior.text &&
    titleEmployee === EMPLOYEE_CRITERIA.title.Teamlead.text
  ) {
    employeeSalary += 10000000;
  }
}
if (workYearEmployee > 5) {
  employeeSalary += 2000000;
  if (
    levelEmployee === EMPLOYEE_CRITERIA.level.Senior.text &&
    titleEmployee === EMPLOYEE_CRITERIA.title.Teamlead.text
  ) {
    employeeSalary += 5000000;
  }
}
if (workYearEmployee > 3) {
  employeeSalary += 500000;
  if (
    levelEmployee === EMPLOYEE_CRITERIA.level.Senior.text &&
    titleEmployee === EMPLOYEE_CRITERIA.title.Teamlead.text
  ) {
    employeeSalary += 2000000;
  }
}

if (workYearEmployee > 0) {
  if (
    levelEmployee === EMPLOYEE_CRITERIA.level.Senior.text &&
    titleEmployee === EMPLOYEE_CRITERIA.title.Teamlead.text
  ) {
    employeeSalary += 500000;
  }
}

if (workYearEmployee > 8) {
  if (titleEmployee === EMPLOYEE_CRITERIA.title.PM.text) {
    employeeSalary = employeeSalary + employeeSalary * 0.06;
  }
}
if (workYearEmployee > 5) {
  if (titleEmployee === EMPLOYEE_CRITERIA.title.PM.text) {
    employeeSalary = employeeSalary + employeeSalary * 0.05;
  }
}

alert(nameEmployee + ' lương tháng này là: ' + employeeSalary);

// Bài 2

// in ra dãy số tự nhiên chia hết cho 4 nhưng không chia hết cho 8 mà nhỏ hơn 200
let i = 0;

while (i < 200) {
  if (i % 4 === 0 && i % 8 !== 0) console.log(i);
  i++;
}

// cho dãy số: [2,3, 5, 6, 3, 6, 8, 7, 3, 1, 2, 5, 7, 8, 4].
// Hãy sắp xếp chúng từ lớn đến bé mà không dùng hàm sort rồi tính tổng của tất cả các số trong đó
const arrNumber = [2, 3, 5, 6, 3, 6, 8, 7, 3, 1, 2, 5, 7, 8, 4];

let isDone = false;

while (!isDone) {
  isDone = true;
  for (let j = 0; j < arrNumber.length; j++) {
    console.log('arrNumber');
    let currentElement = arrNumber[j];
    let nextElement = arrNumber[j + 1];
    if (nextElement && nextElement > currentElement) {
      console.log('arrNumber');
      isDone = false;
      arrNumber[j] = nextElement;
      arrNumber[j + 1] = currentElement;
    }
  }
}
console.log(arrNumber);

// Sử dụng lại bài 1 hãy thêm chức năng kiểm tra,
// khi user nhập khai dữ liệu vào prompt hoặc không nhập, hãy bắt user nhập lại cho đến khi đúng thì mới chạy tiếp
