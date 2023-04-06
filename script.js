const wordleForm = document.getElementById("wordleForm");
const resultsDiv = document.getElementById("results");
const correctAnswer = "KALE";

wordleForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const guess = document.getElementById("guess").value.toUpperCase();
  const guessRow = document.createElement("div");
  guessRow.classList.add("guessRow");

  for (let i = 0; i < 4; i++) {
    const letterSpan = document.createElement("span");
    letterSpan.textContent = guess[i];

    if (guess[i] === correctAnswer[i]) {
      letterSpan.style.color = "green";
    } else if (correctAnswer.includes(guess[i])) {
      letterSpan.style.color = "orange";
    } else {
      letterSpan.style.color = "red";
    }

    guessRow.appendChild(letterSpan);
  }

  resultsDiv.appendChild(guessRow);
  document.getElementById("guess").value = "";
});
