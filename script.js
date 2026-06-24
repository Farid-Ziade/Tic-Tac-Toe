"use strict";
const gameBoard = (() => {
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
  const placement = (row, column, marker) => {
    if (board[row][column] !== "") return;
    return (board[row][column] = marker);
  };
  return { reset, placement };
})();

function createPlayer(name, marker) {
  return { name, marker };
}

function gameControler(gameBoard) {
  const player1 = createPlayer("Player 1", "X");
  const player2 = createPlayer("Player 2", "O");
}
console.log(gameControler(gameBoard));
