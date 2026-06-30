"use strict";

let mark = "X";
let place;
let counter = 0;
let gameOn;
let h2 = document.querySelector(".h2");

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
      board[row][0] == marker &&
      win == board[row][1] &&
      board[row][1] == marker &&
      win == board[row][2] &&
      board[row][2] == marker
    ) {
      h2.innerHTML = mark + " won by row";
      message.appendChild(h2);
      button.forEach((btn) => {
        if (btn.hasAttribute("disabled")) {
          if (row == 0 && btn.innerHTML === mark) {
            btn.setAttribute("style", "background-color:gold");
          }
          if (row == 1 && btn.innerHTML === mark) {
            btn.setAttribute("style", "background-color:gold");
          }
          if (row == 2 && btn.innerHTML === mark) {
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
      button.forEach((btn) => {
        if (btn.hasAttribute("disabled")) {
          if (column == 0 && btn.innerHTML === mark) {
            btn.setAttribute("style", "background-color:gold");
          }
          if (column == 1 && btn.innerHTML === mark) {
            btn.setAttribute("style", "background-color:gold");
          }
          if (column == 2 && btn.innerHTML === mark) {
            btn.setAttribute("style", "background-color:gold");
          }
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
      button.forEach((btn) => {
        if (btn.hasAttribute("Disabled")) {
          if (row == 0 && column == 2 && btn.innerHTML === mark) {
            btn.setAttribute("style", "background-color:gold");
          }
          if (row == 1 && column == 1 && btn.innerHTML === mark) {
            btn.setAttribute("style", "background-color:gold");
          }
          if (row == 2 && column == 0 && btn.innerHTML === mark) {
            btn.setAttribute("style", "background-color:gold");
          }
        }
      });
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
      button.forEach((btn) => {
        if (btn.hasAttribute("Disabled")) {
          if (row == 2 && column == 2 && btn.innerHTML === mark) {
            btn.setAttribute("style", "background-color:gold");
          }
          if (row == 1 && column == 1 && btn.innerHTML === mark) {
            btn.setAttribute("style", "background-color:gold");
          }
          if (row == 0 && column == 0 && btn.innerHTML === mark) {
            btn.setAttribute("style", "background-color:gold");
          }
        }
      });
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
  let rows, columns;
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
