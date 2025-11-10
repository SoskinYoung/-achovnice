const board = document.getElementById("Board");
const resetBtn = document.getElementById("resetBtn");

// === Vytvoření 10x10 šachovnice ===
for (let row = 0; row < 10; row++) {
  for (let col = 0; col < 10; col++) {
    const square = document.createElement("div");
    square.classList.add("square");

    // Střídání světlé a tmavé barvy
    if ((row + col) % 2 === 0) {
      square.classList.add("light");
    } else {
      square.classList.add("dark");
    }

    // === Reakce na kliknutí ===
    square.addEventListener("click", () => {
      square.classList.toggle("clicked");
    });

    board.appendChild(square);
  }
}

// === Reset tlačítko ===
resetBtn.addEventListener("click", () => {
  const squares = document.querySelectorAll(".square");
  squares.forEach(sq => sq.classList.remove("clicked"));
});
