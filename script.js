"use strict";
let gameBoard = (() => {
  let board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  const reset = () => {
    board = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ];
  };
  let placement = (row, column, marker) => {
    if (board[row][column] !== "") {
      console.log("Please choose another cell this one is taken");
    }
    console.log("ok");
    board[row][column] = marker;
    console.table(board);
  };
  let winningCondition = (row, column, marker) => {
    let win = board[row][0];
    let gameOver;
    if (
      win !== "" &&
      win == board[row][1] &&
      board[row][1] == marker &&
      win == board[row][2] &&
      board[row][2] == marker
    ) {
      console.log(`${marker} win by row`);
      return true;
    }

    win = board[0][column];

    if (
      win !== "" &&
      win === board[1][column] &&
      board[1][column] == marker &&
      win === board[2][column] &&
      board[2][column] == marker
    ) {
      console.log(`${marker} win by column`);
      return true;
    }

    win = board[0][2];
    if (
      win !== "" &&
      win === board[1][1] &&
      board[1][1] == marker &&
      win === board[2][0] &&
      board[2][0] == marker
    ) {
      console.log(`${marker} won by the other diagonal`);
      return true;
    }

    win = board[2][2];
    if (
      win !== "" &&
      win === board[1][1] &&
      board[1][1] == marker &&
      win === board[0][0] &&
      board[0][0] == marker
    ) {
      console.log(`${marker} won by the diagonal`);
      return true;
    }
  };
  return { reset, placement, winningCondition };
})();

function createPlayer(name, marker) {
  return { name, marker };
}

function gameControler() {
  const player1 = createPlayer("Player 1", "X");
  const player2 = createPlayer("Player 2", "O");
  let gameOver = true;
  let last = player1.marker;
  while (gameOver) {
    let rows = Number(prompt("Please enter row "));
    let columns = Number(prompt("Please enter column "));
    gameBoard.placement(rows, columns, last);
    if (gameBoard.winningCondition(rows, columns, last)) {
      gameOver = false;
    }
    last == "X" ? (last = player2.marker) : (last = player1.marker);
  }
}
gameControler();
// gameBoard.placement(0, 2, "X");
