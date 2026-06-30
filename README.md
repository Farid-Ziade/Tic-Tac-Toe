# Tic-Tac-Toe

A classic two-player Tic-Tac-Toe game built with vanilla HTML, CSS, and JavaScript.

## Demo

Open `index.html` in any modern browser — no build step or server required.

## Features

- Two-player local multiplayer (Player 1 = X, Player 2 = O)
- Win detection for rows, columns, and both diagonals
- Winning cells highlighted in gold
- Score tracking that persists across rounds
- **New Game** — resets the board while keeping scores
- **Reset** — resets the board and clears all scores
- Tie detection when all 9 cells are filled with no winner

## How to Play

1. Player 1 (X) clicks any cell to place their mark.
2. Players alternate turns until someone wins or the board is full.
3. The winning combination is highlighted and the winner's score increments.
4. Click **New Game** to play another round, or **Reset** to start fresh from 0–0.

## Project Structure

```
Tic-Tac-Toe/
├── index.html   # Markup and layout
├── style.css    # Styling and grid layout
└── script.js    # Game logic (board state, win detection, score tracking)
```

## Technologies

- HTML5
- CSS3 (CSS Grid)
- JavaScript (ES6+, IIFE module pattern)

## Getting Started

```bash
git clone https://github.com/Farid-Ziade/Tic-Tac-Toe.git
cd Tic-Tac-Toe
# Open index.html in your browser
```
