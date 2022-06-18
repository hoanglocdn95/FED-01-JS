document.getElementById('open').onclick = () => {
  document.getElementsByClassName('layout')[0].style.display = 'flex';
};

document.getElementById('close').onclick = () => {
  document.getElementsByClassName('layout')[0].style.display = 'none';
};

document.getElementById('draw').onclick = () => {
  const numberLine = parseInt(document.getElementById('numberLine').value);
  let content = '';
  let row = '';
  let space = '';

  for (let i = 1; i <= numberLine; i++) {
    row = '';
    for (let j = 1; j <= i; j++) {
      row = row + '^';
    }
    space = new Array(Math.ceil((numberLine - i) / 2))
      .fill('-')
      .join()
      .replaceAll(',', ' ');
    content = content + space + row + '<br>';
  }

  document.getElementById('textContent').innerHTML = content;
  document.getElementsByClassName('layout')[0].style.display = 'none';
};

document.getElementById('open').onmouseover = () => {
  document.getElementById('open').style.fontSize = '60px';
};
