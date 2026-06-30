"use strict";

let mark = "X";
let place;
let counter = 0;
let gameOn;
let h2 = document.createElement("h2");
let rows, columns;

let gameBoard = (() => {
  let board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  let reset = () => {
    board = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ];
  };
  let placement = (row, column, marker) => {
    board[row][column] = marker;
    mark = marker;
    return true;
  };
  let winningCondition = (row, column, marker) => {
    let win = board[row][0];
    if (
      win &&
      board[row][0] == marker &&
      win == board[row][1] &&
      board[row][1] == marker &&
      win == board[row][2] &&
      board[row][2] == marker
    ) {
      h2.innerHTML = mark + " won by row";
      message.appendChild(h2);
      button.forEach((btn, index) => {
        if (btn.hasAttribute("disabled")) {
          ///bug here in index it is checking if there is anything on the index and setting attribute
          if (row == 0 && (index == 0 || index == 1 || index == 2)) {
            btn.setAttribute("style", "background-color:gold");
            console.log(index);
          }
          if (row == 1 && (index == 0 || index == 1 || index == 2)) {
            btn.setAttribute("style", "background-color:gold");
          }
          if (row == 2 && (index == 0 || index == 1 || index == 2)) {
            console.log("hi");
            btn.setAttribute("style", "background-color:gold");
          }
        }
      });
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
      button.forEach((btn, index) => {
        if (btn.hasAttribute("disabled")) {
          console.log(columns);
        }
      });
      h2.innerHTML = mark + " won by column";
      message.appendChild(h2);

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
      h2.innerHTML = mark + " won by the diagonal";
      message.appendChild(h2);

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
      h2.innerHTML = mark + " won by the diagonal";
      message.appendChild(h2);

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
  switch (place) {
    case 0:
      rows = 0;
      columns = 0;
      break;
    case 1:
      rows = 0;
      columns = 1;
      break;

    case 2:
      rows = 0;
      columns = 2;
      break;

    case 3:
      rows = 1;
      columns = 0;
      break;

    case 4:
      rows = 1;
      columns = 1;
      break;

    case 5:
      rows = 1;
      columns = 2;
      break;

    case 6:
      rows = 2;
      columns = 0;
      break;

    case 7:
      rows = 2;
      columns = 1;
      break;

    case 8:
      rows = 2;
      columns = 2;
      break;
  }

  if (gameOn) {
    if (gameBoard.placement(rows, columns, mark) == true) {
      counter++;
      if (gameBoard.winningCondition(rows, columns, mark) == true) {
        button.forEach((btn) => {
          btn.disabled = true;
        });
        gameOn = false;
      } else if (counter >= 9) {
        h2.innerHTML = "Nobody won it's a tie ";
        message.appendChild(h2);
        gameOn = false;
        button.forEach((btn) => {
          btn.disabled = true;
        });
      } else {
        mark == "X" ? (mark = player2.marker) : (mark = player1.marker);
      }
    }
  }
}

let button = document.querySelectorAll(".btn");
button.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    btn.innerHTML = mark;
    place = index;
    btn.disabled = true;
    if (counter < 9) {
      gameOn = true;
      gameControler();
    }
  });
});
let newgame = document.querySelector(".new-game");
newgame.addEventListener("click", () => {});
let message = document.querySelector(".message");
