// Bài 1
// Tạo mảng 2 chiều để vẽ giao diện bàn cờ tướng, đặt các quân cờ
// lên các vị trí đúng của 1 bàn cờ tướng, tham khảo hình để vẽ bàn cờ tưởng.

// Draw Board
const board = new Array(8).fill(new Array(9).fill({}));
let drawBoard = '';
board.map((itemColumn, index) => {
  let column = '';
  itemColumn.map((item) => {
    column = column + '<div class="item"></div>';
  });
  drawBoard = drawBoard + `<div class="col-${index}">${column}</div>`;
});

document.getElementById('board').innerHTML = drawBoard;

// Draw Chess

class Chessman {
  constructor(type) {
    this.type = type;
  }
  movingMethod = (move) => `Cách di chuyển là: ${move}`;
}

class King extends Chessman {
  constructor() {
    super('King');
  }
}

class Tank extends Chessman {
  constructor() {
    super('Tank');
  }
}

const defaultPositionChess = {
  '0-4': 'King',
  '0-0': 'Tank',
  '0-8': 'Tank',
};
const tempChess = new Array(9).fill([]);
const chess = tempChess.map((item) =>
  new Array(10).fill({
    nameChess: '',
    x: null,
    y: null,
  })
);
let drawChess = '';
const chessData = chess.map((itemColumn, indexColumn) => {
  let column = '';
  const itemData = itemColumn.map((item, indexRow) => {
    const nameChess = defaultPositionChess[`${indexRow}-${indexColumn}`];
    column =
      column +
      `<div class="itemChess">${
        nameChess ? `<div class='chessCircle'>${nameChess}</div>` : ''
      }</div>`;

    switch (nameChess) {
      case 'King':
        return new King();
      case 'Tank':
        return new Tank();
      default:
        return;
    }
  });
  drawChess = drawChess + `<div>${column}</div>`;
  return itemData;
});
console.log('chess.map ~ chess', chessData);
document.getElementById('chess').innerHTML = drawChess;

// Bài 2:
// Tạo class Chessman có các property như: type, movingMethod
// Tạo các class Tank (Xe), Knight (Mã), Cannon (Pháo), Defender (Tượng),
// Guardian (Sĩ), Rookie (Chuột) kế thừa từ class Chessman. Mỗi loại sẽ được set type,
// movingMethod phù hợp với loại đó (ví dụ: Tank có type: ‘tank’, movingMethod: () =>  ‘đi thẳng’)
// Tạo đủ instance của các quân cờ trên bàn cờ, và lưu chúng vào mảng 2 chiều ở bài 1
