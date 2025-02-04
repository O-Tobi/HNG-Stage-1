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
            const classListArray = Array.from(button.classList);

            
            if (classListArray.length > 1) {
                // Get the color class of the clicked button
                const newClass = classListArray[1];

                //check if selected color matches the randomly chosen color
                if (newClass === randomColor) {
                    let currentScore = parseInt(scoreCard.innerHTML) || 0;
                    scoreCard.innerHTML = currentScore + 1;
                    gameStatus.innerHTML = "You guessed right!";
                    gameStatus.style.backgroundColor = "green";
                    colorBoxx.style.backgroundColor = randomColor;
                    colorBoxx.innerHTML = "";
                    colorBoxx.classList.add("happy");
                } else {
                    gameStatus.innerHTML = "Try again";
                    gameStatus.style.backgroundColor = "red";
                }

            
                gameStatus.style.opacity = "1";

                // Set a timeout to gradually fade out
                setTimeout(() => {
                    gameStatus.style.transition = "opacity 1.5s ease-out"; // Smooth fade-out effect
                    gameStatus.style.opacity = "0";
                }, 600);

                // Remove the text after the fade-out completes
                setTimeout(() => {
                    gameStatus.innerHTML = "";
                    gameStatus.style.backgroundColor = "";
                    gameStatus.style.opacity = "1";
                    colorBoxx.style.backgroundColor = "black";
                    colorBoxx.innerHTML = "?";
                    colorBoxx.classList.remove("happy");
                }, 3500);

            }

        })
    });

    //eventlistener for reset button
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