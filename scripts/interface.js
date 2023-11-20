document.addEventListener("DOMContentLoaded", () => {
  let squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    square.addEventListener("click", handleClick);
  });
  resetGame();
});

const handleClick = (event) => {
  let square = event.target;
  let position = square.id;

  if (handleMove(position)) {
    setTimeout(() => {
      const changeSymbol = () => {
        if (symbols[playerTime] == "o") {
          symbols[playerTime] = "🛡";
        } else {
          symbols[playerTime] = "⚔️";
        }
      };

      if (isWin()) {
        changeSymbol();
        alert("o jogo acabou - O vencedor foi " + symbols[playerTime]);
      } else if (isDraw()) {
        alert("o jogo acabou - Empate");
      }
    }, 20);
  }

  updateSquare(position);
};

const updateSquare = (position) => {
  let square = document.getElementById(position.toString());
  let symbol = board[position];
  square.innerHTML = `<div class='${symbol}'></div>`;
};

const resetGame = () => {
  let resetButton = document.getElementById("reset");
  resetButton.addEventListener("click", () => {
    board = ["", "", "", "", "", "", "", "", ""];
    playerTime = 0;
    gameOver = false;
    symbols[0] = "o";
    symbols[1] = "x";
    for (let i = 0; i < 9; i++) {
      updateSquare(i);
    }
  });
};
