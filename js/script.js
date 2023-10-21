// Función para generar un número aleatorio entre 1 y 100
function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

document.addEventListener('DOMContentLoaded', function () {
    const guessButton = document.getElementById('guessButton');
    const resetButton = document.getElementById('resetButton');
    const guessInput = document.getElementById('guessInput');
    const message = document.getElementById('message');
    const attemptsParagraph = document.getElementById('attemptsCount');
    const winAudio = document.getElementById('winAudio');
    const loseAudio = document.getElementById('loseAudio');

    let targetNumber = generateRandomNumber();
    let attempts = 0;

    guessButton.addEventListener('click', checkGuess);
    resetButton.addEventListener('click', resetGame);

    function checkGuess() {
        const guess = parseInt(guessInput.value);

        if (isNaN(guess) || guess < 1 || guess > 100) {
            message.textContent = 'Ingresa un número válido entre 1 y 100.';
            attemptsParagraph.textContent = `Intentos: ${attempts}`;
        } else {
            attempts++;
            if (guess < targetNumber) {
                message.textContent = 'Demasiado bajo. Intenta de nuevo.';
            } else if (guess > targetNumber) {
                message.textContent = 'Demasiado alto. Intenta de nuevo.';
            } else {
                message.textContent = `¡Correcto! Adivinaste el número en ${attempts} intentos.`;
                guessInput.disabled = true;
                guessButton.disabled = true;
                resetButton.disabled = false;

                winAudio.play();
            }

            attemptsParagraph.textContent = `Intentos: ${attempts}`;

        }

        if (attempts >= 10 && guess !== targetNumber) {

            message.textContent = 'Perdiste. El número era ' + targetNumber;
            guessInput.disabled = true;
            guessButton.disabled = true;
            resetButton.disabled = false;

            loseAudio.play()


        }

    }
    
    console.log(targetNumber)
    function resetGame() {
        targetNumber = generateRandomNumber();
        attempts = 0;
        guessInput.value = '';
        guessInput.disabled = false;
        guessButton.disabled = false;
        resetButton.disabled = true;
        message.textContent = '';
        attemptsParagraph.textContent = 'Intentos: 0';
    }
});