const validationRule = {
  username: {
    min: 4,
    max: 8,
    isRequired: true,
    regExPattern: /^[a-zA-Z]+$/i,
    isNumber: false,
  },
  password: {
    min: 6,
    max: 9,
    isRequired: true,
    regExPattern: '',
    isNumber: false,
  },
  phoneNumber: {
    min: 10,
    max: 12,
    isRequired: false,
    regExPattern: '',
    isNumber: true,
  },
  address: {
    min: 10,
    max: 50,
    isRequired: false,
    regExPattern: '',
    isNumber: false,
  },
};

const $ = (selector) => document.querySelector(selector);

document.getElementById('submit').onclick = () => {
  const username = $('#username').value;
  const password = $('#password').value;
  const phoneNumber = $('#phoneNumber').value;
  const address = $('#address').value;

  const fieldValue = {
    username: username,
    password: password,
    phoneNumber: phoneNumber,
    address: address,
  };

  const arrayFieldValid = Object.keys(fieldValue).map((keyItem) => {
    if (!fieldValue[keyItem] && validationRule[keyItem].isRequired)
      return { [keyItem]: false };

    if (
      fieldValue[keyItem].length < validationRule[keyItem].min ||
      fieldValue[keyItem].length > validationRule[keyItem].max
    )
      return { [keyItem]: false };

    if (
      isNaN(parseInt(fieldValue[keyItem])) &&
      validationRule[keyItem].isNumber
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
