const rows = 3;
const columns = 3;
const winningConditions = [
  [
    [0, 0],
    [0, 1],
    [0, 2],
  ],
  [
    [1, 0],
    [1, 1],
    [1, 2],
  ],
  [
    [2, 0],
    [2, 1],
    [2, 2],
  ],
  [
    [0, 0],
    [1, 0],
    [2, 0],
  ],
  [
    [0, 1],
    [1, 1],
    [2, 1],
  ],
  [
    [0, 2],
    [1, 2],
    [2, 2],
  ],
  [
    [0, 0],
    [1, 1],
    [2, 2],
  ],
  [
    [2, 0],
    [1, 1],
    [0, 2],
  ],
];

let GameBoard = {
  board: [],
};

let player = {
  X: "X",
  O: "O",
};
for (let i = 0; i < rows; i++) {
  GameBoard.board[i] = [];
  for (let j = 0; j < columns; j++) {
    GameBoard.board[i][j] = "";
  }
}
let count = 0;
GameBoard.board[0][2] = "X";
GameBoard.board[0][1] = "O";
GameBoard.board[1][1] = "X";
GameBoard.board[0][0] = "O";
GameBoard.board[2][0] = "X";
(function () {
  console.log(GameBoard.board);
})();
for (let i = 0; i < winningConditions.length; i++) {
  count = 0;
  for (let j = 0; j < winningConditions[i].length; j++) {
    if (
      GameBoard.board[winningConditions[i][j][0]][
        winningConditions[i][j][1]
      ] === "X"
    ) {
      count++;
    }
    if (count === 3) {
      console.log("X won");
    }
  }
  console.log("break");
}
