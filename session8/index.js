const elementFullName = document.getElementById('fullName');
const elPhoneNumber = document.getElementById('phoneNumber');
const elMyName = document.getElementById('myName');
const elMyProfile = document.getElementById('myProfile');
const elementButton = document.getElementsByTagName('button')[0];

elementButton.onclick = (e) => {
  e.preventDefault();
  // console.log('elementFullName.value', elementFullName.value);
  const valueName = elementFullName.value;
  const phoneNumber = elPhoneNumber.value;
  elMyProfile.innerHTML = `<h4 style="color: red">Name: ${valueName}</h4>
  <h5>phoneNumber: ${phoneNumber}</h5>`;
};

const elMyName2 = document.querySelector('[name=username]');
console.log('elMyName2', elMyName2);

window.history.go(1);
