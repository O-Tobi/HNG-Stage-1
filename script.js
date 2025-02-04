document.addEventListener("DOMContentLoaded", () => {
    const colorButtons = document.querySelectorAll('[data-testid="colorOption"]')
    const colorBoxx = document.querySelector('[data-testid="colorBox"]');
    const scoreCard = document.querySelector('[data-testid="score"]')
    const resetButton = document.querySelector('[data-testid="newGameButton"]');
    const gameStatus = document.querySelector('[data-testid="gameStatus"]');
    

    colorButtons.forEach(button => {
        button.addEventListener('click', () => {
            const colorArray = Array.from(colorButtons).map(col => col.classList[1]);
            const randomIndex = Math.floor(Math.random() * colorArray.length);
            const randomColor = colorArray[randomIndex];
            const classListArray = Array.from(button.classList)
            if (classListArray.length > 1) {
                const newClass = classListArray[1];
                colorBoxx.style.backgroundColor = newClass;
                colorBoxx.innerHTML = "";

                if (newClass == randomColor) {
                    let currentScore = parseInt(scoreCard.innerHTML) || 0; // Get the current score, default to 0 if empty
                    scoreCard.innerHTML = currentScore + 1;
                    gameStatus.innerHTML = "You guessed right!";
                    gameStatus.style.backgroundColor = "green";

                } else {
                    gameStatus.innerHTML = "Try again";
                    gameStatus.style.backgroundColor = "red";
                }
            }

        })
    });

    if (resetButton) {
        resetButton.addEventListener("click", () => {
            scoreCard.innerHTML = 0
            colorBoxx.style.backgroundColor = "black";
            colorBoxx.innerHTML = "?";
            gameStatus.innerHTML = "";
            gameStatus.style.backgroundColor = "";
            gameStatus.style.opacity = "0";
        })
    };

})