"use strict";

let mark = "X";
let place;
let counter = 0;
let gameOn;
let h2 = document.querySelector(".h2");
let XScore = document.querySelector(".Xscore");
let scoreX = 0;
let OScore = document.querySelector(".Oscore");
let scoreO = 0;
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
      board[row][1] == marker &&
      board[row][2] == marker
    ) {
      h2.innerHTML = mark + " won by row";
      message.appendChild(h2);
      button.forEach((btn, index) => {
        console.log(index, row);
        if (
          row == 0 &&
          btn.innerHTML === mark &&
          (index == 0 || index == 1 || index == 2)
        ) {
          btn.setAttribute("style", "background-color:gold");
        } else if (
          row == 1 &&
          btn.innerHTML === mark &&
          (index == 3 || index == 4 || index == 5)
        ) {
          btn.setAttribute("style", "background-color:gold");
        } else if (
          row == 2 &&
          btn.innerHTML === mark &&
          (index == 6 || index == 7 || index == 8)
        ) {
          btn.setAttribute("style", "background-color:gold");
        }
      });
      return true;
    } else if (
      board[0][column] == marker &&
      board[1][column] == marker &&
      board[2][column] == marker
    ) {
      button.forEach((btn, index) => {
        if (btn.hasAttribute("disabled")) {
          if (
            column == 0 &&
            btn.innerHTML === mark &&
            (index == 0 || index == 3 || index == 6)
          ) {
            btn.setAttribute("style", "background-color:gold");
          }
          if (
            column == 1 &&
            btn.innerHTML === mark &&
            (index == 1 || index == 4 || index == 7)
          ) {
            btn.setAttribute("style", "background-color:gold");
          }
          if (
            column == 2 &&
            btn.innerHTML === mark &&
            (index == 2 || index == 5 || index == 8)
          ) {
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
      button.forEach((btn, index) => {
        if (btn.hasAttribute("Disabled")) {
          if (
            row == 0 &&
            column == 2 &&
            btn.innerHTML === mark &&
            (index == 2 || index == 4 || index == 6)
          ) {
            btn.setAttribute("style", "background-color:gold");
          }
          if (
            row == 1 &&
            column == 1 &&
            btn.innerHTML === mark &&
            (index == 2 || index == 4 || index == 6)
          ) {
            btn.setAttribute("style", "background-color:gold");
          }
          if (
            row == 2 &&
            column == 0 &&
            btn.innerHTML === mark &&
            (index == 2 || index == 4 || index == 6)
          ) {
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
      button.forEach((btn, index) => {
        if (btn.hasAttribute("Disabled")) {
          if (
            row == 2 &&
            column == 2 &&
            btn.innerHTML === mark &&
            (index == 0 || index == 4 || index == 8)
          ) {
            btn.setAttribute("style", "background-color:gold");
          }
          if (
            row == 1 &&
            column == 1 &&
            btn.innerHTML === mark &&
            (index == 0 || index == 4 || index == 8)
          ) {
            btn.setAttribute("style", "background-color:gold");
          }
          if (
            row == 0 &&
            column == 0 &&
            btn.innerHTML === mark &&
            (index == 0 || index == 4 || index == 8)
          ) {
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
        mark == "X"
          ? (XScore.innerHTML = ++scoreX)
          : (OScore.textContent = ++scoreO);

        button.forEach((btn) => {
          btn.disabled = true;
        });
      } else if (counter >= 9) {
        h2.innerHTML = "Nobody won it's a tie ";
        message.appendChild(h2);
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
newgame.addEventListener("click", () => {
  button.forEach((btn) => {
    btn.removeAttribute("disabled");
    btn.removeAttribute("style");
    btn.innerHTML = "";
    gameBoard.reset();
    counter = 0;
    gameOn = true;
    h2.innerHTML = "";
  });
});
let message = document.querySelector(".message");
let resetButton = document.querySelector(".reset");
resetButton.addEventListener("click", () => {
  button.forEach((btn) => {
    btn.removeAttribute("disabled");
    btn.removeAttribute("style");
    btn.innerHTML = "";
    gameBoard.reset();
    counter = 0;
    gameOn = true;
    h2.innerHTML = "";
  });
  scoreO = 0;
  scoreX = 0;
  XScore.innerHTML = scoreX;
  OScore.innerHTML = scoreO;
});
