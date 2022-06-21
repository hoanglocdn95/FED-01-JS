const arrayItem = new Array(8).fill({ name: '' });
const boardGame = new Array(8).fill(arrayItem);

const chess = {
  x: '0',
  y: '0',
  name: 'Xe Trắng',
};

class ChessModel {
  #moveMethod = () => {
    return 'moveMethod';
  };
  showConsole = () => {
    console.log(this.#moveMethod());
  };

  constructor(x, y, nameChess) {
    this.posX = x || 10;
    this.y = y;
    this.nameChess = nameChess;
    // this.showConsole = showConsole.bind(this);
    // this.moveMethod = #moveMethod;
  }
}

class KingChess extends ChessModel {
  constructor(color) {
    super();
    this.color = color;
  }
}

const newChess = new ChessModel(null, 2, 'Xe');
const king = new KingChess('trắng');

console.log('newChess', newChess);
console.log('king', king);

let board = '';

boardGame.map((arrItem, y) => {
  let row = '';
  arrItem.map((item, x) => {
    row = row + `<div id="${x}-${y}"></div>`;
  });

  board = board + '<div>' + row + '</div>';
});

document.getElementById('board').innerHTML = board;

const putChess = () => {
  const nameChess = prompt('Tên cờ muốn đặt', 'chuột');
  const posX = prompt('Tọa độ X', '0');
  const posY = prompt('Tọa độ Y', '0');
  document.getElementById(`${posX}-${posY}`).innerHTML = nameChess;
};

document.getElementById('put-chess').onclick = putChess;
